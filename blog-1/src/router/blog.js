const { getList, getDetail } = require('../controller/blog')
const { SuccessModel, ErrorModel }  = require('../modal/resModal')

const handleBlogRouter = (req, res) => {
    const url = req.url
    const method = req.method

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
        const id = req.query.id || ''
        const listData = getDetail(id);
        return new SuccessModel(listData)
    }

    // 新建博客接口
    if (method === 'POST' && req.path === '/api/blog/new') {
        return {
            msg: '新建博客接口'
        }
    }

    // 更新一篇博客
    if (method === 'POST' && req.path === '/api/blog/update') {
        return {
            msg: '更新一篇博客'
        }
    }

    // 删除一篇博客
    if (method === 'POST' && req.path === '/api/blog/delete') {
        return {
            msg: '删除一篇博客'
        }
    }
}

module.exports = handleBlogRouter