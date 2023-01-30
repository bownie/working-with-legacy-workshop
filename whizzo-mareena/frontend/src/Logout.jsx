import React, { useEffect, useDispatch } from "react";
import {  useNavigate } from "react-router-dom";

const Logout = () => {

    const navigate = useNavigate();

    useEffect(() => {
      logout();
    }, []);

    const logout = () => {
      console.log("TOKEN = " + localStorage.getItem('token'));
      localStorage.removeItem('token');
      navigate("/");
      navigate(0);
    };

    return null;
  };

export default Logout;