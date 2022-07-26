import React from "react";
import axios from "axios";
import "./Card.css";

function Card(props) {
  // function turn() {
  //   sdf();
  //   axios.delete("http://localhost:3003/delete/" + props._id).then(
  //     
  //     props.getsingle()
  //   );
  // }
  const turn = async () => {
    await axios
      .delete("http://localhost:3003/delete/" + props._id)
      .then(props.getsingle());
  };

  return (
    <div className="main">
      <div className="ap">
        <button className="del" onClick={turn}>
          DELETE
        </button>
        {props.name}
      </div>
    </div>
  );
}
export default Card;
