import React from "react";
import "./Footer.css"


function Footer() {
    return (
        <div className="main-footer">

            {/* column1 */}
            <div className="col">

                <ul className="list-unstyled">
                    <h4>Contact us</h4>
                    <li>Email address</li>
                    <li>+491927272727</li>
                    <li>Seetrasse 12. 162891 Wedding Germany</li>
                </ul>
            </div>
            {/* column2 */}
            <div className="col">
                <ul className="list-unstyled">
                    <h4>Our Policy</h4>
                    <a href="#"> <li>Private policy</li></a>
                    <a href="#"><li>Data Preference</li></a>
                    <a href="#"><li>Terms-Conditions</li></a>
                    <a href="#"><li>Imprint</li></a>
                </ul>
            </div>
            {/* column3 */}
            <div className="col">
                <ul className="list-unstyled">
                    <h4>Payment Methods</h4>
                    <li>Credit card</li>
                    <li>Visa card</li>
                    <li>American express</li>
                    <li>Discover network</li>
                    <li>PayPal</li>
                </ul>
            </div>

        </div>


        // // <hr />
        // <div className="row">
        //     <p className="col-sm">
        //         &copy;{new Date().getFullYear()} Best-Shop | All right reserved | Privacy | Cookies Notice

        //     </p>

        // </div>

    );
}

export default Footer;