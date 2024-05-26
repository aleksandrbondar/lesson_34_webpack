import "@css/style.css";
import "@css/fonts.css";
import "@less/style.less";
import "@scss/index.scss";

import $ from "jquery";
import Post from "@js/post.js";
import json from "@/assets/json/test.json";
import xml from "@/assets/xml/test.xml";

import React from "react";
import ReactDOM from "react-dom/client";

const post = new Post("Webpack from zero to hero");

$("pre").html(post.toString());

console.log(json);

console.log(xml);

async function start() {
  return await new Promise((r) => setTimeout(() => r("Async done."), 2000));
}

start().then((res) => console.log(res));

const App = () => {
  return (
    <>
      <h1>React training</h1>

      <div className="logo"></div>
      <div class="img"></div>
      <pre></pre>
      <div class="less-demo">
        <h2>Less</h2>
      </div>
      <div class="scss-demo">
        <h2>Scss</h2>
      </div>
    </>
  );
};

const Arr = () => {
  const arrTest = [1, 2, 3, 4, 5];
  return (
    <ul>
      {arrTest.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

const container = document.getElementById("root");
ReactDOM.createRoot(container).render(<App />);
