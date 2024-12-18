import React from "react";
import './bookingform.css'
import {IP} from './Constant'
import ImageGalleryData from "./ImageGalleryData";
const BookingForm = ()=>{
    return(
    <>
        <section class="breadcumb-area bg-img d-flex align-items-center justify-content-center firstImage">
            <div class="bradcumbContent">
                <h2>Booking</h2>
            </div>
        </section>
        <h2>Add Your Information:</h2>
        <div className="row">
            <div className="col-4">
                <div>
                    <ImageGalleryData />
                </div>
            </div>
            <div className="col-8">
                <form>
                <div class="form-group row">
                    <div>
                        <label for="name">Name <span class="mandatory">MANDATORY</span></label>
                        <input type="text" id="name" name="name" required />
                    </div>
                    <div>
                        <label for="surname">Surname <span class="mandatory">MANDATORY</span></label>
                        <input type="text" id="surname" name="surname" required />
                    </div>
                </div>

                <div class="form-group row">
                    <div>
                        <label for="email">Email <span class="mandatory">MANDATORY</span></label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div>
                        <label for="telephone">Telephone <span class="mandatory">MANDATORY</span></label>
                        <input type="tel" id="telephone" name="telephone" required />
                    </div>
                </div>

                <div class="form-group row">
                    <div>
                        <label for="address">Address</label>
                        <input type="text" id="address" name="address" />
                    </div>
                    <div>
                        <label for="city">City</label>
                        <input type="text" id="city" name="city" />
                    </div>
                </div>

                <div class="form-group row">
                    <div>
                        <label for="country">Country</label>
                        <input type="text" id="country" name="country" />
                    </div>
                    <div>
                        <label for="zip">ZIP</label>
                        <input type="text" id="zip" name="zip" />
                    </div>
                </div>

                <div class="form-group">
                    <input type="button" id="requests" value="Checkout" className="checkout-btn"/>
                </div>
            </form>
            </div>
        </div>
    </>
    )
}
export default BookingForm