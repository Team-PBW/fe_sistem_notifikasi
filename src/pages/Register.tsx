import logo from "/public/login/memospace-black.png";
import bg from "/public/login/bg-login.png";
import googleLogo from "/public/login/google.svg";
import spotifyLogo from "/public/login/spotify.svg";
import eyeOpen from "/public/login/eye-open.svg";
import eyeClosed from "/public/login/eye-closed.svg";
import { useState } from "react";


const Register = () => {
    const [passHide, setPassHide] = useState(true);
    const [confirmHide, setConfirmHide] = useState(true);
  
    const passClick = () => {
      setPassHide(!passHide);
    };
  
    const confirmClick = () => {
      setConfirmHide(!confirmHide);
    };
    return (
    <div className="h-screen w-full relative font-poppins flex">
        <div className=" w-full md:w-1/2 h-full"></div>
        <div className="absolute inset-0 flex justify-center items-center flex-col space-y-4">
            <div className="flex flex-col justify-center items-center space-y-4 mb-5">
                <img
                    src={logo}
                    alt="logo"
                    className=""
                />
                <h1 className="text-2xl">Sign in to Memospace</h1>
            </div>
          <div className="relative bg-[#666666] max-w-[528px] h-[341px] w-11/12 sm:w-2/3 md:w-1/2 lg:w-1/3 rounded-2xl shadow-lg px-14 py-10">
            <div className="flex flex-col gap-y-4">
              <div className="flex flex-col gap-y-[16px]">
                <label htmlFor="email" className="text-sm text-white">
                  Create Email
                </label>
                <div className="w-full h-[51px] rounded-[16px] bg-white flex items-center px-4">
                  <input
                    type="email"
                    name="email"
                    className="bg-transparent outline-none w-full px-[32px] py-[15px]"
                    placeholder="Enter your email"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-y-[16px]">
                <label htmlFor="pass" className="text-sm text-white">
                  Create Password
                </label>
                <div className="w-full h-[51px] rounded-[16px] bg-white flex items-center px-4">
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
              <button
                type="submit"
                className="bg-white w-full gap-y-[16px] p-[16px]"
              >
                Submit
              </button>
            </div>
          </div>
          <div className="relative bg-[#666666] max-w-[528px] h-[342xpx] w-11/12 sm:w-2/3 md:w-1/2 lg:w-1/3 rounded-2xl shadow-lg px-14 py-10">
            <div className="flex flex-col gap-y-4">
                <div className="flex flex-col gap-y-3">
                    <div className="w-full bg-white p-2 flex justify-center rounded-3xl items-center gap-3 cursor-pointer py-2 mb-1">
                        <img src={googleLogo} alt="google-logo" className="w-[32px] h-[32px]" />
                        <p className="text-sm">Continue with Google</p>
                    </div>
                    <div className="w-full bg-white p-2 flex justify-center rounded-3xl items-center gap-3 cursor-pointer py-2 mt-1">
                        <img src={spotifyLogo} alt="spotify-logo" className="w-[32px] h-[32px]" />
                        <p className="text-sm">Continue with Spotify</p>
                    </div>
                    <a href="" className="text-white text-sm">Don’t have account? Create Account</a>
                </div>
            </div>
          </div> 
        </div>
      </div>
    )
}


export default Register