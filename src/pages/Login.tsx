import logo from "/public/dashboard/logo-memospace.png";
import bg from "/public/login/bg-login.png";
import googleLogo from "/public/login/google.svg";
import spotifyLogo from "/public/login/spotify.svg";
import eyeOpen from "/public/login/eye-open.svg";
import eyeClosed from "/public/login/eye-closed.svg";
import { useState } from "react";

const Login = () => {
  const [passHide, setPassHide] = useState(true);
  const [confirmHide, setConfirmHide] = useState(true);
  const [formData, setFormData] =  useState({});

  const passClick = () => {
    setPassHide(!passHide);
  };

  const confirmClick = () => {
    setConfirmHide(!confirmHide);
  };

  const onChangeData = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="h-screen w-full relative font-poppins flex">
      <div className="bg-black w-full md:w-1/2 h-full"></div>
      <div className="bg-cover bg-center w-1/2 h-full hidden md:block" style={{ backgroundImage: `url(${bg})` }}></div>
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="relative bg-white max-w-[528px] h-[616px] w-11/12 sm:w-2/3 md:w-1/2 lg:w-1/3 rounded-2xl shadow-lg px-14 py-10">
          <img
            src={logo}
            alt="logo"
            className="absolute top-[-100px] left-[-200px] md:top-[-80px] md:left-[-200px] w-[250px] h-[34px] max-w-full mx-auto md:mx-0 top-[-80px] left-[0px]"
          />
          <div className="flex flex-col gap-y-4">
            <div className="flex flex-col gap-y-[16px]">
              <label htmlFor="email" className="text-sm">
                Create Email
              </label>
              <div className="w-full h-[51px] rounded-[16px] bg-gray-300 flex items-center px-4">
                <input
                  type="email"
                  name="email"
                  className="bg-transparent outline-none w-full px-[32px] py-[15px]"
                  placeholder="Enter your email"
                />
              </div>
            </div>
            <div className="flex flex-col gap-y-[16px]">
              <label htmlFor="pass" className="text-sm">
                Create Password
              </label>
              <div className="w-full h-[51px] rounded-[16px] bg-gray-300 flex items-center px-4">
                <input
                  name="pass"
                  type={passHide ? "password" : "text"}
                  className="bg-transparent outline-none w-full px-[32px] py-[15px]"
                  placeholder="Enter your password"
                />
                <button onClick={passClick} className="ml-2">
                  {passHide ? (
                    <img src={eyeClosed} alt="Show" />
                  ) : (
                    <img src={eyeOpen} alt="Hide" />
                  )}
                </button>
              </div>
            </div>
            <div className="flex flex-col gap-y-[16px]">
              <label htmlFor="pass-confirmed" className="text-sm">
                Confirm Password
              </label>
              <div className="w-full h-[51px] rounded-[16px] bg-gray-300 flex items-center px-4">
                <input
                  name="pass-confirmed"
                  type={confirmHide ? "password" : "text"}
                  className="bg-transparent outline-none w-full px-[32px] py-[15px]"
                  placeholder="Confirm your password"
                />
                <button onClick={confirmClick} className="ml-2">
                  {confirmHide ? (
                    <img src={eyeClosed} alt="Show" />
                  ) : (
                    <img src={eyeOpen} alt="Hide" />
                  )}
                </button>
              </div>
            </div>
            <button
              type="submit"
              className="bg-black text-white w-full gap-y-[16px] p-[16px]"
            >
              Submit
            </button>
            <div className="flex flex-col gap-y-3 mt-5">
              <div className="w-full bg-gray-300 p-2 flex justify-center rounded-3xl items-center gap-3 cursor-pointer py-2 mb-1">
                <img src={googleLogo} alt="google-logo" className="w-[32px] h-[32px]" />
                <p className="text-sm">Continue with Google</p>
              </div>
              <div className="w-full bg-gray-300 p-2 flex justify-center rounded-3xl items-center gap-3 cursor-pointer py-2 mt-1">
                <img src={spotifyLogo} alt="spotify-logo" className="w-[32px] h-[32px]" />
                <p className="text-sm">Continue with Spotify</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
