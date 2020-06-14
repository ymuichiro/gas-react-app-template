import React from "react";
import Header from "../components/Header";
import { IGoogleRun } from "../type";

let google: IGoogleRun;

export default function GasSample() {

  const googleRun = () => {
    google.script.run.withSuccessHandler(function () {
      console.log("success");
    }).recieveSpreadsheet();
  }

  return <div>
    <Header />
    <h1>About Page</h1>
    <button onClick={googleRun}>GoogleAppsSript</button>
  </div>;
}