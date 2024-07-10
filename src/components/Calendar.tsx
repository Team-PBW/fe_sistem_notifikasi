import React, { useEffect, useRef, useState } from "react";
import useDateDay from "../hooks/useDateDay";
import close from "/public/modal/close.svg";
import search from "/public/modal/search.svg";
import LeafletMap from "./MapContainer";
import { EventProvider } from "../context/EventContext";
import MapButton from "./MapButton";
import Select from 'react-select'; // Import React-Select

const Calendar = () => {
  const {
    monthToString,
    getYear,
    getMonth,
    setMonth,
    setYear,
    leftComponentClicked,
  } = useDateDay();

  const [calendarDateNow, setCalendarDateNow] = useState({
    year: getYear,
    month: monthToString[getMonth - 1],
    date: 0,
  });

  const [dateValue, setDateValue] = useState("");
  const [dateDays, setDateDays] = useState([]);
  const [location, setLocation] = useState("");
  const [locationCoords, setLocationCoords] = useState({ lat: 0, lng: 0 });

  const [daysAWeek] = useState([
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat",
  ]);

  const inputRef = useRef([]);

  const [modal, setModal] = useState(false);

  const getCalenderDate = (e) => {
    const theDate = e.target.getAttribute("data-value");
    if (theDate == "") return;
    setModal(!modal);
    const dateString = `${theDate} ${monthToString[getMonth - 1]} ${getYear}`;
    setDateValue(dateString);
  };

  useEffect(() => {
    const daysInMonth = new Date(getYear, getMonth, 0).getDate();
    const firstDayOfMonth = new Date(getYear, getMonth - 1, 1).getDay();

    const days = [];
    let dayCounter = 1;

    for (let i = 0; i < 6; i++) {
      const week = [];
      for (let j = 0; j < 7; j++) {
        if ((i === 0 && j < firstDayOfMonth) || dayCounter > daysInMonth) {
          week.push("");
        } else {
          week.push(dayCounter++);
        }
      }
      days.push(week);
      if (dayCounter > daysInMonth) break;
    }

    setDateDays(days);
  }, [getYear, getMonth]);

  const handleLocationSearch = async () => {
    if (!location) return;
    const response = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${location}`);
    const data = await response.json();
    if (data.length > 0) {
      setLocationCoords({ lat: data[0].lat, lng: data[0].lon });
    }
  };

  useEffect(() => {
    console.log(calendarDateNow);
  }, [calendarDateNow]);

  const options = [
    { value: 'AL', label: 'Alabama' },
    { value: 'WY', label: 'Wyoming' }
  ];

  return (
    <div className="relative flex flex-col h-full">
      {modal && (
        <>
          <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-10"></div>
          <div className="absolute z-20 bg-white shadow-md rounded-lg top-[5%] left-[20%] w-1/2 flex flex-col items-center justify-center h-9/10 font-popins">
            <div className="py-5">
              <div className="flex items-center justify-between p-7">
                <h1 className="text-2xl">CREATE EVENTS</h1>
                <button onClick={() => setModal(false)}>
                  <img src={close} alt="close" />
                </button>
              </div>
              <form action="" className="flex flex-col gap-y-5 mx-7 my-4">
                <div className="">
                  <label htmlFor="">Event Name</label>
                  <input type="text" className="w-full shadow-md p-2" />
                </div>
                <div className="flex gap-x-3">
                  <div className="basis-1/2">
                    <label htmlFor="">Date</label>
                    <input
                      type="text"
                      className="w-full shadow-md p-2"
                      value={dateValue}
                    />
                  </div>
                  <div className="basis-1/4">
                    <label htmlFor="">Time Start</label>
                    <input type="text" className="w-full shadow-md p-2" />
                  </div>
                  <div className="basis-1/4">
                    <label htmlFor="">Time End</label>
                    <input type="text" className="w-full shadow-md p-2" />
                  </div>
                </div>
                <div className="flex w-full space-x-4">
                  <div className="flex flex-col w-1/2 pt-3">
                    <label htmlFor="">Location</label>
                    <div className="flex gap-x-3">
                      <input
                        type="text"
                        className="shadow-md p-2 rounded-md w-full"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                      />
                      <button
                        type="button"
                        className="bg-[#1DAEEF] w-10 h-10 rounded-md flex items-center justify-center"
                        onClick={handleLocationSearch}
                      >
                        <img src={search} alt="search" className="w-5/6 m-1 h-2/3" />
                      </button>
                    </div>
                    <div className="flex flex-col mt-2">
                      <label htmlFor="">Add guests</label>
                      <Select options={options} isMulti />
                    </div>
                  </div>
                  <div className="flex flex-col w-1/2 h-48">
                    <EventProvider>
                      <LeafletMap coordinates={locationCoords} />
                    </EventProvider>
                  </div>
                </div>
                <div className="">
                  <label htmlFor="">Description</label>
                  <textarea className="w-full shadow-md p-1 resize-none" />
                </div>
                <div className="flex flex-col items-end">
                  <button className="p-2 bg-[#1DAEEF] w-1/4 text-white text-md">Save</button>
                </div>
              </form>
            </div>
          </div>
        </>
      )}
      <div className="grid grid-cols-7 items-center border-b-2 w-full">
        {daysAWeek.map((day, index) => (
          <div key={index} className="text-center py-2">
            {day}
          </div>
        ))}
      </div>
      <div className="flex flex-col flex-grow">
        {dateDays.map((week, weekIndex) => (
          <div
            key={weekIndex}
            className="grid grid-cols-7 flex-grow"
          >
            {week.map((day, dayIndex) => (
              <div
                key={dayIndex}
                data-value={`${day}`}
                onClick={getCalenderDate}
                className="flex justify-center h-full border-b-2 border-r-2 pt-2"
              >
                {day}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
