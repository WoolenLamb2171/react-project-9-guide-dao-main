import React, { useEffect, useState } from "react";

export default function Item(props) {
  const [total, setTotal] = useState(()=>{
    if(!Number.parseInt(localStorage.getItem("total"), 10)){
      return 0
    }
    return Number.parseInt(localStorage.getItem("total"), 10)
  });
  const { info } = props;

  useEffect(()=>{
    localStorage.setItem("total", total)
  }, [total])

  function handleAddClick() {
    setTotal(total + 1);
  }

  function handleRemoveClick() {
    if (total > 0) {
      setTotal(total - 1);
    }
  }

  // width: 300px;
  // height: 300px;

  return (
    <div id={info.id} className="item">
      <img  src={info.image} alt="" />
      <div className="item-info">
        <h2>{info.name}</h2>
        <p>{info.desc}</p>
      </div>
      <div className="item-quantity">
        <button
          className="item-less"
          disabled={total === 0}
          onClick={handleRemoveClick}
        >
          -
        </button>
        <h3 className="item-total">{total ? total : ""}</h3>
        <button className="item-more" onClick={handleAddClick}>
          +
        </button>
      </div>
    </div>
  );
}
