import React from "react";
import "./Footer.css"


function Footer() {
    return (
        <div className="main-footer">

            {/* column1 */}
            <div className="col">
                <h4>Contact us</h4>
                <ul className="list-unstyled">
                    <li>Email address</li>
                    <li>+491927272727</li>
                    <li>Seetrasse 12. 162891 Wedding Germny</li>
                </ul>
            </div>
            {/* column2 */}
            <div className="col">
                <h4>Our Policy</h4>
                <ul className="list-unstyled">
                    <li>Private policy</li>
                    <li>Data Prefarence</li>
                    <li>Term-Condition</li>
                    <li>Imprint</li>
                </ul>
            </div>
            {/* column3 */}
            <div className="col">
                <h4>Payment Methods</h4>
                <ul className="list-unstyled">
                    <li>Credit card</li>
                    <li>Visa card</li>
                    <li>American express</li>
                    <li>Discover network</li>
                    <li>PayPal</li>
                </ul>
            </div>

        </div>


        // <hr />
        // <div className="row">
        //     <p className="col-sm">
        //         &copy;{new Date().getFullYear()} Best-Shop | All right reserved | Privacy | Cookies Notice

        //     </p>

        // </div>

    );
}

export default Footer;