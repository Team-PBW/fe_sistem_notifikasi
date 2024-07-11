import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Calendar from "../components/Calendar";
import { CalendarProvider } from "../context/CalendarContext";
import NavbarCalendar from "../components/NavbarCalendar";
import MyProfile from "../components/MyProfile";
import useDateDay from "../hooks/useDateDay";
import Notification from "../components/Notification";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const { rightComponentClicked, leftComponentClicked, notif, setNotif } = useDateDay();
  const year = Number(localStorage.getItem("year"));
  const month = Number(localStorage.getItem("month"));

  const [getYear, setYear] = useState(year);
  const [getMonth, setMonth] = useState(month);

  const [notification, setNotification] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchNotification =  async () => {
      const token = localStorage.getItem("token");
      const url = "http://localhost:3000/api/v1/notification/fetch";
      const options = {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json"
        }
      }
      const res = await fetch(url, options);
      if (res.status != 200) {
        console.log(res);
      }

      const response = await res.json();
      // array response
      setNotif(response);
      // navigate("/dashboard");
    }

    fetchNotification();
  }, []);

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
