"use client"
import React, { useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import heroImg from '../../../assets/image/home/homeimg2.png'
import Image from 'next/image';

export default function HeroSlider() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "0px",
        slidesToShow: 1,
        speed: 500,
        arrows: true,
        dots: false,
        autoplaySpeed: 5000,
        speed: 500,
        arrows: false,
        autoplay: true,
        infinite: true,
        centerPadding: "0px",
        dotsClass: "slick-dots customedots slick-thumb",
        beforeChange: function (oldSlide, newSlide) {
            setCurrentSlide(newSlide);
        },
        customPaging: function (i) {
            return (
                <div className={` gap-2 flex `}>
                    <div className={` transition-all ease-out duration-300  ${currentSlide === i ? '!w-10 h-1.5 rounded-xl bg-[#4191A8] active' : 'w-6 h-1.5 rounded-xl bg-[#bdd5db]'}`}></div>
                </div>
            );
        },
        responsive: [
            {
                breakpoint: 1080,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            }
        ],

    };

    return (
        <div className="">
            <Slider {...settings} className='cursor-pointer'>
                <div data-aos="zoom-out-up" className="text-white lg:h-[22rem] overflow-hidden border-b border-b-green-400 ">
                    <Image className=' w-10/12  mx-auto ' src={heroImg} alt='heroImg' />
                </div>
                <div data-aos="zoom-out-up" className="text-white lg:h-[22rem] overflow-hidden border-b border-b-green-400 ">
                    <Image className=' w-10/12  mx-auto ' src={heroImg} alt='heroImg' />
                </div>
                <div data-aos="zoom-out-up" className="text-white lg:h-[22rem] overflow-hidden border-b border-b-green-400 ">
                    <Image className=' w-10/12  mx-auto ' src={heroImg} alt='heroImg' />
                </div>
                <div data-aos="zoom-out-up" className="text-white lg:h-[22rem] overflow-hidden border-b border-b-green-400 ">
                    <Image className=' w-10/12  mx-auto ' src={heroImg} alt='heroImg' />
                </div>
            </Slider>
        </div>
    );
}
