const { exec } = require('../db/mysql')

const getList = (author, keyword) => {
    let sql = 'select * from blogs where 1=1'

    if (author) {
        sql += `and author =${author}`
    }
    
    if (keyword) {
        sql += `and title like '%${keyword}%' `
    }

    // sql += "`order` by createtime desc;"
    return exec(sql)
}

const getDetail = (id) => {
    // 返回假数据，做模拟
    return [
        {
            id: 1,
            title: 'title1',
            content: 'contentA',
            createTime: 1562724845176,
        }
    ]
}


const newBlog = (blogData = {}) => {

}

const updateBlog = (id, blogData = {}) => {
    
}

const delBlog = (id) => {
    
}
module.exports = {
    getList,
    getDetail,
    newBlog,
    updateBlog,
    delBlog
}