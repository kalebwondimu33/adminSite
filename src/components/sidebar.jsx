import React, { useEffect, useState } from "react";
import Style from "styled-components";
// import { MdSpaceDashboard } from "react-icons/md";
// import { RiDashboard2Fill } from "react-icons/ri";
// import { FaAddressCard, FaTaxi } from "react-icons/fa";
// import { GiTwirlCenter } from "react-icons/gi";
// import { BsFillChatTextFill } from "react-icons/bs";
// import { IoSettings } from "react-icons/io5";
// import { FiLogOut } from "react-icons/fi";
// import { GiHamburgerMenu } from "react-icons/gi";
// import { VscChromeClose } from "react-icons/vsc";
function Sidebar() {
  const [currentLink, setCurrentLink] = useState(1);
  return (
    <>
      <section className="section-side">
        <div className="menu">
          <span>ADMIN PANEL</span>
          <img src="assets/menu.png" alt="menu image" className="menu-img" />
        </div>
        <div className="top">
          <div className="toggle"></div>
          <div className="links">
            <ul className="unorder-link">
              <li className="side-bar-list">
                <a href="#" className="link">
                  <div
                    onClick={() => setCurrentLink(1)}
                    className={currentLink === 1 ? " active" : ""}
                  >
                    <img
                      src="assets/dashboard.png"
                      alt="dashboard image"
                      className="side-bar-img"
                    />
                    <span className="side-bar-text">Dashboard</span>
                  </div>
                </a>
              </li>
              <li className="side-bar-list">
                <a href="#" className="link">
                  <div
                    onClick={() => setCurrentLink(2)}
                    className={currentLink === 2 ? "active " : ""}
                  >
                    <img
                      src="assets/marketing.png"
                      alt="marketing image"
                      className="side-bar-img"
                    />
                    <span className="side-bar-text">AD Management</span>
                  </div>
                </a>
              </li>
              <li className="side-bar-list">
                <a href="#" className="link">
                  <div
                    onClick={() => setCurrentLink(3)}
                    className={currentLink === 3 ? "active" : ""}
                  >
                    <img
                      src="assets/gear.png"
                      alt="gear image"
                      className="setting-img"
                    />
                    <span className="side-bar-text">Settings</span>
                  </div>
                </a>
              </li>
              <li className="side-bar-list">
                <a href="#" className="link">
                  <div
                    onClick={() => setCurrentLink(4)}
                    className={currentLink === 4 ? "active  " : ""}
                  >
                    <img
                      src="assets/customer-service.png"
                      alt="customer-service image"
                      className="side-bar-img"
                    />
                    <span className="side-bar-text">Customer Support</span>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default Sidebar;
