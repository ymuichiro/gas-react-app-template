# Web Application Template
ReactとMaterial-UIによるWeb開発を行う際のテンプレート。

# 利用ライブラリ
    - React,React-router
    - Material-UI
    - react-hook-form
    - Typescript
    - Google Apps Script

# 利用方法
    - claspにてrootDirをbuildとしてPJを作成
    - src内でアプリケーションの開発。なおGASサーバサイトのみGASフォルダを利用し外部よりimportは行わない。
    - npm run devで確認、deployにてGASへ反映させる

# update
    - 2020/04/16：html-webpack-inline-source-pluginにて undefind tapAsync エラーが発生。以下の点を修正
        - バージョンを"html-webpack-inline-source-plugin": "1.0.0-beta.2"へ変更
        - webpack.config.js上[new HtmlWebpackInlineSourcePlugin()]から[new HtmlWebpackInlineSourcePlugin(HtmlWebpackPlugin)]へ修正
        - Error Close
    - 2020/04/16：process.envによるpackage.json scriptsの効率化を実施
    - 2020/04/25：React Routerに対応、かつCDNのバージョン固定を実施
    - 2020/07/09：google.script.runをTSファイル上で操作可能に修正（アンビエント宣言追加）
    - 2020/07/14：V8 Runtimeに対応（tsconfig変更）
    - 2020/08/03：Form作成ライブラリとしてReact-Hook-Formを追加
    - 2020/08/04：Transitionのサンプルを追加
    - 2020/08/04：よく使うComponentをサンプルとして追加
    - 2020/08/05：Rechartsライブラリを追加
    - 2020/08/05：GAS Editerの重さ対策にGulpによる改行を追加,スクロール量によるTransition効果サンプル追加
