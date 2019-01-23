import React from 'react';
import './header.css';
import cart from '../images/aaa.JPG';
import notify from '../images/bbb.JPG';
const headerdown = () => {
    return (
        <div className="topnav row">
            <div className="a1">
                Deliver to <br />new york
            </div>
            <div classname="">
                Shop By <br />category
             </div>
            <div className="c1">
                Hello Sign In
                    <br />
                CraftsMen
            </div>
            <div className="imagealign">

                <img src={cart} width="50" height="30" alt="" />
            </div>
            <div className="imagealign">
                <img src={notify} width="50" height="30" alt="" />
            </div>
        </div>
    );
};

export default headerdown;