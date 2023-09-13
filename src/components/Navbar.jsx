import React from "react";
function Navbar() {
  return (
    <nav className="navbar">
      <div className="user nav-common">
        <div className="nav-info">
          <span>TOTAL USER</span>
        </div>
        <div>
          <img src="assets/user.png" alt="user image" />
        </div>
        <div className="nav-number">
          <span>333</span>
        </div>
      </div>
      <div className="ads nav-common">
        <div className="nav-info">
          <span>TOTAL ADS</span>
        </div>
        <div>
          <img src="assets/megaphone.png" alt="megaphone image" />
        </div>
        <div className="nav-number">
          <span>333</span>
        </div>
      </div>
      <div className="wallet nav-common">
        <div className="nav-info">
          <span>TOTAL WALLETS</span>
        </div>
        <div>
          <img src="assets/wallet.png" alt="wallet image" />
        </div>
        <div className="nav-number nav-helper">
          <span>333</span>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
