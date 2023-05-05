import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';


const About = () => {
  // Can map through the data as well and display dynamically the pages
  return (
    <>
      <h1>About page.</h1>
      <div className="about">
        <ul className="about_list">
          <li>
            <NavLink to="about-app">About app</NavLink>
          </li>
          <li>
            <NavLink to="about-developer">About developer</NavLink>
          </li>
        </ul>
        <Outlet />
      </div>
    </>
  );
};

export default About;