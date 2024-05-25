import React, { useEffect, useState, useRef } from "react";
import Cards from "./Card";
import axios from "axios";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Course() {
  const [fast, setFast] = useState([]);
  const [non, setNon] = useState([]);
  const [veg, setVeg] = useState([]);
  const [des, setDes] = useState([]);

  const fastSliderRef = useRef(null);
  const nonSliderRef = useRef(null);
  const vegSliderRef = useRef(null);
  const desSliderRef = useRef(null);

  useEffect(() => {
    const getFast = async () => {
      try {
        const res = await axios.get("https://87005145686.vercel.app/foods");
        const data = res.data.filter((data) => data.category === "Fast food");
        setFast(data);
      } catch (error) {
        console.log(error);
      }
    };
    getFast();
  }, []);

  useEffect(() => {
    const getNon = async () => {
      try {
        const res = await axios.get("https://87005145686.vercel.app/foods");
        const data = res.data.filter((data) => data.category === "Non veg");
        setNon(data);
      } catch (error) {
        console.log(error);
      }
    };
    getNon();
  }, []);

  useEffect(() => {
    const getVeg = async () => {
      try {
        const res = await axios.get("https://87005145686.vercel.app/foods");
        const data = res.data.filter((data) => data.category === "Veg food");
        setVeg(data);
      } catch (error) {
        console.log(error);
      }
    };
    getVeg();
  }, []);

  useEffect(() => {
    const getDes = async () => {
      try {
        const res = await axios.get("https://87005145686.vercel.app/foods");
        const data = res.data.filter((data) => data.category === "Dessert");
        setDes(data);
      } catch (error) {
        console.log(error);
      }
    };
    getDes();
  }, []);

  const settings = {
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
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
      <div className="mt-28 items-center justify-center text-center">
        <h1 className="text-2xl md:text-4xl">
          Now order online fresh foods and{" "}
          <span className="text-violet-500">Relax! :)</span>
        </h1>
        <Link to="/">
          <button className="mt-6 bg-violet-500 text-white px-4 py-2 hover:bg-violet-700 duration-300">
            Back
          </button>
        </Link>
      </div>

      <div className="mt-12">
        <h2 className="ml-3 text-lg md:text-2xl">Fast Food</h2>
        {fast.length > 0 ? (
          <Slider ref={fastSliderRef} {...settings}>
            {fast.map((item) => (
              <Cards item={item} key={item._id} />
            ))}
          </Slider>
        ) : (
          <p>Loading...</p>
        )}
      </div>

      <div className="mt-6">
        <h2 className="ml-3 text-lg md:text-2xl">Non-Veg Food</h2>
        {non.length > 0 ? (
          <Slider ref={nonSliderRef} {...settings}>
            {non.map((item) => (
              <Cards item={item} key={item._id} />
            ))}
          </Slider>
        ) : (
          <p>Loading...</p>
        )}
      </div>

      <div className="mt-6">
        <h2 className="ml-3 text-lg md:text-2xl">Veg Food</h2>
        {veg.length > 0 ? (
          <Slider ref={vegSliderRef} {...settings}>
            {veg.map((item) => (
              <Cards item={item} key={item._id} />
            ))}
          </Slider>
        ) : (
          <p>Loading...</p>
        )}
      </div>

      <div className="mt-6">
        <h2 className="ml-3 text-lg md:text-2xl">Dessert</h2>
        {des.length > 0 ? (
          <Slider ref={desSliderRef} {...settings}>
            {des.map((item) => (
              <Cards item={item} key={item._id} />
            ))}
          </Slider>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}

export default Course;
