import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import axios from "axios";
import { Link } from "react-router-dom";

function Course() {
  const [food,setFood]=useState([])
  useEffect(() => {
    const getFood = async()=>{
      try {
      const res = await axios.get("https://87005145686.vercel.app/foods");
      console.log(res.data)
      setFood(res.data)
      } catch (error) {
        console.log(error)
      }
    };
    getFood();
  },[]);
  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
      <div className="mt-28 items-center justify-center text-center">
        <h1 className="text-2xl md:text-4xl">
          Now order online fresh foods and{" "}
          <span className="text-violet-500"> Relax! :)</span>
        </h1>
        <Link to="/">
        <button className="mt-6 bg-violet-500 text-white px-4 py-2 hover:bg-violet-700 duration-300">
          Back
        </button>
        </Link>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-3">
        {food.map((item) => (
          <Cards key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default Course;
