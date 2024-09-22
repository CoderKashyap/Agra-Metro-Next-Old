import { useState } from 'react'
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import "./Notification.css";

interface NotificationProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  notificationDot?: any;
}

const notificationArray = [
  {
    date: "22/05/2024",
    noti: "Agra metro rail services on election day start from 04:00 AM."
  },
  {
    date: "22/05/2024",
    noti: "Train movement b/w Samaypur Badli & Jahangir Puri on Yellow line shall be done via single line from 10 PM till end of revenue services and from start of revenue services till 7 AM w.e.f Thursday (18.4.2024) for a period of 04 months for execution of Phase IV work of Magenta Line extn."
  },
]

const Notification: React.FC<NotificationProps> = ({ open, setOpen }) => {
  const [notiExpandSwitch, setNotiExpandSwitch] = useState<boolean>(false);
  // const navigate = useNavigate();

  // const [selectType, setNotifyType] = useState<string>("general");
  // const [filteredNotify, setFilteredNotify] = useState<any[]>([]);
  // const [interactedMap, setInteractedMap] = useState<any>({});
  // const [singleNotificationData, setSingleNotificationData] = useState<any>({});

  // const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  // const openMenu = Boolean(anchorEl);

  // const handleClick = (event, data) => {
  //     setSingleNotificationData(data)
  //     setAnchorEl(event.currentTarget);
  // };

  // const checkInterectOrNot = (noti) => {
  //     return noti.userWhoInterect.includes(user?._id)
  // }

  // const handleRedirect = (data) => {
  //     if(!data.notiAction && !data.userWhoInterect.includes(user._id)){
  //         dispatch(markNotificationSeen(data._id));
  //     }
  //     else if (data.notiAction && !data.userWhoInterect.includes(user._id)) {
  //         dispatch(markNotificationSeen(data._id));
  //         navigate(data.notiAction);
  //         setOpen(false)
  //     }
  //     else {
  //         navigate(data.notiAction);
  //         setOpen(false)
  //     }

  // }

  // const checkNotificationLength = () => {
  //     const noti = notification && notification.filter((data) => {

  //         if (data.notiType === "general" || data.notiType === "promotional") {
  //             return data;
  //         }
  //         if (data.notiType !== "specific" && data.specialUsers.some(userObj => userObj._id !== user?._id)) {
  //             return data;
  //         }
  //         if (data.specialUsers.some(userObj => userObj._id === user?._id)) {
  //             return data;
  //         }

  //     })
  //     return noti.length;
  // }

  return (
    <>
      <div
        className={`${open ? "fixed" : "hidden"
          } inset-0 backdrop-blur-sm bg-black bg-opacity-50 z-30`}
        onClick={() => setOpen(false)}
      >



        <div className={`inset-x-0 h-full bottom-0 md:inset-auto md:p-4 w-full md:w-96 fixed md:right-0 ${open ? "slide_In" : "slide_Out"
          }`} onClick={(e) => e.stopPropagation()}>

          <div className="bg-white flex flex-col md:rounded-xl h-full">

            <div className="flex justify-around items-center">

              <span className="cursor-pointer flex rounded-full text-white bg-amber-400 hover:bg-amber-500"
                onClick={() => setOpen(false)}
              >
                <NavigateNextIcon fontSize="medium" />
              </span>

              <h1 className="py-4 text-xl font-bold text-center">Notices & Alerts</h1>

              <h1 className="py-4 text-xl font-bold text-center"><span className="text-base">(1)</span> </h1>

            </div>


            <ul className="px-3 flex flex-col overflow-y-auto h-full">

              {notificationArray && notificationArray.map((notification, i) => (
                <li key={i} className={`transition-all duration-200 ease-in-out border border-yellow-300 bg-[#fefff3] rounded-lg group flex items-start justify-between gap-x-2 px-2 py-3 my-2`}>
                  <div className="px-1 flex items-start justify-stretch gap-x-2 w-full">
                    <div className="text-yellow-400 transition-all duration-200 ease-in-out">
                      <NotificationsActiveIcon fontSize="medium" />
                    </div>
                    <div className="text-black text-sm w-full cursor-pointer px-1">
                      <p className="font-medium text-gray-400 hover:text-gray-500 text-xs">{notification.date}</p>
                      <p className={`text-gray-600 hover:text-orange-400 w-full my-1 leading-5 ${!notiExpandSwitch && "boNTXX"}`}>
                        {notification.noti}
                      </p>

                      {notification.noti.length >= 80 &&
                        <div onClick={()=> setNotiExpandSwitch(!notiExpandSwitch)} className="text-xs flex justify-end items-center">
                          <button className="text-gray-500 hover:text-gray-600 font-normal">{notiExpandSwitch ? "Read Less" : "Read More"}</button>
                        </div>}

                    </div>
                  </div>
                </li>
              ))}



            </ul>

            <div className="flex justify-center items-center">
              <button onClick={() => setOpen(false)} className="transition-all duration-150 ease-linear m-3 text-white bg-amber-400 hover:bg-amber-500 rounded-2xl py-1 px-4 font-semibold">
                Close
              </button>
            </div>


          </div>


        </div>


      </div >
    </>
  );
};

export default Notification;
