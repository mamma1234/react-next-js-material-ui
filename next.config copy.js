const withLess = require('@zeit/next-less');
const withTypescript = require('@zeit/next-typescript');

// fix: prevents error when .less files are required by node
if (typeof require !== 'undefined') {
    require.extensions['.less'] = file => {}
}

module.exports = withTypescript(withLess({
    lessLoaderOptions: {
        javascriptEnabled: true,
    },
    exportPathMap: () => return {
        '/': { page: '/' },
        '/about': { page: '/about' },
        '/readme.md': { page: '/readme' },
        '/p/hello-nextjs': { page: '/post', query: { title: 'hello-nextjs' } },
        '/p/learn-nextjs': { page: '/post', query: { title: 'learn-nextjs' } },
        '/p/deploy-nextjs': { page: '/post', query: { title: 'deploy-nextjs' } }
    },
}));