import React from "react";

function Stock({stock}) {
// console.log({stock})
  function addStockCard (e) {
    console.log(e.target.value)
  }
  return (
    <div>
      <div className="card" onClick={(e) => addStockCard(stock.id)}>
        <div className="card-body">
          <h5 className="card-title">{stock.name}</h5>
          <p className="card-text">{stock.price}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
