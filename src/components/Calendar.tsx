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
  // const [location, setLocation] = useState("");
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

  const { year, month, date } = calendarDateNow;

  useEffect(() => {
    console.log(calendarDateNow);
    console.log(year);
  }, [calendarDateNow]);

  const monthNames = {
    "January": "01",
    "February": "02",
    "March": "03",
    "April": "04",
    "May": "05",
    "June": "06",
    "July": "07",
    "August": "08",
    "September": "09",
    "October": "10",
    "November": "11",
    "December": "12"
};

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!year || !month) return;
        const monthInt = monthNames[month];
        const options = {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json"
          }
        }
        const response = await fetch(`http://localhost:3000/api/v1/event/all_events?start_time=${year}-${monthInt}-01&end_time=${year}-${monthInt}-29`, options);
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [year, month]);

  const [data, setData] = useState({
    "date": dateValue,
    "id_category": 259712
  });

  useEffect(() => {
    setData((prev) => ({
      ...prev,
      "date": formatDate(dateValue)
    }));
  }, [dateValue]);
  

  const [time, setTime] = useState([
    "00:00:00",
    "00:30:00",
    "01:00:00",
    "01:30:00",
    "02:00:00",
    "02:30:00",
    "03:00:00",
    "03:30:00",
    "04:00:00",
    "04:30:00",
    "05:00:00",
    "05:30:00",
    "06:00:00",
    "06:30:00",
    "07:00:00",
    "07:30:00",
    "08:00:00",

    "08:30:00",
    "09:00:00",
    "09:30:00",
    "10:00:00",
    "11:30:00",
    "12:00:00",
    "12:30:00",
    "13:00:00",
    "13:30:00",
    "14:00:00",
    "14:30:00",
    "15:00:00",
    "15:30:00",
    "16:00:00",
    "16:30:00",
    "17:00:00",

    "17:30:00",
    "18:00:00",
    "18:30:00",
    "19:00:00",
    "19:30:00",
    "20:00:00",
    "21:30:00",
    "22:00:00",
    "22:30:00",
    "23:00:00",
    "23:30:00",

  ]);

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const optionsUserInvited = [
    { value: 'AL', label: 'Alabama' },
    { value: 'WY', label: 'Wyoming' }
  ];

  useEffect(() => {
    const fetchAllUser = async () => {
      const url = "http://localhost:3000/api/v1/auth/search_user";
      const options = {
        method: "GET",
        headers: {
          // Authorization: `Bearer ${token}`
          "Content-Type": "application/json",
        },
      };
  
      const res = await fetch(url, options);
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      const response = await res.json();
      // localStorage.setItem("token", response.message);
      console.log(response);
    }

    fetchAllUser();
  }, [])

  const token = localStorage.getItem("token");

  function formatDate(dateString) {
    const months = {
      "January": "01", "February": "02", "March": "03", "April": "04",
      "May": "05", "June": "06", "July": "07", "August": "08",
      "September": "09", "October": "10", "November": "11", "December": "12"
    };
  
    const trimmedDateString = dateString.trim();
    const [day, month, year] = trimmedDateString.split(' ');
    const formattedDate = `${year}-${months[month]}-${day.padStart(2, '0')}`;
  
    return formattedDate;
  }

  // useEffect(() => {
  //   const fetchAllEvents = async () => {
  //     const url = "http://localhost:3000/api/v1/event/all_events?start_time=2024-04-01&end_time=2024-04-29";
  //     const options = {
  //       method: "GET",
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //         "Content-Type": "application/json",
  //       },
  //     };
  
  //     const res = await fetch(url, options);
  //     if (!res.ok) {
  //       throw new Error(`HTTP error! status: ${res.status}`);
  //     }
  //     const response = await res.json();
  //     // localStorage.setItem("token", response.message);
  //     console.log(response);
  //   }

  //   fetchAllEvents();
  // }, []);

  const submitData = async (e) => {
    e.preventDefault();
    const url = "http://localhost:3000/api/v1/event";
    const options = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
  
    try {
      const res = await fetch(url, options);
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      const response = await res.json();
      // localStorage.setItem("token", response.message);
      console.log(response);
      // navigate("/dashboard");
    } catch (err) {
      console.error("Error:", err);
    }
  };

  useEffect(() => {
    console.log(data);
  }, [data])

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
              <form onSubmit={submitData} className="flex flex-col gap-y-5 mx-7 my-4">
                <div className="">
                  <label htmlFor="">Event Name</label>
                  <input type="text" name="title" onChange={handleChange} className="w-full shadow-md p-2" />
                </div>
                <div className="flex gap-x-3">
                  <div className="basis-1/2">
                    <label htmlFor="">Date</label>
                    <input
                      type="text"
                      className="w-full shadow-md p-2"
                      name="date"
                      onChange={handleChange}
                      value={dateValue}
                    />
                  </div>
                  <div className="basis-1/4">
                  <label htmlFor="">Time Start</label>
                  <select name="start_time" onChange={handleChange} className="form-select w-full shadow-md p-2">
                    <option defaultValue disabled>
                    Pilih Jam Mulai
                    </option>
                    {time.map((val, idx) => (
                      <option key={idx} value={val}>
                        {val}
                      </option>
                    ))}
                  </select>
                </div>

                  <div className="basis-1/4">
                    <label htmlFor="">Time End</label>
                    {/* <input type="text" className="w-full shadow-md p-2" /> */}
                    <select name="end_time" onChange={handleChange} className="form-select w-full shadow-md p-2">
                    <option defaultValue disabled>
                      Pilih Jam Selesai
                    </option>
                    {time.map((val, idx) => (
                      <option key={idx} value={val}>
                        {val}
                      </option>
                    ))}
                  </select>
                  </div>
                </div>
                <div className="flex w-full space-x-4">
                  <div className="flex flex-col w-1/2 pt-3">
                    <label htmlFor="">Location</label>
                    <div className="flex gap-x-3">
                      <input
                        type="text"
                        className="shadow-md p-2 rounded-md w-full"
                        // value={location}
                        name="location"
                        onChange={handleChange}
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
                      <Select options={optionsUserInvited} isMulti />
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
                  <textarea className="w-full shadow-md p-1 resize-none" name="description" onChange={handleChange} />
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
