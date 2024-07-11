import React, { useEffect } from "react";
import warn from "/public/dashboarddd/warn.svg";
import useDateDay from "../hooks/useDateDay";

const Notification = () => {
  const { notif, setNotif } = useDateDay();
  return (
    <div className="shadow-lg w-[20%] font-poppins h-full right-0 z-[10] bg-white">
      <div className="flex justify-center flex-col items-center mt-6 mx-7">
        <h1 className="text-2xl font-semibold">Notification</h1>

        {notif.map((val, idx) => {
          return (
            <div className="mt-7 w-full shadow-md flex text-[12px] items-center">
              <img src={warn} alt="warn" className="mx-3 w-8" />
              <div className="flex flex-col gap-2 my-3">
                <div className="flex flex-col justify-between">
                  <h3 className="text-[#444444]">{val.bentrok == 1 ? "Event Berbenturan" : "Event H-1"}</h3>
                  <p className="text-[#A097CF]">{val.date}</p>
                  <p className="text-[#A097CF]">{val.title}</p>
                  <p className="text-[#A097CF]">{val.start_time}</p>
                  <p className="text-[#A097CF]">{val.end_time}</p>
                </div>
                <p></p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Notification;
