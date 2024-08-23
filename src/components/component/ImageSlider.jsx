"use client";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ImageSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: false, 
  };

  const images = [
    { url: "/ss1.png" },
    
    {url:"/dash-aah.png"},
  ];

  return (
    <div className="w-full  ">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <Image
              src={image.url}
              alt={`Slide ${index}`}
              width={1000}
              height={300}
              layout="responsive"
              objectFit="cover"
              priority
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
