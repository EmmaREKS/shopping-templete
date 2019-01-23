import React from 'react';
import './footer.css';
const footer = () => {
    return (
        <div className="upperatt">
        <br />
            <div class="d-flex justify-content-center flowdetails">
                <div className="insideattributes">
                    <h4 className="Headingalign">WHO WE ARE</h4>
                    <ul className="ultype">
                        <li>About Us</li>
                        <li>Our Team</li>
                        <li>Countries Covered</li>
                        <li>industries Covered</li>

                    </ul>
                </div>
                <div className="insideattributes">
                    <h4 className="Headingalign">CONTACT US</h4>
                    <ul className="ultype">
                        <li>Call me </li>
                        <li>Text Me</li>
                        <li>Email me</li>

                    </ul>
                </div>
                <div className="insideattributes">
                    <h4 className="Headingalign">OTHERS</h4>
                    <ul className="ultype">
                        <li>FAQ's</li>
                    </ul>
                </div>
                <div className="insideattributes">
                    <h4 className="Headingalign">COVERAGE</h4>
                    <ul className="ultype">
                        <li>Sites Supported</li>
                        <li>Countries Supported</li>
                    </ul>
                </div>
            </div>
            <h3 className="Questionsclass">Questions? Call Us</h3>
            <div class="d-flex justify-content-around">
                <div>
                    1-800-PORTAL (1-800-xxx-xxxx)
              </div>
                <div>
                    /facebook
              </div>
                <div>
                    /@twitter
              </div>
                <div>
                    /instagram
              </div>
                <div>
                    /google plus

              </div>

            </div>
            <br />
            <div className="companydesc"> 
                <h6>© 2018 Company name All rights reserved.</h6>
            </div>

        </div>
    );
};

export default footer;