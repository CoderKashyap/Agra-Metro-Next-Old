"use client"

import { useState } from "react";
import Link from "next/link";
import AgraMetroLogo from "../../../public/metroAgraLogo.webp";
import SearchIcon from "@mui/icons-material/Search";
import Notification from "./Notification";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
import Image from "next/image";

const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);
  const [openNotification, setOpenNotification] = useState(false);
  // const [openAvatarDropdown, setOpenAvatarDropdown] = useState(false);

  const toggleNav = () => {
    setOpenNav(!openNav);
    // setOpenAvatarDropdown(false);
  };

  // const toggleAvatarDropdown = () => {
  //     setOpenAvatarDropdown(!openAvatarDropdown);
  // };

  const navList = () => {
    return (
      <>
        <Link
          href="/"
          onClick={toggleNav}
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-black" : "text-gray-600"
          }
        >
          Home
        </Link>
        <Link
          href="/station"
          onClick={toggleNav}
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-black" : "text-gray-600"
          }
        >
          Station
        </Link>
        {/* <div
                    onClick={() => { setOpenNotification(true); toggleNav() }}
                    className={"text-gray-600 hover:cursor-pointer"}
                >
                    Notices & Alerts
                </div> */}
        <Link
          href="/facilities"
          onClick={toggleNav}
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-black" : "text-gray-600"
          }
        >
          Facilities
        </Link>
        <Link
          href="/network"
          onClick={toggleNav}
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-black" : "text-gray-600"
          }
        >
          Network
        </Link>
        <Link
          href="/helpcontact"
          onClick={toggleNav}
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-black" : "text-gray-600"
          }
        >
          Help & Contact
        </Link>
        <Link
          href="/blogs"
          onClick={toggleNav}
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-black" : "text-gray-600"
          }
        >
          Blogs
        </Link>
      </>
    );
  };

  return (
    <>
      <header className="shadow-md sticky z-20 bg-white top-0 left-0">
        <div className="mx-auto py-2 px-4 lg:flex md:items-center md:justify-between lg:mx-10">
          <div className="flex items-center justify-between">
            <Link href="/">
              <Image className="h-12 lg:h-16 object-contain" src={AgraMetroLogo} alt="" />
            </Link>
            <div className="lg:hidden flex items-center gap-x-4">
              <div
                className="hover:cursor-pointer text-amber-400 hover:bg-amber-500"
                onClick={() => setOpenNotification(true)}
              >
                <span className="absolute flex h-3 w-3 ml-6">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-yellow-500"></span>
                </span>

                <CircleNotificationsIcon fontSize="large" />
              </div>
              <button
                onClick={toggleNav}
                className="block shadow-md lg:hidden border border-gray-600 p-2 rounded-xl text-gray-600 bg-white"
              >
                <svg
                  className={`w-6 h-6 ${openNav ? "hidden" : "block"}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  ></path>
                </svg>

                <svg
                  className={`w-6 h-6 ${openNav ? "block" : "hidden"}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>
          </div>

          <div className="flex">
            <nav className="hidden lg:flex space-x-5">{navList()}</nav>
          </div>

          <div className="lg:flex items-center gap-x-6 hidden relative">
            <div
              className="hover:cursor-pointer text-amber-400 hover:text-amber-500"
              onClick={() => setOpenNotification(true)}
            >
              <span className="absolute flex h-3 w-3 ml-6">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-yellow-500"></span>
              </span>

              <CircleNotificationsIcon fontSize="large" />
            </div>

            {/* Search bar */}
            <div className="">
              <input
                type="search"
                name="serch"
                placeholder="Search latest updates"
                className="bg-gray-50 text-gray-500 border border-gray-300 h-10 px-3 pr-6 rounded-full text-sm focus:outline-none"
              />
              <button
                type="submit"
                className="border p-1 px-2 border-gray-300 text-gray-500 cursor-pointer absolute right-1.5 top-[0.35rem] rounded-2xl flex justify-center items-center"
              >
                <SearchIcon className="" fontSize="small" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Phone view  */}
      <div
        className={`${
          openNav ? "block" : "hidden"
        } backdrop-blur-lg bg-black bg-opacity-50 p-6 gap-6 flex flex-col justify-center items-end z-10 lg:hidden h-screen w-full absolut fixed top-0 left-0 right-0 bottom-0`}
      >
        <div className="w-full flex justify-center items-center mb-5">
          <Link
            href="/"
            className="bg-gray-100 rounded-full px-4 py-3"
            onClick={toggleNav}
          >
            <img className="h-12 lg:h-full" src={AgraMetroLogo} alt="" />
          </Link>
        </div>

        <div className="flex md:hidden relative w-full">
          <input
            type="search"
            name="serch"
            placeholder="Search latest updates"
            className="bg-gray-50 text-gray-500 border border-gray-300 h-11 w-full px-5 pr-12 rounded-full text-sm focus:outline-none"
          />
          <button
            type="submit"
            className="border p-1 px-2 border-gray-300 text-gray-500 cursor-pointer absolute right-2 top-2 rounded-2xl flex justify-center items-center"
          >
            <SearchIcon className="" fontSize="small" />
          </button>
        </div>

        <div className="bg-gray-100 flex flex-col gap-4 p-6 rounded-lg w-full font-medium">
          {navList()}
        </div>
        <button
          onClick={toggleNav}
          className="block lg:hidden border border-white bg-whit bg-gray-100 p-2 rounded-full text-gray-600"
        >
          <svg
            className={`w-6 h-6 ${openNav ? "block" : "hidden"}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
      </div>
      {/* {openNotification ? ( */}
      <Notification open={openNotification} setOpen={setOpenNotification} />
      {/* ) : null} */}
      {/* <div className="text-white bg-yellow-500 p-2 rounded-full absolute z-20 bottom-0 md:bottom-24 right-4 animate-bounce hover:cursor-pointer" onClick={()=>setOpenNotification(true)}>
        <NotificationsActiveIcon fontSize="large" />
      </div> */}
    </>
  );
};

export default Navbar;
