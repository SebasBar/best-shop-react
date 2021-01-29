import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="main-footer">
      <div className="style-bar" />
      <div className="info">
        {/* column1 */}
        <div className="col">
          <h4 className="titles">Contact us</h4>
          <ul className="list-unstyled">
            <li>Email address</li>
            <li>+491927272727</li>
            <li>Seetrasse 12. 162891 Wedding Germany</li>
          </ul>
        </div>
        {/* column2 */}
        <div className="col">
          <h4 className="titles">Our Policy</h4>
          <ul className="list-unstyled">
            <a href="# ">
              {" "}
              <li>Private policy</li>
            </a>
            <a href="#">
              <li>Data Preference</li>
            </a>
            <a href="#">
              <li>Terms-Conditions</li>
            </a>
            <a href="#">
              <li>Imprint</li>
            </a>
          </ul>
        </div>
        {/* column3 */}
        <div className="col">
          <h4 className="titles">Payment Methods</h4>
          <ul className="list-unstyled">
            <li>Credit card</li>
            <li>Visa card</li>
            <li>American express</li>
            <li>Discover network</li>
            <li>PayPal</li>
          </ul>
        </div>
      </div>
      <div className="row">
        <p className="titles col-sm last">
          &copy;{new Date().getFullYear()} Best-Shop | All right reserved |
          Privacy | Cookies Notice
        </p>
      </div>
      <div className="style-bar" />
    </div>
  );
}

export default Footer;
