import React from 'react';
import Brand from '../images/3.JPG';
import './navbar-custom.css';

const header = () => {
    return (

        <nav class=" d-flex justify-content-around  navdesc">



            <img src={Brand} width="150" height="30" class="d-inline-block align-top" alt="" />
            <div class="input-group col-md-6">
                <div class="input-group-prepend">
                    <button class="btn btn-outline-info dropdown-toggle btnlayout" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{ color: "white" }}>Category</button>
                    <div class="dropdown-menu">
                        <a class="dropdown-item" href="#">Action</a>
                        <a class="dropdown-item" href="#">Another action</a>
                        <a class="dropdown-item" href="#">Something else here</a>
                        <div role="separator" class="dropdown-divider"></div>
                        <a class="dropdown-item" href="#">Separated link</a>
                    </div>
                </div>
                <input type="text" class="form-control" placeholder="Search" aria-label="Text input with dropdown button" />
                <button class="btn btn-outline-secondary" style={{ color: "white" }} type="button">Search</button>
            </div>
            <button class="btn btn-outline-info dropdown-toggle btnlayout" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{ color: "white" }}>United States</button>

            <button class="btn btn-outline-info dropdown-toggle btnlayout" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{ color: "white" }}>USD</button>


        </nav>
    );
};

export default header;