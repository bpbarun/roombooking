import React from "react";
function PoolArea(){
    return (
        <>
         <section className="pool-area section-padding-100 bg-img bg-fixed poolImage">
        <div className="container">
            <div className="row justify-content-end">
                <div className="col-12 col-lg-7">
                    <div className="pool-content text-center wow fadeInUp" data-wow-delay="300ms">
                        <div className="section-heading text-center white">
                            <div className="line-"></div>
                            <h2>Infinity Pool</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris sceleri sque, at rutrum nulla dictum. Ut ac ligula sapien. Suspendisse cursus faucibus finibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris sceleri sque, at rutrum nulla dictum.</p>
                        </div>

                        <div className="row">
                            <div className="col-12 col-sm-4">
                                <div className="pool-feature">
                                    <i className="icon-cocktail-1"></i>
                                    <p>Pool Beachbar</p>
                                </div>
                            </div>
                            <div className="col-12 col-sm-4">
                                <div className="pool-feature">
                                    <i className="icon-swimming-pool"></i>
                                    <p>Infinity Pool</p>
                                </div>
                            </div>
                            <div className="col-12 col-sm-4">
                                <div className="pool-feature">
                                    <i className="icon-beach"></i>
                                    <p>Sunbeds</p>
                                </div>
                            </div>
                        </div>
                       <a href="#" className="btn palatin-btn mt-50">Read More</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
        </>
    )
}
export default PoolArea