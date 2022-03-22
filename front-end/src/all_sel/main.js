import React from 'react';
import ReactDOM from "react-dom";
import App from "./allergy";

ReactDOM.render(<App />, document.getElementById("root"));

const all_sel=()=>{
    return (
    <a>
        <h2>Allergy selection</h2>
        <App />
    </a>
    
    );
}
export default all_sel;