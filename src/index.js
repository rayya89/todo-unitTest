// NPM packages
import React from "react";
import ReactDOM from "react-dom/client";

// Project files
import App from "./App";
import { TasksProvider } from "./state/TasksContext"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<TasksProvider><App /></TasksProvider>);
