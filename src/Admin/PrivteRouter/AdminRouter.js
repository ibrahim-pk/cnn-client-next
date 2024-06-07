import LoadingSpinner from "@/Helpers/LoadingSpinner";
import axios from "axios";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { authUrl } from "@/Jwt/Jwt";

export const PrivateRoute = ({ children }) => {
    const [role, setRole] = useState(false);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const response = await axios.get("http://localhost:8080/api/isAuth", authUrl);
                if (response?.data?.Role) {
                    setRole(true);
                    localStorage.setItem("userRole", JSON.stringify(response?.data?.Role))
                }else{
                    router.push('/auth/login');
                } 
            } catch (error) {
                //console.log(error);
                console.log("error")
                router.push('/auth/login'); // Handle errors by redirecting to login page
            } finally {
                console.log("finally")
                setLoading(false); // Set loading to false after the authentication check completes
            }
        };

        setTimeout(() => {
            checkAuth();
          },1000);

        
    }, []);
   
    return loading ? <LoadingSpinner /> : role ? children : null;

    

    
};
