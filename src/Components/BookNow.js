import React from "react";
function BookNow(){
    return (
    <>
    <div className="book-now-area">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-12 col-lg-10">
                    <div className="book-now-form">
                        <form action="#">
                            <div className="form-group">
                                <label for="select1">Check In</label>
                                {/* <select className="form-control" id="select1">
                                  <option>19 June</option>
                                  <option>20 June</option>
                                  <option>21 June</option>
                                  <option>22 June</option>
                                  <option>23 June</option>
                                  <option>24 June</option>
                                  <option>25 June</option>
                                </select> */}
                                <input type="date"/>
                            </div>

                            <div className="form-group">
                                <label for="select2">Check Out</label>
                                {/* <select className="form-control" id="select2">
                                  <option>20 June</option>
                                  <option>21 June</option>
                                  <option>22 June</option>
                                  <option>23 June</option>
                                  <option>24 June</option>
                                  <option>25 June</option>
                                  <option>26 June</option>
                                  <option>27 June</option>
                                </select> */}
                                <input type="date"/>
                            </div>

                            <div className="form-group">
                                <label for="select3">Adults</label>
                                <select className="form-control" id="select3">
                                  <option>01</option>
                                  <option>02</option>
                                  <option>03</option>
                                  <option>04</option>
                                  <option>05</option>
                                  <option>06</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label for="select4">Childrens</label>
                                <select className="form-control" id="select4">
                                  <option>00</option>
                                  <option>01</option>
                                  <option>02</option>
                                  <option>03</option>
                                  <option>04</option>
                                  <option>05</option>
                                  <option>06</option>
                                </select>
                            </div>

                            <button type="submit">Check Availability</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
    )
}
export default BookNow