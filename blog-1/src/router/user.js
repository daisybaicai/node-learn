const handleUserRouter = (req, res) => {
    const url = req.url
    const method = req.method

    // 获取登录接口
    if (method === 'POST' && req.path === '/api/user/login') {
        return {
            msg: '登录接口'
        }
    }
}

module.exports = handleUserRouter