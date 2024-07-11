import logo from "/public/dashboarddd/memospace-black.png";
import people from "/public/dashboarddd/people.svg";
import listed from "/public/dashboarddd/listed.svg";
import useDateDay from "../hooks/useDateDay";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquare } from '@fortawesome/free-solid-svg-icons';


const Sidebar = ({ setCurrentView }) => {
  return (
    <div className="container mx-auto pt-[24px] px-4 border-[1.5px] basis-[325px] border-r-[#D3CCF6] h-full flex justify-center font-poppins w-full">
      <div className="container mx-auto px-4 my-3 flex flex-col items-center gap-y-[32px] w-full">
        <img src={logo} alt="" className="w-3/4" />
        <button onClick={() => setCurrentView("calendar")} className="bg-white w-full py-2 px-4 rounded shadow-md hover:shadow-lg focus:shadow-lg active:shadow-lg h-[48px] outline outline-1 outline-[#EAEAEA]">Create Events</button>

        {/* pages component */}
        <div className="flex flex-col gap-2 w-full">
          <p className="text-gray-400">Pages</p>
          <button onClick={() => setCurrentView("profile")} className="shadow-md w-full rounded p-2 flex items-center gap-3 py-[8px] outline outline-1 outline-[#EAEAEA] text-sm">
            <img src={people} alt="" className="ml-3" />My Profile
          </button>
          <a href="#" className="shadow-md w-full p-2 rounded py-[8px] flex items-center gap-3 outline outline-1 outline-[#EAEAEA] text-sm">
            <img src={listed} alt="" className="ml-3" />
            <p className="text-sm">List Events</p>
          </a>
        </div>
        {/* pages component */}

        {/* dragable event component */}
        <div className="flex flex-col gap-2 w-full">
          <p className="text-gray-400">Dragable Events</p>
          <div className="shadow-md w-full rounded py-3 px-4 mx-auto space-y-2 outline outline-1 outline-[#EAEAEA]">
            <div className="bg-[#ffc107] rounded-md py-[6px] px-[8px]">luncu</div>
            <div className="bg-[#dc3545] text-white rounded-md py-[6px] px-[8px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, officiis ipsam. Quasi explicabo quisquam laudantium placeat exercitationem dignissimos.</div>
            <div className="flex items-center">
              <input type="checkbox" className="mr-3" />
              <p className="text-sm">Remove task after drop</p>
            </div>
          </div>
        </div>
        {/* dragable event component */}

        {/* dragable event component */}
        <div className="flex flex-col gap-2 w-full outline outline-1 outline-[#EAEAEA]">
          <div className="shadow-md w-full px-4 py-4 space-y-3">
            <div className="flex gap-x-3 h-10 justify-center items-center">
              <FontAwesomeIcon icon={faSquare} className="text-blue-500" style={{ fontSize: '35px' }} />
              <FontAwesomeIcon icon={faSquare} className="text-red-500" style={{ fontSize: '35px' }} />
              <FontAwesomeIcon icon={faSquare} className="text-yellow-500" style={{ fontSize: '35px' }} />
              <FontAwesomeIcon icon={faSquare} className="text-green-500" style={{ fontSize: '35px' }} />
              <FontAwesomeIcon icon={faSquare} className="text-slate-500" style={{ fontSize: '35px' }} />
            </div>

            <div className="w-full flex">
              <input type="text" className="w-full mx-auto outline-none px-[8px] py-[4px] border-l-2 border-y-2 rounded-md" />
              <button type="submit" className="bg-blue-500 px-3 text-white py-2 ml-[-3px] rounded-r-md">Add</button>
            </div>
            
          </div>
        </div>
        {/* dragable event component */}
      </div>
    </div>
  );
};

export default Sidebar;
