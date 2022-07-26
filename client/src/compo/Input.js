import React from "react";
import { useState } from "react";
import axios from "axios";
import "./Input.css"

function Input(props) {
  const [name, setname] = useState("");
  function changeddetofuser(event) {
    setname(event.target.value);
  }

  function Save() {
    axios
      .post("http://localhost:3003/Save", {
        F1: name,
      })
      .then((res) => {
        

        if (res.data.message === "saved") {
          console.log("done");
          props.ss();
        }
      });
   
  }

  return (
    <div className="ab">
  
    <div className="bc">
    <h2>MERN Stack TO DO List</h2>
    <span>Save your WORK :     </span>     
      <input className="oo" onChange={changeddetofuser} value={name} />
      <button className="pp" onClick={Save}>save</button>
    </div></div>
  );
}
export default Input;  
