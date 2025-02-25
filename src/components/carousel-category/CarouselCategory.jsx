import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { category } from "../../assets/data/data";
import "./category.css";
import "../../index.css";

// Custom Arrow Component
const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "rgba(0, 0, 0, 0.5)",
        borderRadius: "50%",
        right: "10px",
        zIndex: 10,
      }}
      onClick={onClick}
    />
  );
};

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "rgba(0, 0, 0, 0.5)",
        borderRadius: "50%",
        left: "10px",
        zIndex: 10,
      }}
      onClick={onClick}
    />
  );
};

// Main Component
const CarouselCategory = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Default tampilkan 3 item
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <section className="category">
      <div className="content">
        <Slider {...settings}>
          {category && category.length > 0 ? (
            category.map((item) => (
              <div className="boxs" key={item.id}>
                <div className="box">
                  <img src={item.cover} alt={item.category} />
                </div>
                <div className="overlay">
                  <h4>{item.category}</h4>
                  <h4>{item.title}</h4>
                </div>
              </div>
            ))
          ) : (
            <p>Loading categories...</p>
          )}
        </Slider>
      </div>
    </section>
  );
};

export default CarouselCategory;