import React, { useState } from "react";
import ReactDOM from "react-dom";
import { HashRouter, Switch, Route } from "react-router-dom";
import { TopPage } from "./pages/TopPage";
import { AboutPage } from "./pages/AboutPage";
import { IDatabase } from "../types/CommonType";
import { Database } from "./context";
import WindowExtention from "../types/WIndowExtention";
import { ThemeProvider } from "@material-ui/core";
import { theme } from "./theme";

/** Google Script Run呼び出し用変数を定義 */
export let google = WindowExtention.google;

/** True = Debug Mode */
export const debugMode = false;

export function App() {
    const [name, setName] = useState<string>("");
    const [nowPosition, setNowPosition] = useState<number>(0);

    /** Contextするオブジェクトを初期化する */
    const db: IDatabase = {
        nowPosition,
        name, setName,
    }

    /** Transitionとして利用する為のScroll量をStateに保持する */
    window.onscroll = () => {
        setNowPosition(window.pageYOffset);
    }

    return <div>
        <ThemeProvider theme={theme}>
            <Database.Provider value={db}>
                <HashRouter>
                    <Switch>
                        {/* context対象を記載 */}
                        <Route exact path="/">
                            <TopPage />
                        </Route>
                        <Route path="/about">
                            <AboutPage />
                        </Route>
                        {/* Default pathはSwitch最後に記載を */}
                        <Route >
                            <TopPage />
                        </Route>
                    </Switch>
                </HashRouter>
            </Database.Provider>
        </ThemeProvider>
    </div >;
}

ReactDOM.render(<App />, document.getElementById("root"));