import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Calendar from "../components/Calendar";
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

  // State to track which component to display
  const [currentView, setCurrentView] = useState("calendar");

  return (
    <div className="flex w-full h-screen">
      {leftComponentClicked && <Sidebar setCurrentView={setCurrentView} />}
      <div className="flex flex-col flex-auto h-full">
        <NavbarCalendar />
        <div className="flex-auto overflow-auto">
          {currentView === "calendar" && <Calendar />}
          {currentView === "profile" && <MyProfile />}
        </div>
      </div>
      {rightComponentClicked && <Notification />}
    </div>
  );
};

export default Dashboard;
