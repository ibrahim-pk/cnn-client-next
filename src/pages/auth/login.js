import React, { useState } from "react";
import { Eye, EyeOff } from "react-feather";
import axios from "axios";
import Link from "next/link";
import Footer from "@/Commmon/Footer/Footer";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [validationErrors, setValidationErrors] = useState({});

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("https://api.bartaloy24.com/api/login",
        {
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      alert(response?.data?.message);
      //console.log(response?.data)
      localStorage.setItem("cnnUser",JSON.stringify(response?.data?.user))
      localStorage.setItem("cnnUserToken",JSON.stringify(response?.data?.token))
      window.location.href = "/admin";
    } catch (error) {
      if (error.response && error.response.status === 400) {
        setValidationErrors(error.response.data);
        console.log("error.response.data is: ", error?.response?.data);
      }
    }
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    console.log(e);
  };

  // if (registered) {
  //   return <Navigate to="/" />;
  // }
  return (
    <div>
      
      <div className="flex flex-col items-center pt-8 pb-10 justify-center bg-red-100">
        <div className="max-w-lg w-full p-10 bg-white rounded-xl shadow-lg">
          <div className="flex flex-col items-center">
            <h2 className="mt-6 text-center text-2xl font-extrabold text-gray-900">
              Log in to your bartaloy24 account
            </h2>
          </div>
          <form className="mt-8" onSubmit={handleSubmit}>
            <div className="rounded-md shadow-sm -space-y-px">
              <div className="mb-4">
                {/* <label htmlFor="email-address sr-only"> Email Address</label> */}
                <input
                  type="email"
                  id="email-address"
                  name="email"
                  autoComplete="email"
                  required
                  className="text-gray-900 border border-gray-800 rounded block w-full p-3 placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email Address"
                  value={email}
                  onChange={handleEmailChange}
                  onKeyDown={() => {
                    setValidationErrors(false);
                  }}
                />
              </div>
              <div className="mb-4 relative">
                {/* <label htmlFor="email-address sr-only"> Email Address</label> */}
                <input
                  type={showPassword ? "text" : "password"}
                  id="Password"
                  name="Password"
                  autoComplete="password"
                  required
                  className="text-gray-900 border border-gray-800 rounded block w-full p-3 placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                  onKeyDown={() => {
                    setValidationErrors(false);
                  }}
                />
                <span
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer z-20"
                  onClick={togglePasswordVisibility}>
                  {showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
                </span>
              </div>
            </div>

            {validationErrors && (
              <div className="text-red-600">
                {Object.keys(validationErrors).map((key) => {
                  if (typeof validationErrors[key] === "object") {
                    return Object.values(validationErrors[key]).map((error) => (
                      <p className="mb-2 text-sm" key={error}>
                        {error}
                      </p>
                    ));
                  }
                  return (
                    <p className="mb-2 text-sm" key={key}>
                      {validationErrors[key]}
                    </p>
                  );
                })}
              </div>
            )}
            <div className=" mb-3">
              {" "}
              <Link href="/forgot-password">Forgot Password</Link>
            </div>

            <div>
              <button
                type="submit"
                className=" w-full flex justify-center py-3 px-4 border border-transparent text-md font-bold rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none">
                Sign In
              </button>
            </div>
            {/* <div className="flex items-center justify-between mt-2 mb-2">
              <div className="flex text-sm items-center">
                <p className="text-xs text-black-600 hover:text-black-500">
                  To opt-out at any time, see options available here.
                </p>
              </div>
            </div> */}
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Login;


// const headers = {
//   Authorization: `Bearer ${jwtToken?.token}`,
// };
// const { data } = await axios.post(
//   "https://server.beargear.com.bd/api/v1/product/addProduct",
//   { values, productDetails },
//   {
//     headers,
//   }
// );
// if (data.error) {
//   NotificationManager.error("Error message", data.error, 4000);
// } else {
//   NotificationManager.success("Success message", data.msg, 4000);
//   //console.log(data);
// }


//server


// const authHeader = req.headers['authorization'];
  
// if (!authHeader || !authHeader.startsWith('Bearer ')) {
//   return res.status(401).json({ error: 'No valid token provided' });
// }else{
//   const token = authHeader.slice(7);
//   const adminInfo=verifyToken(token)
// } 