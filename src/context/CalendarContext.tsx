import React, { createContext, useState } from "react";

export const CalendarContext = createContext({});

export const CalendarProvider = ({ children }) => {
  const [monthToString] = useState([
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]);

  const [getYear, setYear] = useState(2024);
  const [getMonth, setMonth] = useState(7);

  const [leftComponentClicked, setLeftComponentClicked] = useState(false)
  const [rightComponentClicked, setRightComponentClicked] = useState(false)

  const [notif, setNotif] = useState(null);
  const [activities, setActivities] = useState({});

  const calendarContextValue = {
    monthToString,
    getYear,
    getMonth,
    setYear,
    setMonth,
    leftComponentClicked,
    setLeftComponentClicked,
    rightComponentClicked,
    setRightComponentClicked,
    notif,
    setNotif,
    activities,
    setActivities
  };

  return (
    <CalendarContext.Provider value={calendarContextValue}>
      {children}
    </CalendarContext.Provider>
  );
};
