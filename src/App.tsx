import React from "react";
import ReactDOM from "react-dom";
import * as ReactRouterDOM from "react-router-dom";
import TopPage from "./pages/TopPage";
import AboutPage from "./pages/AboutPage";
import { IDatabase } from "../types/CommonType";
import { Database } from "./Context";
import WindowExtention from "../types/WIndowExtention";

/** Google Script Run呼び出し用変数を定義 */
export let google = WindowExtention.google;

/** True = Debug Mode */
export const debugMode = false;

export default function App() {
  const [name, setName] = React.useState<string>("");

  /** Contextするオブジェクトを初期化する */
  const db: IDatabase = {
    name, setName,
  }

  return <div>
    <Database.Provider value={db}>
      <ReactRouterDOM.HashRouter>
        <ReactRouterDOM.Switch>
          {/* context対象を記載 */}
          <ReactRouterDOM.Route exact path="/"><TopPage /></ReactRouterDOM.Route>
          <ReactRouterDOM.Route path="/about"><AboutPage /></ReactRouterDOM.Route>
          {/* Default pathはSwitch最後に記載を */}
          <ReactRouterDOM.Route ><TopPage /></ReactRouterDOM.Route>
        </ReactRouterDOM.Switch>
      </ReactRouterDOM.HashRouter>
    </Database.Provider>
  </div >;
}

ReactDOM.render(<App />, document.getElementById("root"));