import React, { useEffect, useState } from "react";

function Card() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false"
    )
      .then((res) => res.json())
      .then((res) => {
        setData(res);
      });
  }, []);
  return (
    <div className="card-container">
      {
        data.map((item)=>(
            <div className="card" key={item.id}>
        <div className="image">
          <img className="img" src={item.image} alt={`${item.name} logo`} />
        </div>
        <div className="details">
          <div className="row">
            <span className="name">{item.name}</span>
            <span className="price">{item.current_price}</span>
          </div>
          <div className="row">
            <span className="short-name">{item.symbol}</span>
            <span className="change">{item.market_cap_change_percentage_24h}%</span>
          </div>
        </div>
      </div>
        ))
      }
    </div>
  );
}

export default Card;
