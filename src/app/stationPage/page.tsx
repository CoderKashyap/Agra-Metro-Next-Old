"use client"

import { useState } from "react";
import { useParams } from "next/navigation";
import PlanYourJourneyCol, {PlanYourJourneyColButton} from "../components/home/PlanYourJourneyCol";
import WheelchairPickupIcon from "@mui/icons-material/WheelchairPickup";
import EscalatorIcon from "@mui/icons-material/Escalator";
import LocalParkingIcon from "@mui/icons-material/LocalParking";
import LogoutIcon from "@mui/icons-material/Logout";
import TrainIcon from "@mui/icons-material/Train";
import NearbyCard from "../components/stationPage/NearbyCard";
import ElevatorIcon from "@mui/icons-material/Elevator";
import LocationOnSharpIcon from "@mui/icons-material/LocationOnSharp";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import WcIcon from "@mui/icons-material/Wc";
import RouteMap from "../components/stationPage/RouteMap";

const StationData = {
  stationName: "Taj East Gate",
  prevStation: "Basai",
  nextStation: "Taj West Gate",
  metroLine: "Blue",
  services: [
    {
      Service_Name: "Divyang Friendly Station",
      icon: <WheelchairPickupIcon fontSize="small" />,
    },
    {
      Service_Name: "Lift/Escalator",
      icon: <EscalatorIcon fontSize="small" />,
    },
    {
      Service_Name: "Parking",
      icon: <LocalParkingIcon fontSize="small" />,
    },
  ],
  LiftAndEsclators: [
    {
      type: "Escalator",
      name: "Escalator No.1",
      description: "Ground To Concourse",
    },
    {
      type: "Escalator",
      name: "Escalator No.2",
      description: "Concourse To Platform",
    },
    {
      type: "Escalator",
      name: "Escalator No.3",
      description: "Concourse To Platform",
    },
    {
      type: "Lift",
      name: "Lift No.1",
      description: "Ground To Concourse",
    },
    {
      type: "Lift",
      name: "Lift No.2",
      description: "Concourse To Platform",
    },
    {
      type: "Lift",
      name: "Lift No.3",
      description: "Concourse To Platform",
    },
    {
      type: "Lift",
      name: "Lift No.4",
      description: "Ground To Concourse",
    },
  ],
  gates: [
    {
      Gate_Number: "Gate No. 1",
      Gate_Side: "towards TDI Mall",
      icon: <LocationOnSharpIcon fontSize="small" />,
    },
    {
      Gate_Number: "Gate No. 2",
      Gate_Side: "towards Basi",
      icon: <LocationOnSharpIcon fontSize="small" />,
    },
  ],
  platforms: [
    {
      Platform_NUmber: "Platform No. 1",
      towards: "Taj East Gate",
      icon: <TrainIcon fontSize="small" />,
    },
    {
      Platform_NUmber: "Platform No. 2",
      towards: "Mankameshwar",
      icon: <TrainIcon fontSize="small" />,
    },
  ],
  facilities: [
    {
      name: "Water Cooler",
      location: "Concourse Paid Area",
    },
    {
      name: "Toilet",
      location: "Concourse Paid Area",
    },
  ],
  NearbyPlaces: [
    {
      name: "TDI Mall",
    },
    {
      name: "Taj Shilp Gram",
    },
    {
      name: "Agra Chaupati",
    },
    {
      name: "Taj Mahal East Gate",
    },
  ],
};

