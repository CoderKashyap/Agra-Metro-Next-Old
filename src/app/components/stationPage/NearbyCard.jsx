import React from "react";
import Logo from "../../../public/sunset.jpg";
import { RiPinDistanceLine } from "react-icons/ri";
import { IoFootstepsSharp } from "react-icons/io5";
import Image from "next/image";

const NearbyCard = ({ data }) => {
  return (
    <div className="border overflow-hidden rounded-md w-fit group">
      <div className="w-fit overflow-hidden">
        <Image
          src={Logo}
          className="group-hover:cursor-pointer group-hover:scale-125 transition-all ease-in-out duration-500 w-80 object-cover"
          alt=""
        />
      </div>
      <div className="p-2">
        <h3 className="my-2 text-sm font-semibold text-gray-900">
          {data.name}
        </h3>
        <hr />
        <div className="text-sm flex items-center justify-between my-1">
          <RiPinDistanceLine size={36} className="text-gray-500 mr-2" />
          <span className="w-full">Distance</span>
          <span className="w-full text-gray-600">1.5 Km</span>
        </div>
        <div className="text-sm flex items-center justify-start my-1">
          <IoFootstepsSharp size={36} className="text-gray-500 mr-2" />
          <span className="w-full">Walking Time</span>
          <span className="text-gray-600 w-full">10 Minutes</span>
        </div>
      </div>
    </div>
  );
};

export default NearbyCard;
