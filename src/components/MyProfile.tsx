import React from "react";
import chad from "/public/chad.png";
import useDateDay from "../hooks/useDateDay";

const MyProfile = () => {
  const { leftComponentClicked, rightComponentClicked } = useDateDay();

  return (
    <div className="py-7 px-4 md:px-11 font-poppins w-full">
      {/* header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-0">
        <div className="text-[#666666] text-lg font-semibold">My Profile</div>
        <div className="flex items-center gap-x-5">
          <button className="rounded-md bg-[#FFD43D] px-4 md:px-8 py-3 text-[#666666]">
            Edit
          </button>
          <button className="rounded-md bg-[#1ED760] px-4 md:px-8 py-3 text-white">
            Save
          </button>
        </div>
      </div>
      {/* header */}

      {/* user information */}
      <div className="mt-5 border-[#D9D9D9] border-[1.5px] shadow-md text-[#666666]">
        <div className="py-4 px-4 md:px-9">
          <div className="flex flex flex-nowrap flex-col md:flex-row gap-4 md:gap-x-7 p-4">
            <img src={chad} alt="chad" className="w-24 md:w-[10rem]" />
            <div className="text-sm flex flex-col justify-between w-full">
              <div className="flex flex-col md:flex-row">
                <div className="flex-none w-14">
                  Nama
                </div>
                <div className="flex-auto md:w-64">
                  :
                </div>
                <div className="flex-auto md:w-32">
                  Kelvin Kusuma
                </div>
              </div>
              <div className="flex flex-col md:flex-row mt-2 md:mt-0">
                <div className="flex-none w-14">
                  No. Telp
                </div>
                <div className="flex-auto md:w-64">
                  :
                </div>
                <div className="flex-auto md:w-32">
                  087899507840
                </div>
              </div>
              <div className="flex flex-col md:flex-row mt-2 md:mt-0">
                <div className="flex-none w-14">
                  Email
                </div>
                <div className="flex-auto md:w-64">
                  :
                </div>
                <div className="flex-auto md:w-32">
                  kelvinkusuma@gmail.com
                </div>
              </div>
              <div className="flex flex-col md:flex-row mt-2 md:mt-0">
                <div className="flex-none w-14">
                  Alamat
                </div>
                <div className="flex-auto md:w-64">
                  :
                </div>
                <div className="flex-auto md:w-32">
                  Jln. Nakula Sadewa, no.1, ds.bukit, kec.jimbaran, kab.badung, prov.bali
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* user information */}

      {/* user input */}
      <div className="mt-9 w-full text-sm text-[#666666] flex flex-col gap-y-6">
        <div className="flex flex-col md:flex-row items-center w-full gap-4 md:gap-[4rem]">
          <div className="w-full md:w-1/2">
            <p>Event Name</p>
            <input type="text" className="shadow-md w-full p-2" />
          </div>
          <div className="w-full md:w-1/2">
            <p>Event Name</p>
            <input type="text" className="shadow-md w-full p-2" />
          </div>
        </div>

        <div className="w-full">
          <p>Alamat</p>
          <input type="text" className="shadow-md w-full p-2" />
        </div>
        <div className="w-full md:w-1/2">
          <p>Email</p>
          <input type="text" className="shadow-md w-full md:w-3/4 p-2" />
        </div>
      </div>
      {/* user input */}
    </div>
  );
};

export default MyProfile;
