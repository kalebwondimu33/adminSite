import React from "react";
import Chart from "./chart";
function Analytics() {
  return (
    <section>
      <div className="anyltic">
        <div className="anyltic-info">
          <div className="svg-user">
            <img src="assets/Component.svg" alt="componet image" />
          </div>
          <button className="button-anyltic button-product">PRODUCTS</button>
          <button className="button-anyltic button-register">REGISTERED</button>
          <button className="button-anyltic button-shop">SHOP</button>
        </div>
        <div className="anyltic-graph">
          <Chart />
        </div>
      </div>
    </section>
  );
}
export default Analytics;
