import Image from "next/image";
import Logo from "../../../public/metroAgraLogo.webp";
import XIcon from "@mui/icons-material/X";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import Appstore_Logo from "../../../public/Appstore.webp";
import Playstore_Logo from "../../../public/playstore.webp";

const Footer = () => {
  return (
    <>
      <footer className=" bg-gray-100">
        <div className="mx-auto md:mx-6 xl:mx-10 px-4 md:py-4">
          <div className="flex flex-col items-stretch justify-center md:flex-row md:items-start md:justify-around md:gap-y-4">
            <div className="md:w-[30%] self-center md:self-auto">
              <div className="mt-4 md:my-0">
                <Image src={Logo} alt="delhimetrorail" className="h-16 object-contain" />
              </div>
            </div>
            <div className="w-full md:w-[70%]">
              <div className="px-4">
                <h3 className="text-gray-700 text-center my-4 md:my-0 text-xl font-bold  md:text-left">
                  Quick Links
                </h3>
                <ul className="mx-auto w-fit md:w-full text-sm columns-2 gap-x-6 md:gap-x-0 gap-y-2 md:flex md:flex-wrap md:flex-row md:items-center justify-start md:divide-x-2 divide-gray-500 my-4">
                  <li className="py-1 md:py-0 leading-4 md:pr-2 hover:text-red-700">
                    <a href="/miscellaneous">Miscellaneous</a>
                  </li>
                  <li className="py-1 md:py-0 leading-4 md:px-2 hover:text-red-700 ">
                    <a href="/faq">FAQ’s</a>
                  </li>
                  <li className="py-1 md:py-0 leading-4 md:px-2 hover:text-red-700">
                    <a href="/emergency-evacuation-plan">
                      Evacuation Guidelines
                    </a>
                  </li>
                  <li className="py-1 md:py-0 leading-4 md:px-2 hover:text-red-700 ">
                    <a href="/security-dmrc">Security</a>
                  </li>
                  <li className="py-1 md:py-0 leading-4 md:px-2 hover:text-red-700 ">
                    <a href="/contact-us">Help &amp; Contact </a>
                  </li>
                  <li className="py-1 md:py-0 leading-4 md:px-2 hover:text-red-700 ">
                    <a href="/disclaimer">Disclaimer</a>
                  </li>
                  <li className="py-1 md:py-0 leading-4 md:px-2 hover:text-red-700 ">
                    <a href="/privacy-policy">Privacy Policy</a>
                  </li>
                </ul>
              </div>
              <hr className="mx-4 border-0.5 border-gray-300" />
              <div className="px-4 flex items-center flex-col-reverse md:flex-row md:items-start justify-between gap-y-4 gap-x-4 my-4 w-full ">
                {/* <div className="basis-[35%] grid grid-cols-2 w-full text-sm">
                  <div className="col-span-1 px-4 ">
                    <h3 className="font-bold text-base">Links</h3>
                    <ul className="flex flex-col items-start justify-center gap-y-2">
                      <li className="hover:cursor-pointer hover:text-red-700">Home</li>
                      <li className="hover:cursor-pointer hover:text-red-700">Services</li>
                      <li className="hover:cursor-pointer hover:text-red-700">About</li>
                    </ul>
                  </div>
                  <div className="col-span-1 px-4 ">
                    <h3 className="font-bold text-base">Links</h3>
                    <ul className="flex flex-col items-start justify-center gap-y-2">
                      <li className="hover:cursor-pointer hover:text-red-700">Terms</li>
                      <li className="hover:cursor-pointer hover:text-red-700">Contact</li>
                      <li className="hover:cursor-pointer hover:text-red-700">Privacy</li>
                    </ul>
                  </div>
                </div> */}
                <div className="w-full md:m-0">
                  <ul className="flex items-center justify-center md:justify-start gap-x-4">
                    <li className="w-fit flex justify-center">
                      <Image
                        src={Playstore_Logo}
                        className="object-contain max-w-[100%]"
                        width={120}
                        height={36}
                        alt=""
                      />
                    </li>
                    <li className="w-fit flex justify-center">
                      <Image
                        src={Appstore_Logo}
                        className="object-contain max-w-[100%]"
                        width={120}
                        height={36}
                        alt=""
                      />
                    </li>
                  </ul>
                </div>
                <div className="md:m-0 w-full">
                  <ul className="flex items-center justify-center md:justify-end gap-x-4">
                    <li
                      title="Facebook Page"
                      className="transition-all duration-200 ease-in-out delay-75 hover:cursor-pointer text-gray-700 hover:text-[#3B5998]"
                    >
                      <FacebookIcon fontSize="medium" />
                    </li>
                    <li
                      title="Twitter Page"
                      className="transition-all duration-200 ease-in-out delay-75 hover:cursor-pointer text-gray-700 hover:text-black"
                    >
                      <XIcon fontSize="small" />
                    </li>
                    <li
                      title="Instagram Page"
                      className="transition-all duration-200 ease-in-out delay-75 hover:cursor-pointer text-gray-700 hover:text-[#C13584] "
                    >
                      <InstagramIcon fontSize="medium" />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-y-2 md:flex-row items-center justify-between bg-black text-white h-full py-4 px-10">
          <p className="text-xs font-medium">Designed & Developed XYZ</p>
          <p className="text-sm font-semibold">
            <span> &copy; {new Date().getFullYear()}.</span>
            <span> All right reserved. &nbsp;</span>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
