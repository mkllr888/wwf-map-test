const { extend, withPlugins } = require('next-compose-plugins');
const withImages = require('next-images');

module.exports = withPlugins(
    [
        withImages({
            webpack(config, options) {
                config.module.rules.push({
                    test: /\.md$/,
                    loader: 'frontmatter-markdown-loader',
                    options: { mode: ['react-component'] }
                });
                return config;
            }
        })
    ],
    {
        basePath: '/static/test/out'
    }
);
