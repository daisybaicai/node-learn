const { getList, getDetail, newBlog, updateBlog, delBlog } = require('../controller/blog')
const { SuccessModel, ErrorModel }  = require('../modal/resModal')

const handleBlogRouter = (req, res) => {
    const url = req.url
    const method = req.method
    const id = req.query.id || ''

    // 获取博客接口
    if (method === 'GET' && req.path === '/api/blog/list') {
        const author = req.query.author || '';
        const keyword = req.query.keyword || '';
        // const listData = getList(author, keyword);
        // return new SuccessModel(listData)
        const result = getList(author, keyword)
        return result.then(listData => {
            return new SuccessModel(listData)
        })
    }

    // 获取博客详情接口
    if (method === 'GET' && req.path === '/api/blog/detail') {
        // const listData = getDetail(id);
        // return new SuccessModel(listData)
        const result = getDetail(id)
        return result.then(data => {
            return new SuccessModel(data)
        })
    }

    // 新建博客接口
    if (method === 'POST' && req.path === '/api/blog/new') {
        // return {
        //     msg: '新建博客接口'
        // }
        req.body.author = 'zhangsan'
        const result = newBlog(req.body)
        return result.then(data => {
            return new SuccessModel(data)
        })
    }

    // 更新一篇博客
    if (method === 'POST' && req.path === '/api/blog/update') {
        // return {
        //     msg: '更新一篇博客'
        // }
        const result = updateBlog(id, req.body)
        return result.then(val => {
            if (val) {
                return new SuccessModel()
            } else {
                return new ErrorModel('更新博客失败')        
            }
        })
    }

    // 删除一篇博客
    if (method === 'POST' && req.path === '/api/blog/delete') {
        // return {
        //     msg: '删除一篇博客'
        // }
        const author = 'zhangsan'
        const result = delBlog(id, author)

        return result.then(val => {
            if (val) {
                return new SuccessModel()
            } else {
                return new ErrorModel('删除博客失败')     
            }
        })
    }
}

module.exports = handleBlogRouter