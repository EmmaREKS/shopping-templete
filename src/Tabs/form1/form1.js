import React, { Component } from 'react'
import './form1.css';
export default class form1 extends Component {
    render() {
        return (
            <div>

                <div className="center">
                    <form>
                        <div className="form-row">

                            <div className="col">
                                <select class="custom-select">
                                    <option selected>Country</option>
                                    <option value="1">USD</option>
                                    <option value="2">IND</option>

                                </select>
                            </div>
                            <div className="col">
                                <input type="text" class="form-control" placeholder="First name" />
                            </div>
                            <div className="col">
                                <select class="custom-select">
                                    <option selected>Company Type</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                </select>
                            </div>
                            <div className="col">
                                <select class="custom-select">
                                    <option selected>Gov.t Entity</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                </select>
                            </div>
                        </div>
                        <br />
                        <div className="form-row">
                            <div className="col-md-8">
                                <textarea class="form-control" id="Textarea1" placeholder="Address Line one" rows="3"></textarea>
                            </div>
                            <div className="col-md-2">
                                <input type="text" class="form-control" placeholder="PIN" />
                            </div>
                            <div className="col-md-2">
                                <select class="custom-select">
                                    <option selected>City</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                </select>
                            </div>
                        </div>
                        <br />
                        <div className="form-row">
                            <div className="col-md-8">
                                <textarea class="form-control" id="Textarea2" placeholder="Address Line two" rows="3"></textarea>
                            </div>
                        </div>
                        <br />
                        <div className="form-row">

                            <div className="col">
                                <select class="custom-select">
                                    <option selected>Country Reg.d for tax</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>

                                </select>
                            </div>
                            <div className="col">
                                <input type="text" class="form-control" placeholder="VAT Tax Id" />
                            </div>
                            <div className="col">
                                <input type="text" class="form-control" placeholder="VAT Tax Id name" />
                            </div>

                        </div>
                        <br />
                        <div className="form-row">

                            <div className="col">
                                <input type="text" class="form-control" placeholder="First name" />
                            </div>
                            <div className="col">
                                <input type="text" class="form-control" placeholder="First name" />
                            </div>
                            <div className="col">
                                <input type="text" class="form-control" placeholder="First name" />
                            </div>
                            <div className="col">
                                <input type="text" class="form-control" placeholder="First name" />
                            </div>
                        </div>
                        <br />
                        <div className="form-row">

                            <div className="col">
                                <input type="text" class="form-control" placeholder="First name" />
                            </div>
                            <div className="col">
                                <input type="text" class="form-control" placeholder="First name" />
                            </div>
                            <div className="col">
                                <input type="text" class="form-control" placeholder="First name" />
                            </div>
                            <div className="col">
                                <select class="custom-select">
                                    <option selected>Currency</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                </select>
                            </div>
                        </div>
                        <br />
                        <button type="submit" class="btn btn-primary col-sm-12" >Save Changes</button>
                    </form>
                    <br/>
                    <div className="d-flex justify-content-end">
                       <button type="submit" class="btn btn-primary col-sm-1 mr-1" >Submit</button>
                        <button type="submit" class="btn btn-success col-sm-1 mr-1" >Next</button>
                        <button type="submit" class="btn btn-warning col-sm-1" >Home</button>
                    </div>
                </div>
            </div>
        )
    }
}
