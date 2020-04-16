# Web Application Template
ReactとMaterial-UIによるWeb開発を行う際のテンプレート。

# 利用ライブラリ
    - React
    - Material-UI
    - Typescript

# update
    - 2020/04/16：html-webpack-inline-source-pluginにて undefind tapAsync エラーが発生。以下の点を修正
        - バージョンを"html-webpack-inline-source-plugin": "1.0.0-beta.2"へ変更
        - webpack.config.js上[new HtmlWebpackInlineSourcePlugin()]から[new HtmlWebpackInlineSourcePlugin(HtmlWebpackPlugin)]へ修正
        - Error Close
    - 2020/04/16：process.envによるpackage.json scriptsの効率化を実施
