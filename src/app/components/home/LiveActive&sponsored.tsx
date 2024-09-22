import Image from "next/image";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import groptoBanner1 from "../../../public/promotionBanner/Holibanner.webp";

const LiveActiveSponsored = () => {
    return (<>
        <div className="rounded-lg md:p-4 p-2 bg-red-10 border border-pink-200 bg-pink-100 flex flex-col items-center justify-between gap-y-4">

            <div className="px-5 py-2 bg-white text-black w-full rounded-lg">
                <h3 className="font-medium "> <span className="text-red-600">Live</span> Update</h3>

                <div className="flex flex-wrap p-1 gap-x-4 items-center justify-start">
                    <p className="flex gap-1 items-center min-w-fit text-sm">
                        <span className="animate-pulse text-green-500">
                            <FiberManualRecordIcon fontSize="small" />
                        </span>
                        <span>Active Users: <span className="">1,200</span></span>
                    </p>

                    <p className="flex gap-1 items-center min-w-fit text-sm">
                        <span className="text-cyan-500">
                            <FiberManualRecordIcon fontSize="small" />
                        </span>
                        <span>Monthly Users: <span className="">4,000</span></span>
                    </p>
                </div>

            </div>

            <span className="text-pink-600 font-semibold text-md cursor-pointer bg-white rounded-full px-6 py-2">Sponsored</span>


            <div className="cursor-pointer">
                <Image src={groptoBanner1} className="rounded-lg" alt="" />
            </div>



        </div>
    </>)
}

export default LiveActiveSponsored