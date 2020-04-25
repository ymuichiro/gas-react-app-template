import React from "react";
import Header from "../components/Header";
import * as ReactRouterDOM from "react-router-dom";

export default function AboutPage() {
  return <div>
    <Header />
    <h1>About Page</h1>
    <ReactRouterDOM.Link to="/">Back to Home</ReactRouterDOM.Link>
  </div>;
}