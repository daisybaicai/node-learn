const handleUserRouter = require('./src/router/user')
const handleBlogRouter = require('./src/router/blog')
const queryString = require('querystring')

const serverHandle = (req, res) => {
    res.setHeader('Content-type', 'application/json');

    const url = req.url
    req.path = url.split('?')[0]
    req.query = queryString.parse(url.split('?')[1])
    
    // 处理blog路由
    const blogResult = handleBlogRouter(req, res)
    if (blogResult) {
        blogResult.then(blogData => {
            res.end(
                JSON.stringify(blogData)
            )
        })
        return
    }

    // const blogData = handleBlogRouter(req,res);
    // if (blogData) {
    //     res.end(JSON.stringify(blogData));
    //     return
    // }

    // 处理user路由
    // const userData = handleUserRouter(req,res);
    // if (userData) {
    //     res.end(JSON.stringify(userData));
    //     return
    // }

    // 处理user路由
    const userResult = handleUserRouter(req,res);
    if (userResult) {
        userResult.then(userData => {
            res.end(
                JSON.stringify(userData)
            )
        })
        return
    }

    // 如果未命中
    res.writeHead(404, ['Content-type', 'text/plain']);
    res.write('404 not found');
    res.end()
}

module.exports = serverHandle