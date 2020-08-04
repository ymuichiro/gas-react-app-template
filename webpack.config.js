const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackInlineSourcePlugin = require("html-webpack-inline-source-plugin");

/** Base Paramater */
const mode = process.env.NODE_ENV === "development" ? "development" : "production";
const entry = path.resolve("src", "App.tsx");
const outPath = path.resolve("build");
const outFileName = "app.js";
/** Other Paramater */
const rules = [{ test: /\.tsx?$/, use: "ts-loader" }];
const resolve = { extensions: [".ts", ".tsx", ".js", ".json"] };
const output = { path: outPath, filename: outFileName };
const devServer = { contentBase: outPath };
const devtool = "inline-source-map";
const externals = [{
    "react": "React",
    "react-dom": "ReactDOM",
    "@material-ui/core": "MaterialUI",
    "react-router-dom": "ReactRouterDOM",
    "react-hook-form": "ReactHookForm",
}];
const plugins = [
    new HtmlWebpackPlugin({ inject: true, inlineSource: '.(js|css|tsx)$', template: "./public/index.html" }),
    new HtmlWebpackInlineSourcePlugin(HtmlWebpackPlugin),
]

module.exports = [
    { // React
        mode,
        entry,
        output,
        module: { rules },
        resolve,
        externals,
        devServer,
        devtool,
        plugins,
    }
]
