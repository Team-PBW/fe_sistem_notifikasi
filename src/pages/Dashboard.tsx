import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Calendar from "../components/Calendar";
import { CalendarProvider } from "../context/CalendarContext";
import NavbarCalendar from "../components/NavbarCalendar";
import MyProfile from "../components/MyProfile";
import useDateDay from "../hooks/useDateDay";
import Notification from "../components/Notification";

const Dashboard = () => {
  const { rightComponentClicked, leftComponentClicked } = useDateDay();
  const year = Number(localStorage.getItem("year"));
  const month = Number(localStorage.getItem("month"));

  const [getYear, setYear] = useState(year);
  const [getMonth, setMonth] = useState(month);

  // bg-[#444444] relative z-10
  
  return (
    <div className="flex w-full h-screen">
      {leftComponentClicked && <Sidebar />}
      <div className="flex flex-col flex-auto h-full">
        {/* <CalendarProvider> */}
        <>
          <NavbarCalendar />
          <div className="flex-auto overflow-auto">
            <Calendar />
          </div>
          {/* <div className={`${!leftComponentClicked ? `w-full` : ""}`}> */}
            

            {/* <MyProfile /> */}
          {/* </div> */}
        </>
        {/* </CalendarProvider> */}
      </div>
      {rightComponentClicked && <Notification />}
    </div>
  );
};

export default Dashboard;
