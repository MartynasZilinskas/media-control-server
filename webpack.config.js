const { generateWebpackConfig } = require("@simplrjs/webpack");

const config = generateWebpackConfig({
    devServerPort: 4000,
    entryFile: "./src/client/app.tsx",
    staticContentDirectory: "./src/client/static/**/*",
    outputDirectory: "./.server/wwwroot",
    emitHtml: true,
    htmlOptions: {
        title: "Media Controller",
        meta: [
            {
                name: "viewport",
                content: "width=device-width, initial-scale=1, user-scalable=0"
            }
        ]
    },
    projectDirectory: __dirname
});

config.module.rules.push({
    test: /\.js$/,
    exclude: /(node_modules)\/(webpack-dev-server)/
});

module.exports = config;
