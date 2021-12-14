import React from "react";

function ItemsNumber(props) {
  return (
    <div style={{backgroundColor: "red", height: 20, width: 20, borderRadius: '50%' ,position: 'fixed', right: "7%", top: "4%", color: "white", textAlign: 'center', alignItems: 'center', fontSize: 14}}>{props.number}</div>

  );
}

export default ItemsNumber;