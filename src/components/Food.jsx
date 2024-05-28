import React, { useState, useEffect, useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from "axios";
import Cards from "./Cards";

function Food() {
  const [food, setFood] = useState([]);
  const sliderRef = useRef(null);

  useEffect(() => {
    const getFood = async () => {
      try {
        const res = await axios.get("https://87005145686.vercel.app/foods");
        const data = res.data.filter((data) => data.like === "Best");
        console.log(data);
        setFood(data);
        // Force update the slider
        if (sliderRef.current) {
          sliderRef.current.slickGoTo(0);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getFood();
  }, []);

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 dark:bg-slate-900 dark:text-white ">
        <div>
          <h1 className="font-semibold text-xl pb-2 dark:bg-slate-900 ml-2">Best available dish </h1>
          <p className="ml-2">Delicious and exciting food items starting at low cost<br/></p>
        </div>

        <div>
          {food.length > 0 ? (
            <Slider ref={sliderRef} {...settings}>
              {food.map((item) => (
                <Cards item={item} key={item._id} />
              ))}
            </Slider>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </>
  );
}

export default Food;