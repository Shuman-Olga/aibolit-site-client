import React from "react";
import { hydrateRoot, createRoot } from "react-dom/client";

import App from "./App";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "material-icons/iconfont/material-icons.css";
import "./assets/scss/app.css";

const domNode = document.getElementById("root");

if (domNode.hasChildNodes()) {
  hydrateRoot(domNode, <App />);
} else {
  const root = createRoot(domNode);
  root.render(<App />);
}
