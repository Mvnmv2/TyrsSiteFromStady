import React, { Component } from "react";
import Slider from "react-slick";

export default class TestSlider extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            speed: 2000,
            autoplaySpeed: 2000,
            cssEase: "linear"
        };
        return (
            <div className="slider">
                <Slider {...settings}>
                    <div>
                        <img src="./img/first.jpg" width={600} height={350}/>
                    </div>
                    <div>
                        <img src="./img/second.jpg" width={600} height={350}/>
                    </div>
                    <div>
                        <img src="./img/three.jpg" width={600} height={350}/>
                    </div>
                    <div>
                        <img src="./img/four.jpg" width={600} height={350}/>
                    </div>
                </Slider>
            </div>
        );
    }
}