import * as $ from "jquery";
import Post from "@js/post.js";
import "@css/style.css";
import logo from "@img/logo.svg";
import img from "@img/test.png";
import json from "@/assets/json/test.json";
import xml from "@/assets/xml/test.xml";

const post = new Post("Webpack from zero to hero", logo, img);

// console.log(post.toString());

$("pre").html(post.toString());

console.log(json);

console.log(xml);
