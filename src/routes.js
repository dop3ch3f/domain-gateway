const ROUTES = [
    {
        url: '/area51',
        auth: false,
        creditCheck: false,
        rateLimit: {
            windowMs: 15 * 60 * 1000,
            max: 5
        },
        proxy: {
            target: "https://auhfkfq5vhs6.connect.remote.it",
            changeOrigin: true,
            preserveHashes: true,
            pathRewrite: {
                [`/area51/`]: "",
            },
        }
    },
    {
        url: '/nas',
        auth: false,
        creditCheck: false,
        rateLimit: {
            windowMs: 15 * 60 * 1000,
            max: 5
        },
        proxy: {
            target: "https://auhfkfq5vhs6.connect.remote.it",
            changeOrigin: true,
            preserveHashes: true,
            pathRewrite: {
                [`/nas/`]: "",
            },
        }
    },
    {
        url: '/',
        auth: false,
        creditCheck: false,
        rateLimit: {
            windowMs: 15 * 60 * 1000,
            max: 5
        },
        proxy: {
            target: "https://wabaifmb5hi4.connect.remote.it",
            changeOrigin: true,
            // pathRewrite: {
            //     [`^/premium`]: '',
            // },
        }
    }
]

exports.ROUTES = ROUTES;