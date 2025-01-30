import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const GetInTouch = () => {
  return (
    <section id="getInTouch" className="w-full h-[96vh] bg-pageblack">
      <div className="flex flex-col px-[27.7vw] py-[11.4vh]">
        <h1 className="font-extrabold text-4xl text-white mb-[1.5vh] text-center">
          Get In Touch
        </h1>
        <h3 className="text-navfontcolor text-sm mb-[5.7vh] text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
          facilis adipisci reprehenderit nulla quam ratione dolorum. Ipsam nisi
          a, quasi, sit autem, velit atque voluptatibus consectetur soluta harum
          sapiente error.
        </h3>
        <div className="flex flex-col px-[8.6vw] mb-[3vh] ">
          <label className="text-white font-semibold text-xs">Your Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            className="p-3 text-xs rounded-sm fill-formfillcolor text-formfontcolor border border-formbordercolor"
          />
        </div>
        <div className="flex flex-col px-[8.6vw] mb-[3vh] ">
          <label className="text-white font-semibold text-xs">Email</label>
          <input
            type="email"
            placeholder="Enter your email address"
            className="p-3 text-xs rounded-sm fill-formfillcolor text-formfontcolor border border-formbordercolor"
          />
        </div>
        <div className="flex flex-col px-[8.6vw] mb-[3vh] ">
          <label className="text-white font-semibold text-xs">Email</label>
          <textarea
            name="message"
            placeholder="Hi, I think we need a design system for our products at Company X. How soon can you hop on to discuss this?"
            rows={7}
            minLength={30}
            className="p-3 text-xs rounded-sm fill-formfillcolor text-formfontcolor border border-formbordercolor"
          />
        </div>
        <div className="flex flex-col px-[8.6vw] ">
          <button className="primary-btn h-[7.2vh]">
            <p className="text-sm text-white font-bold">Submit</p>
            <IoIosArrowForward color="white" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
