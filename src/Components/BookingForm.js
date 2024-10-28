import React from "react";
import './bookingform.css'
const BookingForm = ()=>{
    return(
        <>
        
    <h2>Add Your Information:</h2>

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
        <label for="requests">Requests</label>
        <input type="text" id="requests" name="requests" />
    </div>
</form>
        </>
    )
}
export default BookingForm