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

        // {require('/изображения/image-name.png')
        return (
            <div className="slider">
                <Slider {...settings}>
                    <div>
                        <img src={require('../assets/images/first.jpg')} width={500} height={350}/>
                    </div>
                    <div>
                        <img src={require('../assets/images/second.jpg')} width={500} height={350}/>
                    </div>
                    <div>
                        <img src={require('../assets/images/three.jpg')} width={500} height={350}/>
                    </div>
                    <div>
                        <img src={require('../assets/images/four.jpg')} width={500} height={350}/>
                    </div>
                </Slider>
            </div>
        );
    }
}