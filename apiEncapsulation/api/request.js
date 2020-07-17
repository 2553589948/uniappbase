import url_path from '../config.js'

function base_request (url, data, method = 'GET', header = {})  {
    data = Object.assign({}, {
        'tokenClientKey': JSON.parse(uni.getStorageSync('user_info')).token
    }, data)
    return uni.request({
        method,
        data,
        url: url_path['base_url'] + url, 
        header
    })
}

function postReq(url, data) {
    return base_request(url, data, 'POST', {"Content-Type": "application/x-www-form-urlencoded"})
}

function getReq(url, data) {
    return base_request(url, data)
}

export default {
    postReq,
    getReq
}