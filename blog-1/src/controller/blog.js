const getList = (author, keyword) => {
    // 返回假数据，做模拟
    return [
        {
            id: 1,
            title: 'title1',
            content: 'contentA',
            createTime: 1562724845176,
        },
        {
            id: 2,
            title: 'title2',
            content: 'contentB',
            createTime: 1562724875435,
        }
    ]
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

module.exports = {
    getList,
    getDetail
}