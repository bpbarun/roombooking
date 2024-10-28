import React from "react";
function Footer(){
   return(
    <>
     <footer className="footer-area">
        <div className="container">
            <div className="row">
                <div className="col-12 col-lg-5">
                    <div className="footer-widget-area mt-50">
                        <a href="#" className="d-block mb-5"><img src="img/core-img/logo.png" alt="" /></a>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris sceleri sque, at rutrum nulla dictum. Ut ac ligula sapien. Suspendisse cursus faucibus finibus. </p>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                    <div className="footer-widget-area mt-50">
                        <h6 className="widget-title mb-5">Find us on the map</h6>
                        <img src="img/bg-img/footer-map.png" alt="" />
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-3">
                    <div className="footer-widget-area mt-50">
                        <h6 className="widget-title mb-5">Subscribe to our newsletter</h6>
                        <form action="#" method="post" className="subscribe-form">
                            <input type="email" name="subscribe-email" id="subscribeemail" placeholder="Your E-mail" />
                            <button type="submit">Subscribe</button>
                        </form>
                    </div>
                </div>

                <div className="col-12">
                    <div className="copywrite-text mt-30">
                        <p><a href="#" />
                        Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i className="fa fa-heart-o" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
                        4
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    </>
   )
}
export default Footer