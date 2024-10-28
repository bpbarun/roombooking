import React from "react";
import BookNow from "./BookNow";
import BookingForm from "./BookingForm";
function SearchPage(){
    return(
        <>
        <section class="breadcumb-area bg-img d-flex align-items-center justify-content-center firstImage">
            <div class="bradcumbContent">
                <h2>Booking</h2>
            </div>
        </section>
        <BookNow/>
        <BookingForm />
        </>
    )
}
export default SearchPage;