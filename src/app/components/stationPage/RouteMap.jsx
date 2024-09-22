import React from "react";
import Station_Logo from "../../../public/Station_logo-2.png";
import Link from "next/link";
import Image from "next/image";

const RouteMap = ({ stationData, stationName }) => {
  const { prevStation, nextStation } = stationData;
  return (
    <header className="flex items-center justify-stretch w-full h-56 lg:h-80 relative">
      <div className="h-60 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex items-center justify-center">
        <Image
          src={Station_Logo}
          className="w-48 md:w-60  object-contain"
          alt=""
        />
        <h3 className="text-xs md:text-base tracking-wider text-white font-bold absolute z-10 ">
          {stationName}
        </h3>
      </div>
      <div className="w-full relative">
        <div className="relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 479.31 3.33"
            style={{ visibility: "visible" }}
          >
            <line
              y1="1.64"
              x2="479.31"
              y2="1.64"
              style={{
                fill: "none",
                stroke: "rgb(234,179,8)",
                strokeMiterlimit: 10,
                strokeWidth: 3,
              }}
            />
          </svg>
          <div className="previous-station absolute -top-3 left-8 md:left-16">
            <p className="bg-yellow-500 border-4 border-white rounded-full w-6 md:w-8 h-6 md:h-8 "></p>
          </div>
          <Link href="/station/Basai">
            <h3 className="w-16 sm:w-auto text-center text-xs md:text-sm absolute top-6 left-8 md:left-16 hover:cursor-pointer hover:text-red-700 font-medium">
              {prevStation}
            </h3>
          </Link>
        </div>
      </div>

      <div className="w-full relative">
        <div className="right-8 md:right-14">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 479.31 3.33"
            style={{ visibility: "visible" }}
          >
            <line
              y1="1.64"
              x2="479.31"
              y2="1.64"
              style={{
                fill: "none",
                stroke: "rgb(234,179,8)",
                strokeMiterlimit: 10,
                strokeWidth: 3,
              }}
            />
          </svg>
          <div className="next-station absolute -top-3 right-8 md:right-16">
            <p className="bg-yellow-500 border-4 border-white rounded-full w-6 md:w-8 h-6 md:h-8 "></p>
          </div>
          <Link href="/station/Taj-East-Gate">
            <h3 className="text-center text-xs md:text-sm absolute top-6 right-8 md:right-16 hover:cursor-pointer hover:text-red-700  w-16 sm:w-auto break-words font-medium">
              {nextStation}
            </h3>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default RouteMap;
