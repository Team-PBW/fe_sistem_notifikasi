import logo from "/public/login/memospace-black.png";
import googleLogo from "/public/login/google.svg";
import spotifyLogo from "/public/login/spotify.svg";
import eyeOpen from "/public/login/eye-open.svg";
import eyeClosed from "/public/login/eye-closed.svg";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
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

  const submitData = async (e) => {
    e.preventDefault();
    const url = "http://localhost:3000/api/v1/auth/login";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    };
  
    try {
      const res = await fetch(url, options);
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      const response = await res.json();
      localStorage.setItem("token", response.message);
      console.log(response);
      navigate("/dashboard");
    } catch (err) {
      console.error("Error:", err);
    }
  };
  

  useEffect(() => {
    console.log("Data updated:", formData); // Debugging log
  }, [formData]);

  // const handleSubmit = (e) => {
  //   e.preventDefault(); // Prevent form submission
  //   console.log("Form submitted:", formData);
  //   // Add your registration logic here
  // };

  return (
    <div className="h-screen w-full relative font-poppins flex">
      <div className=" w-full md:w-1/2 h-full"></div>
      <div className="absolute inset-0 flex justify-center items-center flex-col space-y-4">
        <div className="flex flex-col justify-center items-center space-y-4 mb-5">
          <img src={logo} alt="logo" className="" />
          <h1 className="text-2xl">Sign in to Memospace</h1>
        </div>
        <div className="relative bg-[#666666] max-w-[528px] h-[341px] w-11/12 sm:w-2/3 md:w-1/2 lg:w-1/3 rounded-2xl shadow-lg px-14 py-10">
          <form className="flex flex-col gap-y-4" onSubmit={submitData}>
            <div className="flex flex-col gap-y-[16px]">
              <label htmlFor="email" className="text-sm text-white">
                Username
              </label>
              <div className="w-full h-[51px] rounded-[16px] bg-white flex items-center px-4">
                <input
                  type="text"
                  name="username"
                  className="bg-transparent outline-none w-full px-[32px] py-[15px]"
                  placeholder="Enter your username"
                  onChange={onChangeData}
                />
              </div>
            </div>
            <div className="flex flex-col gap-y-[16px]">
              <label htmlFor="pass" className="text-sm text-white">
                Password
              </label>
              <div className="w-full h-[51px] rounded-[16px] bg-white flex items-center px-4">
                <input
                  name="password"
                  type={passHide ? "password" : "text"}
                  className="bg-transparent outline-none w-full px-[32px] py-[15px]"
                  placeholder="Enter your password"
                  onChange={onChangeData}
                />
                <button type="button" onClick={passClick} className="ml-2">
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
          </form>
        </div>
        <div className="relative bg-[#666666] max-w-[528px] h-[342xpx] w-11/12 sm:w-2/3 md:w-1/2 lg:w-1/3 rounded-2xl shadow-lg px-14 py-10">
          <div className="flex flex-col gap-y-4">
            <div className="flex flex-col gap-y-3">
              <div className="w-full bg-white p-2 flex justify-center rounded-3xl items-center gap-3 cursor-pointer py-2 mb-1">
                <img
                  src={googleLogo}
                  alt="google-logo"
                  className="w-[32px] h-[32px]"
                />
                <p className="text-sm">Continue with Google</p>
              </div>
              <div className="w-full bg-white p-2 flex justify-center rounded-3xl items-center gap-3 cursor-pointer py-2 mt-1">
                <img
                  src={spotifyLogo}
                  alt="spotify-logo"
                  className="w-[32px] h-[32px]"
                />
                <p className="text-sm">Continue with Spotify</p>
              </div>
              <a href="" className="text-white text-sm">
                Don't have an account? Create Account
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
