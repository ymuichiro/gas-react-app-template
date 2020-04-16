import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import { Typography, Button, Container } from "@material-ui/core";
import { callSpreadsheet } from "./gas/googleScriptRun";

export default function Index() {

  const btn = () => {
    console.log("run");
    callSpreadsheet();
  }

  return <div>
    <Header />
    <Container>
      <Typography variant="h1" color="primary">Template</Typography>
      <Button variant="contained" color="primary" onClick={btn}>call</Button>
    </Container>
  </div>;
}

ReactDOM.render(<Index />, document.getElementById("root"));
