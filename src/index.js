import React from "react";
import ReactDOM from "react-dom";
import "./tachyons.css";
import "./styles.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();