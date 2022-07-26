import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";
import Input from "./Input";
import "./Show.css";

function Show() {
  let k = [
    { _id: "1", name: "save your Work via above input", __v: 0 },
    { _id: "2", name: "use DELETE button to delete task", __v: 0 },
  ];

  const [ar, setarr] = useState([]);
  function Thirdparty(e) {
    return (
      <Card getsingle={() => shows()} key={e._id} _id={e._id} name={e.name} />
    );
  }

  function shows() {
    axios.get("http://localhost:3003/already").then((res) => {
      if (res.data.founditem.length === 0) {
        setarr(k);
      } else {
        setarr(res.data.founditem);
      }
    });
  }

  useEffect(() => {
    shows();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="h5">
      <Input ss={() => shows()} />
      incase your data not updated well, use this button
      <button onClick={shows}>Reload</button>
      <ul>
        <li className="hhhh"> {ar.map(Thirdparty)}</li>
      </ul>
    </div>
  );
}

export default Show;
