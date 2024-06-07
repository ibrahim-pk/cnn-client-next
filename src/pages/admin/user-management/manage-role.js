// ManageRole.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Eye, EyeOff } from "react-feather";
import AdminLayout from "@/Layout/AdminLayout";
import { authUrl } from "@/Jwt/Jwt";
import UserTable from "@/Admin/Components/UserTable";

const ManageRole = () => {
  const [users, setUsers] = useState([]);
  const [roles, setRoles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const [validationErrors, setValidationErrors] = useState({});
  const [registered, setRegistered] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsPasswordFocused(false);
    try {
      const response = await axios.post("https://api.bartaloy24.com/api/register", {
        email,
        password,
      });
      alert(response?.data?.message);
      setRegistered(true);
    } catch (error) {
      if (error?.response && error?.response?.status === 400) {
        setValidationErrors(error?.response?.data);
        //console.log("error.response.data is: ", error.response.data);
      }
    }
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    //console.log(e);
  };
  const validatePassword = () => {
    const hasLowercase = /[a-z]/.test(password);
    const hasUppercase = /[A-Z]/.test(password);
    const hasDigit = /\d/.test(password);
    const hasSymbol = /[@$!%*?&]/.test(password);
    const isLengthValid = password.length >= 8;

    return {
      hasLowercase,
      hasUppercase,
      hasDigit,
      hasSymbol,
      isLengthValid,
    };
  };

  const passwordValidation = validatePassword();
  


  useEffect(() => {
    // Fetch user data from MongoDB Atlas using axios
    axios
      .get("https://api.bartaloy24.com/api/users")
      .then((response) => {
        setUsers(response.data);
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching user data:", error));
  }, []);

  useEffect(() => {
    // Fetch available roles
    axios
      .get("https://api.bartaloy24.com/api/getRoles")
      .then((response) => setRoles(response?.data))
      .catch((error) => console.error("Error fetching roles:", error));
  }, []);

  const handleAssignRole = (userId, selectedRole) => {
    // Send a POST request to the server endpoint
   // console.log("role userid: ", userId);
    //console.log("role selectedRole: ", selectedRole);
    axios.post(`https://api.bartaloy24.com/api/assignRole/${userId}`, {
        role: selectedRole,
      },
      authUrl
    
    )
      .then((response) => {
        alert("Manage role")
      })
      .catch((error) => {
        console.error("Error assigning role:", error?.message);
        // Handle errors, e.g., show an error message to the user
      });
  };

  return (
    <div className="mt-24 p-6">
      <h1 className="text-xl text-center my-2 font-bold mb-4">User Role Management </h1>
      <button className="btn btn-sm my-2" onClick={()=>document.getElementById('my_modal_3').showModal()}>Add User</button>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <UserTable
          users={users}
          roles={roles}
          onAssignRole={handleAssignRole}
        />
      )}
      {/* modal */}
      <dialog id="my_modal_3" className="modal">
  <div className="modal-box">
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-5 rounded-lg  max-w-md w-full">
        <h2 className="text-2xl font-bold mb-8">UserAdd Form</h2>
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
                    setIsPasswordFocused(false);
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
                    setIsPasswordFocused(true);
                    setValidationErrors(false);
                  }}
                />
                <span
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer z-20"
                  onClick={togglePasswordVisibility}>
                  {showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
                </span>
                {isPasswordFocused && (
                  <div
                    style={{
                     
                      display: password ? "block" : "none",
                      
                    }}
                    className="bg-white my-2 text-xs p-2 border rounded drop-shadow-md border-gray-500 z-10">
                    <div
                      style={{
                        color: passwordValidation.hasLowercase
                          ? "green"
                          : "red",
                      }}>
                      {passwordValidation.hasLowercase ? "✓" : "✗"} At least one
                      lowercase letter
                    </div>
                    <div
                      style={{
                        color: passwordValidation.hasUppercase
                          ? "green"
                          : "red",
                      }}>
                      {passwordValidation.hasUppercase ? "✓" : "✗"} At least one
                      uppercase letter
                    </div>
                    <div
                      style={{
                        color: passwordValidation.hasDigit ? "green" : "red",
                      }}>
                      {passwordValidation.hasDigit ? "✓" : "✗"} At least one
                      digit
                    </div>
                    <div
                      style={{
                        color: passwordValidation.hasSymbol ? "green" : "red",
                      }}>
                      {passwordValidation.hasSymbol ? "✓" : "✗"} At least one
                      special character
                    </div>
                    <div
                      style={{
                        color: passwordValidation.isLengthValid
                          ? "green"
                          : "red",
                      }}>
                      {passwordValidation.isLengthValid ? "✓" : "✗"} Minimum
                      length of 8 characters
                    </div>
                  </div>
                )}
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
            <div>
              <button
                type="submit"
                className=" w-full flex justify-center py-3 px-4 border border-transparent text-md font-bold rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none">
                Create Account
              </button>
            </div>
          </form>
      </div>
    </div>
  </div>
</dialog>
    </div>
  );
};

export default ManageRole;
ManageRole.getLayout = function getLayout(page) {
    return (
      <AdminLayout>
        {page}
      </AdminLayout>
    )
  }