import React from 'react';
import Food from '../../public/food.png';
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

function Banner() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const subsInfo = {
      contact: data.contact,
    };
    await axios.post("https://87005145686.vercel.app/subscriber/entry", subsInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success('Subscribed successfully');
          // Navigate function should be defined or imported
          // navigate(from, { replace: true });
        }
        localStorage.setItem("Subscribers", JSON.stringify(res.data.user));
        window.location.reload();
      })
      .catch((err) => {
        if (err.response) {
          console.log(err);
          toast.error("Error: " + err.response.data.message);
        }
      });
  };

  return (
    <>
      <div className='max-w-screen-2x1 container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10'>
        <div className='w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-32'>
          <div className='space-y-8'>
            <h1 className="text-4xl font-bold">
              Hello, welcome here to Zepify to order <span className='text-violet-500'>exciting food!!!</span>
            </h1>
            <p className='text-xl'>Here you will get delicious and fresh food items at the discounted rates<br />
              *No tax apply
            </p>
            <form onSubmit={handleSubmit(onSubmit)}>
              <label className="input input-bordered flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                <input
                  type="tel"
                  className="grow"
                  placeholder="Phone Number"
                  {...register("contact", { required: true })}
                />
                {errors.contact && <span>This field is required</span>}
              </label>
              <button type="submit" className="btn mt-6 btn-primary">Subscribe here</button>
            </form>
          </div>
        </div>
        <div className='order-1 w-full md:w-1/2'>
          <p><br /><br />
          </p>
          <img src={Food} className='w-100 h-92' alt='Food' />
        </div>
      </div>
    </>
  );
}
export default Banner;
