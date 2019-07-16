const { loginCheck } = require('../controller/user')
const { SuccessModel, ErrorModel }  = require('../modal/resModal')

const handleUserRouter = (req, res) => {
    // const url = req.url
    const method = req.method

    // 获取登录接口
    if (method === 'POST' && req.path === '/api/user/login') {
        // return {
        //     msg: '登录接口'
        // }
        const {username, password} = req.body
        const result = loginCheck(username, password)
        return result.then(data => {
            if (data.username) {
                return new SuccessModel()
            }
            return new ErrorModel('登录失败')
        })
    }

}

module.exports = handleUserRouter