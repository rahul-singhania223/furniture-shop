import React from "react";
import ReactDom from "react-dom";
import App from "./App";
import "./index.css";
import reducer, { initialState } from "./reducer";
import { Stateprovider } from "./Stateprovider";


ReactDom.render(
    <Stateprovider initialState={initialState} reducer={reducer}>
        <App />
    </Stateprovider>
    ,
    document.getElementById("root")
)