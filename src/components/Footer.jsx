import React from "react";
import { assets } from "../assets/frontend_assets/assets";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div className="">
          <img src={assets.logo} alt="" className="mb-5 w-32" />
          <p className="w-full md:w-2/3 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            deserunt fugiat excepturi aperiam, sint ab, ex minus aliquid illum
            providen
          </p>
        </div>

        <div className="">
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li className="">Home</li>
            <li className="">About Us</li>
            <li className="">Delivery</li>
            <li className="">Privacy Policy</li>
          </ul>
        </div>

        <div className="">
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li className="">+1-555-555-5555</li>
            <li className="">hello@foreveryou.com</li>
          </ul>
        </div>
      </div>

      <div className="">
        <hr className="" />
        <p className="py-5 text-sm text-center">
          Copyright {new Date().getFullYear()} @helloKristinaFaye - All
          Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
