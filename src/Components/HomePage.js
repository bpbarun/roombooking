import React from "react";
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
// import AwesomeSlider from 'react-awesome-slider';
// import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import BookNow from './BookNow';
import Rooms from './Rooms';
import PlaceToRemember from './PlaceToRemember';
import PoolArea from './PoolArea';
function HomePage(){
    return (
    <>
    <section className=" align-items-center justify-content-center">
        <AwesomeSlider >
        <div data-src="/img/bg-img/bg-1.jpg" >
        <div class="single-hero-slide d-flex align-items-center justify-content-center">
            <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-12 col-lg-9">
                            <div class="hero-slides-content" data-animation="fadeInUp" data-delay="100ms">
                                <div class="line" data-animation="fadeInUp" data-delay="300ms"></div>
                                <h2 data-animation="fadeInUp" data-delay="500ms">The Vacation Heaven</h2>
                                <p data-animation="fadeInUp" data-delay="700ms">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris sceleri sque, at rutrum nulla dictum. Ut ac ligula sapien. Suspendisse cursus faucibus finibus.</p>
                                <a href="#" class="btn palatin-btn mt-50" data-animation="fadeInUp" data-delay="900ms">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div data-src="/img/bg-img/bg-2.jpg">
        <div class="single-hero-slide d-flex align-items-center justify-content-center">

            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-12 col-lg-9">
                        <div class="hero-slides-content" data-animation="fadeInUp" data-delay="100ms">
                            <div class="line" data-animation="fadeInUp" data-delay="300ms"></div>
                            <h2 data-animation="fadeInUp" data-delay="500ms">The Vacation Heaven</h2>
                            <p data-animation="fadeInUp" data-delay="700ms">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris sceleri sque, at rutrum nulla dictum. Ut ac ligula sapien. Suspendisse cursus faucibus finibus.</p>
                            <a href="#" class="btn palatin-btn mt-50" data-animation="fadeInUp" data-delay="900ms">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
        <div data-src="/img/bg-img/bg-3.jpg" >
        <div class="single-hero-slide d-flex align-items-center justify-content-center">

            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-12 col-lg-9">
                        <div class="hero-slides-content" data-animation="fadeInUp" data-delay="100ms">
                            <div class="line" data-animation="fadeInUp" data-delay="300ms"></div>
                            <h2 data-animation="fadeInUp" data-delay="500ms">The Vacation Heaven</h2>
                            <p data-animation="fadeInUp" data-delay="700ms">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris sceleri sque, at rutrum nulla dictum. Ut ac ligula sapien. Suspendisse cursus faucibus finibus.</p>
                            <a href="#" class="btn palatin-btn mt-50" data-animation="fadeInUp" data-delay="900ms">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </AwesomeSlider>
    </section>
      <BookNow/>
      <PlaceToRemember />
      <PoolArea />
      <Rooms sendToPage='/searchroom'/>
    </>
    )
}
export default HomePage