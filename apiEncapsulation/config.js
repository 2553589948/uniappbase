let url_path = {}

// 开发环境
if (process.env.NODE_ENV === 'development') {
    url_path = {
        'base_url': 'https://79.97.101.8881'
    }
}

// 生产环境
if (process.env.NODE_ENV === 'production') {
    url_path = {
        'base_url': 'https://79.87.103.8880'
    }
}

export default url_path