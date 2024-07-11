import { useEffect } from "react";
import useDateDay from "../hooks/useDateDay";
import popup from "/public/dashboarddd/atas.svg";
import leftChev from "/public/dashboarddd/left-chev.svg";
import rightChev from "/public/dashboarddd/right-chev.svg";

const NavbarCalendar = () => {
  const {
    monthToString,
    getMonth,
    getYear,
    setYear,
    setMonth,
    leftComponentClicked,
    setLeftComponentClicked,
    rightComponentClicked,
    setRightComponentClicked,
  } = useDateDay();

  const {activities, setActivities} = useDateDay();

  const clickPrevNext = (e) => {
    console.log(e.target.alt);
    setActivities({});
    if (e.target.alt === "prev") {
      setMonth(getMonth - 1);
      if (getMonth < 2) {
        setYear(getYear - 1);
        setMonth(12);
      }
    } else {
      setMonth(getMonth + 1);
      getMonth >= 12 && setYear(getYear + 1);
      if (getMonth > 11) {
        setYear(getYear + 1);
        setMonth(1);
      }
    }
  };

  const leftPopup = (e) => {
    setLeftComponentClicked(!leftComponentClicked);
  };

  const rightPopup = (e) => {
    setRightComponentClicked(!rightComponentClicked);
  };

  // useEffect(() => {
  //   console.log(getMonth);
  // }, [getMonth])

  return (
    <div className="w-full border-b-gray border-b-2 text-md">
      <div className="w-full flex flex-col md:flex-row items-center justify-between md:gap-x-12 px-4">
        <div className="flex items-center gap-x-6">
          <button onClick={leftPopup}>
            <img className="my-5" src={popup} />
          </button>
          <p>Dashboard/calendar</p>
        </div>
        <div className="flex items-center gap-x-6 mt-4 md:mt-0">
          <button onClick={clickPrevNext}>
            <img src={leftChev} alt="prev" className="outline-none" />
          </button>
          <button onClick={clickPrevNext}>
            <img src={rightChev} alt="next" className="outline-none" />
          </button>
          <p className="ml-5">
            {monthToString[getMonth - 1]} {getYear}
          </p>
        </div>
        <div className="md:relative flex items-center gap-x-3 mt-4 md:mt-0">
          <div className="border-slate-300 border-2 h-7 w-full rounded flex justify-between items-center divide-x-2 px-2">
            <button className="flex-1 text-center px-2">Month</button>
            <button className="flex-1 text-center px-2">Week</button>
            <button className="flex-1 text-center px-2">Day</button>
          </div>
          <button onClick={rightPopup}>
            <img className="my-5 mr-7" src={popup} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavbarCalendar;
