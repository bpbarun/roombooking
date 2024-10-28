import React from "react";
function Header(){
return(
<>
<header className="header-area">
    <div className="palatin-main-menu">
        <div className="classy-nav-container breakpoint-off">
            <div className="container">
                <nav className="classy-navbar justify-content-between" id="palatinNav">
                    <a href="index.html" className="nav-brand"><img src="img/core-img/logo.png" alt="" /></a>
                    <div className="classy-navbar-toggler">
                        <span className="navbarToggler"><span></span><span></span><span></span></span>
                    </div>
                    <div className="classy-menu">
                        <div className="classycloseIcon">
                            <div className="cross-wrap"><span className="top"></span><span className="bottom"></span></div>
                        </div>
                        <div className="classynav">
                            <ul>
                                <li className="active"><a href="index.html">Home</a></li>
                                <li><a href="about-us.html">About Us</a></li>
                                <li><a href="#">Pages</a>
                                    <ul className="dropdown">
                                        <li><a href="index.html">Home</a></li>
                                        <li><a href="about-us.html">About Us</a></li>
                                        <li><a href="services.html">Services</a></li>
                                        <li><a href="rooms.html">Rooms</a></li>
                                        <li><a href="blog.html">News</a></li>
                                        <li><a href="contact.html">Contact</a></li>
                                        <li><a href="elements.html">Elements</a></li>
                                    </ul>
                                </li>
                                <li><a href="#">Mega Menu</a>
                                    <div className="megamenu">
                                        <ul className="single-mega cn-col-4">
                                            <li><a href="index.html">Home</a></li>
                                            <li><a href="about-us.html">About Us</a></li>
                                            <li><a href="services.html">Services</a></li>
                                            <li><a href="rooms.html">Rooms</a></li>
                                            <li><a href="blog.html">News</a></li>
                                            <li><a href="contact.html">Contact</a></li>
                                            <li><a href="elements.html">Elements</a></li>
                                        </ul>
                                        <ul className="single-mega cn-col-4">
                                            <li><a href="index.html">Home</a></li>
                                            <li><a href="about-us.html">About Us</a></li>
                                            <li><a href="services.html">Services</a></li>
                                            <li><a href="rooms.html">Rooms</a></li>
                                            <li><a href="blog.html">News</a></li>
                                            <li><a href="contact.html">Contact</a></li>
                                            <li><a href="elements.html">Elements</a></li>
                                        </ul>
                                        <ul className="single-mega cn-col-4">
                                            <li><a href="index.html">Home</a></li>
                                            <li><a href="about-us.html">About Us</a></li>
                                            <li><a href="services.html">Services</a></li>
                                            <li><a href="rooms.html">Rooms</a></li>
                                            <li><a href="blog.html">News</a></li>
                                            <li><a href="contact.html">Contact</a></li>
                                            <li><a href="elements.html">Elements</a></li>
                                        </ul>
                                        <ul className="single-mega cn-col-4">
                                            <li><a href="index.html">Home</a></li>
                                            <li><a href="about-us.html">About Us</a></li>
                                            <li><a href="services.html">Services</a></li>
                                            <li><a href="rooms.html">Rooms</a></li>
                                            <li><a href="blog.html">News</a></li>
                                            <li><a href="contact.html">Contact</a></li>
                                            <li><a href="elements.html">Elements</a></li>
                                        </ul>
                                    </div>
                                </li>
                                <li><a href="services.html">Services</a></li>
                                <li><a href="contact.html">Contact</a></li>
                            </ul>
                            <div className="menu-btn">
                                <a href="#" className="btn palatin-btn">Make a Reservation</a>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    </div>
</header> 
</>

)
}
export default Header