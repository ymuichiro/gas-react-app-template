import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";

export default function Index() {
  return <div>
    <Header />
    <h1>Template</h1>
  </div>;
}

ReactDOM.render(<Index />, document.getElementById("root"));
