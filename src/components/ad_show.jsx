import React from "react";
import Search from "./ReusableStyle";
function Adshow() {
  return (
    <section className="section-ad">
      <div className="ad-nav">
        <ul>
          <div className="nav-lists">
            <li>ADS</li>
            <li>BOOST</li>
            <li>SHOP</li>
          </div>
          <div>
            <Search />
            <img src="assets/componentTable.svg" alt="component image" />
          </div>
        </ul>
      </div>
    </section>
  );
}
