const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackInlineSourcePlugin = require("html-webpack-inline-source-plugin");

/** Base Paramater for React */
const mode = process.env.NODE_ENV === "development" ? "development" : "production";
const entry = path.resolve("src", "Index.tsx");
const outPath = path.resolve("build");
const outFileName = "main.js";
/** Other Paramater */
const rules = [{ test: /\.tsx?$/, use: "ts-loader" }];
const resolve = { extensions: [".ts", ".tsx", ".js", ".json"] };
const output = { path: outPath, filename: outFileName };
const devServer = { contentBase: outPath };
const externals = [{
  "react": "React",
  "react-dom": "ReactDOM",
  "@material-ui/core": 'MaterialUI',
}];
const plugins = [
  new HtmlWebpackPlugin({ inject: true, inlineSource: '.(js|css|tsx)$', template: "./src/index.html" }),
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
    plugins,
  }, // Google Apps Script
  {
    mode: "none",
    entry: path.resolve("src", "gas", "app.js"),
    output: { path: outPath, filename: "app.js" },
  }
]