const StationDetails = () => {
  const [openPlanYourJourney, setOpenPlanYourJourney] = useState(false);

  const { station } = useParams();

  return (
    <section className="flex flex-col items-center justify-center">
      <div className="sm:w-11/12 w-full px-2.5">
        <RouteMap stationData={StationData} stationName={station} />
        <div className="p-4 md:p-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="col-span-6 lg:col-span-8 order-1 lg:order-1 ">
            {/* <section>
              <h2 className="text-lg font-bold  text-black pb-2">{station}</h2>
              <hr />
            </section> */}
            <hr />
            <section className="py-8">
              <h3 className=" text-base font-bold text-red-700 pb-2">
                Station Details
              </h3>
              <div className="h-1 bg-red-700 w-[5%] mb-6"></div>
              <ul className="columns-1 sm:columns-2 w-full">
                {StationData.services.map((service, i) => {
                  return (
                    <li
                      key={i}
                      className="flex items-center justify-start gap-x-2 w-full py-1 text-sm text-gray-500"
                    >
                      <span className="">{service.icon}</span>
                      <span className="">{service.Service_Name}</span>
                    </li>
                  );
                })}
              </ul>
            </section>
            <hr />
            <section className="py-8">
              <h3 className=" text-base font-bold text-red-700 pb-2">Gates</h3>
              <div className="h-1 bg-red-700 w-[5%] mb-6"></div>
              <ul className="list-disc list-inside">
                {StationData.gates.map((Gate, i) => {
                  return (
                    <li key={i} className="flex flex-col py-1 text-sm my-2">
                      <span className="text-gray-600">
                        <strong>{Gate.Gate_Number}</strong>
                      </span>
                      <span className="flex items-center gap-x-2 text-gray-500 mt-2">
                        <span> {Gate.icon}</span>
                        <span>{Gate.Gate_Side}</span>
                      </span>
                    </li>
                  );
                })}
              </ul>
            </section>
            <hr />
            <section className="py-8">
              <h3 className=" text-base font-bold text-red-700 pb-2">
                Lifts & Esclators
              </h3>
              <div className="h-1 bg-red-700 w-[5%] mb-6"></div>

              <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
                  <thead className="text-xs text-gray-600  bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3">
                        Name
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Desciption
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {StationData.LiftAndEsclators.map((data) => (
                      <tr key={data.name} className="bg-white border-b ">
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-600 whitespace-nowrap "
                        >
                          <span className="text-gray-500 mr-2">
                            {data.type === "Escalator" ? (
                              <EscalatorIcon fontSize="small" />
                            ) : (
                              <ElevatorIcon fontSize="small" />
                            )}
                          </span>
                          <span>{data.name}</span>
                        </th>
                        <td className="px-6 py-4">{data.description}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
            <hr />
            <section className="py-8">
              <h3 className=" text-base font-bold text-red-700 pb-2">
                Platforms
              </h3>
              <div className="h-1 bg-red-700 w-[5%] mb-6"></div>
              <ul className="">
                {StationData.platforms.map((platform, i) => {
                  return (
                    <li key={i} className="flex gap-x-2 py-1 text-sm my-2">
                      <span className="text-gray-500">{platform.icon}</span>
                      <div className="flex flex-col">
                        <span className="text-gray-600">
                          <strong>{platform.Platform_NUmber}</strong>
                        </span>

                        <span className="flex items-center justify-center gap-x-2 mt-2">
                          <span className="text-gray-500">
                            <LogoutIcon fontSize="small" />
                          </span>
                          <span className="text-gray-600">
                            Towards {platform.towards}
                          </span>
                        </span>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </section>
            <hr />
            <section className="py-8">
              <h3 className=" text-base font-bold text-red-700 pb-2">
                Station Facilities
              </h3>
              <div className="h-1 bg-red-700 w-[5%] mb-6"></div>
              <ul className="">
                {StationData.facilities.map((facility, i) => {
                  return (
                    <li key={i} className="flex gap-x-2 py-1 text-sm my-2">
                      <span className="text-gray-500">
                        {facility.name === "Water Cooler" ? (
                          <WaterDropIcon fontSize="small" />
                        ) : (
                          <WcIcon fontSize="small" />
                        )}
                      </span>
                      <div className="flex flex-col">
                        <span className="text-gray-600">
                          <strong>{facility.name}</strong>
                        </span>
                        <ul className="list-disc list-inside mt-2 text-gray-600">
                          <li>{facility.location}</li>
                        </ul>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </section>
            <hr />
            <section className="py-8">
              <h3 className=" text-base font-bold text-red-700 pb-2">
                Near by places
              </h3>
              <div className="h-1 bg-red-700 w-[5%] mb-6"></div>
              <div className="flex items-center gap-4 flex-wrap">
                {StationData.NearbyPlaces.map((data) => (
                  <NearbyCard key={data.name} data={data} />
                ))}
              </div>
            </section>
            <section className="py-8">
              <h3 className="text-base font-bold text-red-700 pb-2">
                Location
              </h3>
              <div className="h-1 bg-red-700 w-[5%] mb-6"></div>
              <div className="my-4 rounded-lg shadow-md overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14199.747319586915!2d78.0581758!3d27.1582777!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39747199a19101d3%3A0x5bb4f86daafb7208!2sTaj%20East%20Gate%20Metro%20Station!5e0!3m2!1sen!2sin!4v1716658822242!5m2!1sen!2sin"
                  width={"100%"}
                  height={250}
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </section>
          </div>
          <div className="col-span-6 lg:col-span-4 -order-1 lg:order-2">
            <div className="static md:sticky top-24 z-10">
              <PlanYourJourneyCol
                openPlanYourJourneyForm={openPlanYourJourney}
                setOpenPlanYourJourneyForm={setOpenPlanYourJourney}
              />
              <PlanYourJourneyColButton setOpenForm={setOpenPlanYourJourney} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StationDetails;
