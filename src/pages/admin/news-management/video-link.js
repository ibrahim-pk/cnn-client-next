// VideoLink.js
import React, { useState } from "react";
import axios from "axios"; // Make sure to install axios if not already installed
import AdminLayout from "@/Layout/AdminLayout";


const VideoLink = () => {
  const [link, setLink] = useState([]);

  const handleAddLink = async () => {
    try {
      const {data} = await axios.post("http://localhost:8080/api/video/link",{link}); // Replace with your API endpoint
      if(data){
        alert("Link added") 
      }
    } catch (error) {
      console.error("Error fetching Tag:", error?.message);
      alert(error.message)
    }
  };



 
  return (
    <div className="mt-24 mx-20 bg-white px-4 rounded-md drop-shadow-md">
      <h1 className="text-2xl font-semibold my-4">Manage Video Link</h1> 
       
       <input
          type="text"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Enter video embeded link"
          onChange={(e) => setLink(e.target.value)}
        />
      
      <button
        className="bg-blue-500 my-2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        onClick={handleAddLink}>
        Add Tag
      </button>
       
    </div>
  );
};

export default VideoLink;
VideoLink.getLayout = function getLayout(page) {
    return (
      <AdminLayout>
        {page}
      </AdminLayout>
    )
  }