import { useEffect } from "react";
import {  useNavigate } from "react-router-dom";

const Logout = () => {

    const navigate = useNavigate();
    
    useEffect(() => {
      const logout = () => {
        console.log("TOKEN = " + localStorage.getItem('token'));
        localStorage.removeItem('token');
        navigate("/");
        navigate(0);
      };
      logout();
    });
    
    return null;
  };

export default Logout;