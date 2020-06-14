import React from "react";
import ReactDOM from "react-dom";
import * as ReactRouterDOM from "react-router-dom";
import TopPage from "./pages/TopPage";
import AboutPage from "./pages/AboutPage";
import { IDatabase } from "./type";
import { Database } from "./context";

/** True = Debug Mode */
export const debugMode = false;

export default function App() {

  /** Contextするオブジェクトを初期化する */
  const db: IDatabase = {
    name: "sample site",
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