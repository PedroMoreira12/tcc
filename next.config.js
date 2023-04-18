module.exports = {
    webpack: (config) => {
        config.module.rules.push({
            test: /\.html$/,
            use: 'html-loader',
        });

        return config;
    },
};