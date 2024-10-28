import React from "react";
function PlaceToRemember(){
    return(
        <>
        <section className="about-us-area">
        <div className="container">
            <div className="row align-items-center">

                <div className="col-12 col-lg-6">
                    <div className="about-text text-center mb-100">
                        <div className="section-heading text-center">
                            <div className="line-"></div>
                            <h2>A place to remember</h2>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris sceleri sque, at rutrum nulla dictum. Ut ac ligula sapien. Suspendisse cursus faucibus finibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris sceleri sque, at rutrum nulla dictum. Ut ac ligula sapien. Suspendisse cursus faucibus finibus.</p>
                        <div className="about-key-text">
                            <h6><span className="fa fa-check"></span> Donec malesuada lorem maximus mauris sceleri</h6>
                            <h6><span className="fa fa-check"></span> Malesuada lorem maximus mauris sceleri</h6>
                        </div>
                        <a href="#" className="btn palatin-btn mt-50">Read More</a>
                    </div>
                </div>

                <div className="col-12 col-lg-6">
                    <div className="about-thumbnail homepage mb-100">
                        <div className="first-img wow fadeInUp" data-wow-delay="1000ms">
                            <img src="/img/bg-img/5.jpg" alt="" />
                        </div>
                        <div className="second-img wow fadeInUp" data-wow-delay="3000ms">
                            <img src="/img/bg-img/6.jpg" alt="" />
                        </div>
                        <div className="third-img wow fadeInUp" data-wow-delay="5000ms">
                            <img src="/img/bg-img/7.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
        </>
    )
}
export default PlaceToRemember;