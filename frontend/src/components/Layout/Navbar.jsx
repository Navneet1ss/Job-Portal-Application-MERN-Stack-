

import React, { useContext, useState } from "react";
import { Context } from "../../main";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { GiHamburgerMenu } from "react-icons/gi";
import "./navbar.css"; // Importing the CSS file

const Navbar = () => {
  const [show, setShow] = useState(false);
  const { isAuthorized, setIsAuthorized, user } = useContext(Context);
  const navigateTo = useNavigate();

  const handleLogout = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/api/v1/user/logout",
        {
          withCredentials: true,
        }
      );
      toast.success(response.data.message);
      setIsAuthorized(false);
      navigateTo("/login");
    } catch (error) {
      toast.error(error.response.data.message);
      setIsAuthorized(true);
    }
  };



  return (

    
    <nav className={isAuthorized ? "navbarShow" : "navbarHide"}>
      <div className="container">
        <div className="logo">
          <img src="https://img.freepik.com/premium-vector/digital-technology-pixel-initial-letter-d-logo-design-template_441059-441.jpg" alt="logo"/>
 
        </div>
      
            
        <ul className={!show ? "menu" : "show-menu menu"}>
          <li><span></span></li>
          <li>
            <Link to={"/"} onClick={() => setShow(false)}>
              HOME
            </Link>
          </li>
          <li>
            <Link to={"/job/getall"} onClick={() => setShow(false)}>
              ALL JOBS
            </Link>
          </li>
          <li>
            <Link to={"/applications/me"} onClick={() => setShow(false)}>
              {user && user.role === "Employer"
                ? " RECEIVED APPLICATIONS"
                : "MY APPLICATIONS"}
            </Link>
          </li>
          {user && user.role === "Employer" ? (
            <>
              <li>
                <Link to={"/job/post"} onClick={() => setShow(false)}>
                  POST NEW JOB
                </Link>
              </li>
              <li>
                <Link to={"/job/me"} onClick={() => setShow(false)}>
                  VIEW YOUR JOBS
                </Link>
              </li>
            </>
          ) : null}
          {isAuthorized && (
            <li>
              <button className="btn btn-danger" onClick={handleLogout}>LOGOUT</button>
            </li>
          )}
          
        </ul>
        <div className="hamburger">
          <GiHamburgerMenu onClick={() => setShow(!show)} />
        </div>
        {isAuthorized && user && (
          <div className="user-info">
           <img src="https://cdn-icons-png.flaticon.com/512/8815/8815065.png" height={"30px"} width={"30px"}></img>
            <span><h5>{user.name} |</h5></span> <span><i>{user.role}</i></span>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;