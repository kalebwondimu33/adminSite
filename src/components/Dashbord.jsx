import React from "react";
import Navbar from "./Navbar";
import Analytic from "./Analytics";
import UserInfo from "./Userinfo";
function Dashbord() {
  return (
    <section>
      <Navbar />

      <div className="row_one">
        <Analytic />
      </div>
      <div className="row-two">
        <UserInfo />
      </div>
    </section>
  );
}
export default Dashbord;
