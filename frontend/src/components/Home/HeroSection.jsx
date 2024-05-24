import React from "react";
import { FaBuilding, FaSuitcase, FaUsers, FaUserPlus } from "react-icons/fa";

const HeroSection = () => {
  const details = [
    {
      id: 1,
      title: "1,23,441",
      subTitle: "Live Job",
      icon: <FaSuitcase />,
    },
    {
      id: 2,
      title: "91220",
      subTitle: "Companies",
      icon: <FaBuilding />,
    },
    {
      id: 3,
      title: "2,34,200",
      subTitle: "Job Seekers",
      icon: <FaUsers />,
    },
    {
      id: 4,
      title: "1,03,761",
      subTitle: "Employers",
      icon: <FaUserPlus />,
    },
  ];
  
  return (
    <>
      <div className="heroSection">
        <div className="container">
          <div className="title">
           
            <h2>Ready to advance in your career?</h2>


            <p> Our job portal is your destination for finding opportunities that fit your unique talents and interests.

Begin your journey to your dream job by exploring our job listings and applying now!</p>
          
            <p>Take the first step towards your dream job by browsing our job listings and applying today!</p>
            <br></br>            <h4><i>Begin your serach today !</i></h4>

            
          
          </div>

         
          <div className="image">
            <img src="/job1.png" alt="hero" />
          </div>
        </div>
        <div className="details">
          {details.map((element) => {
            return (
              <div className="card" key={element.id}>
                <div className="icon">{element.icon}</div>
                <div className="content">
                  <p>{element.title}</p>
                  <p>{element.subTitle}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default HeroSection;
