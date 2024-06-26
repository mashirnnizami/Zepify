import React from "react";

function Cards({ item }) {
  console.log(item); // Log the item to check its structure

  return (
    <div className="mt-4 my-3 p-3">
      <div className="card w-92 bg-base-100 shadow-xl hover:scale-105 duration dark:bg-slate-900 dark:text-white dark:border">
        <figure>
          <img src={item.image} alt={item.name} />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-sm md:text-xl">
            {item.name}
          </h2>
          <p>{item.quantity}</p>
          <div className="card-actions justify-between">
            <div className="badge badge-outline">{`Rs ${item.price ?? "N/A"}`}</div>
            <div className="cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-violet-500 hover:text-white duration-200">
              Buy Now
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Cards;
