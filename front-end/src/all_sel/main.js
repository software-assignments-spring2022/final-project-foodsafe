import React from 'react';
import ReactDOM from "react-dom";
import App from "./allergy";
import "./all_sel.css";

ReactDOM.render(<App />, document.getElementById("root"));

const all_sel=()=>{
    return (
    <a>
        <h2 className = "title">Allergy selection</h2>
        <App />
    </a>
    
    );
}
export default all_sel;