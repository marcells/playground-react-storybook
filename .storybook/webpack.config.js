const path = require('path');

module.exports = function ({ config }) {
    // Typescript -> Proptypes
    config.module.rules.push({
        test: /\.tsx?$/,
        include: path.resolve(__dirname, "../src"),
        use: [
            require.resolve("react-docgen-typescript-loader"),
        ],
    });

    // !!! Aktuell import/first lint-Fehler, wenn Komponente bearbeitet wird
    // // Story-Source
    // config.module.rules.push({
    //     test: /\.stories\.tsx?$/,
    //     include: path.resolve(__dirname, "../src"),
    //     loaders: [
    //         {
    //             loader: require.resolve('@storybook/addon-storysource/loader'),
    //             options: { parser: 'typescript' }
    //         }
    //     ],
    //     enforce: 'pre',
    // });
    // // \ Story-Source

    config.resolve.extensions.push(".ts", ".tsx");
    // \Typescript -> Proptypes

    return config;
};
