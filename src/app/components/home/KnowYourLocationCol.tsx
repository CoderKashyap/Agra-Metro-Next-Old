"use client";

import { useEffect, useState } from "react";
// import { useRouter } from "next/router";
import SearchIcon from "@mui/icons-material/Search";
import PinDropIcon from "@mui/icons-material/PinDrop";
import ZoomInMapOutlinedIcon from "@mui/icons-material/ZoomInMapOutlined";
import "./index.css";
import Image from "next/image";
import Map from "../../../public/agra-route-map.png";

const stations = [
  { stationName: "Taj East Gate", stationImgUrl: "" },
  { stationName: "Basai", stationImgUrl: "" },
  { stationName: "Fatehabad Road", stationImgUrl: "" },
  { stationName: "Taj Mahal", stationImgUrl: "" },
  { stationName: "Agra Fort", stationImgUrl: "" },
  { stationName: "Mankameshwar", stationImgUrl: "" },
];

const KnowYourLocationCol = () => {
  // const router = useRouter();
  const [isZoom, setIsZoom] = useState(false);

  const [fromStation, setFromStation] = useState("");
  const [showFromStation, setShowFromStation] = useState(false);
  const [fromStationObjRemake, setFromStationObjRemake] = useState<
    Array<{ stationName: string }>
  >([]);

  useEffect(() => {
    if (stations) setFromStationObjRemake(stations);
  }, [stations]);

  const createFromStationsObjForDropdown = (stationName: string) => {
    const filteredStations = stations?.filter((station) =>
      station.stationName.toLowerCase().includes(stationName.toLowerCase())
    );
    setFromStationObjRemake(filteredStations);
    if (stationName.length > 0) {
      setShowFromStation(true);
    } else {
      setShowFromStation(false);
      setFromStationObjRemake(stations);
    }
  };

  return (
    <>
      <div className="flex flex-col gap-6">
        <div
          onClick={() => {
            setShowFromStation(false);
          }}
          className="relative before:absolute before:bg-contain overflow-hidde before:h-40 before:w-52 before:top-4 sm:before:top-6 before:left-12 sm:before:left-20 before:opacity-10 before:bg-no-repeat before:bg-cente before:bg-[url('/watermarks/metro.png')] shadow-md bg-[#f5ffef] border border-[#b3d09f] rounded-lg p-4"
        >
          <div className="flex items-center gap-2">
            {" "}
            <SearchIcon className="text-[#acec84]" fontSize="medium" />{" "}
            <h2 className="text-lg font-medium -tracking-wider text-gray-800">
              Know Your Station
            </h2>
          </div>

          <div onClick={(e) => e.stopPropagation()} className="my-3 relative">
            {fromStation && fromStation ? (
              <div
                onClick={() => {
                  setShowFromStation(!showFromStation);
                  setFromStationObjRemake(stations);
                }}
                className="cursor-pointer flex items-center justify-between shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 w-full p-1.5"
              >
                <div className="flex items-center">
                  <Image
                    className="sm:h-7 sm:w-7 h-6 w-6 mx-2 object-contain"
                    src="/metroAgraLogo.webp"
                    data-src="/metroAgraLogo.webp" // Store the high-quality image URL in a data attribute
                    loading="lazy" // Enable lazy loading in supporting browsers
                    alt="brandImage"
                  />
                  <span className="mx-2"> {fromStation} </span>
                </div>
              </div>
            ) : (
              <>
                <div
                  onClick={() => {
                    setShowFromStation(!showFromStation);
                  }}
                  className="flex justify-center items-center"
                >
                  <input
                    type="text"
                    name="station"
                    id="fromStation"
                    className="shadow-sm text-gray-900 rounded-md focus:outline-none focus:ring-0 border border-gray-300 focus:border-gray-600 block w-full p-2"
                    placeholder="Search station or click to select"
                    onChange={(e) =>
                      createFromStationsObjForDropdown(e.target.value)
                    }
                    required
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-5 w-6 ${
                      showFromStation && "transform rotate-180"
                    } absolute right-2 text-gray-600 cursor-pointer`}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 6.293a1 1 0 011.414 0L10 9.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </>
            )}

            {/* From station dropdown  */}
            {showFromStation && (
              <div
                className={`p-0 bg-[#fcfffa] border border-gray-300 absolute w-full z-10 rounded-b-lg overflow-y-auto h-auto max-h-68`}
              >
                {fromStationObjRemake &&
                  fromStationObjRemake.map(
                    (station: { stationName: string }, index: number) => (
                      <div
                        onClick={() => {
                          setFromStation(station.stationName);
                          setShowFromStation(false);
                          // router.push(`/station/${station.stationName}`);
                        }}
                        key={index}
                        className="hover:bg-[#f1ffe7] rounded-lg px-2 py-1 relative flex gap-2 mx-2 my-2 items-center cursor-pointer"
                      >
                        <span className="ml-2 text-md">
                          {" "}
                          {station.stationName}{" "}
                        </span>
                      </div>
                    )
                  )}
              </div>
            )}
          </div>

          <div className="mt-4 flex justify-end items-center relative">
            <button
              onClick={(e) => e.stopPropagation()}
              className="bg-[#02555b] cursor-pointer rounded-md text-white font-medium text-sm p-2 px-6"
            >
              All Stations
            </button>
          </div>
        </div>

        {/* Agra Metro Map */}

        <div className="shadow-md bg-gray-100 border border-gray-300 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            {" "}
            <PinDropIcon className="text-gray-300" fontSize="medium" />{" "}
            <h2 className="text-lg font-medium -tracking-wider text-gray-800">
              Agra Metro Map
            </h2>
          </div>

          <div
            onClick={() => setIsZoom(true)}
            className="overflow-hidden rounded-lg h-28 cursor-pointer"
          >
            <Image
              width={500}
              height={100}
              className="transition-transform duration-300 transform hover:scale-110"
              src={Map}
              alt=""
              // srcSet="/agra-route-map.png"
            />
          </div>
        </div>
      </div>

      {isZoom && (
        <div className="map-open h-full z-20 w-full fixed top-0 left-0 bg-white">
          <div className="flex justify-center items-center h-screen">
            <Image
              width={500}
              height={200}
              className=""
              src={Map}
              alt=""
              // srcSet="../../public/agra-route-map.png"
            />
          </div>
          <span
            onClick={() => setIsZoom(false)}
            className="cursor-pointer fixed border border-1 border-gray-800 p-3 rounded-full text-gray-600 bottom-20 right-24"
          >
            <ZoomInMapOutlinedIcon fontSize="medium" />
          </span>
        </div>
      )}
    </>
  );
};

export default KnowYourLocationCol;
