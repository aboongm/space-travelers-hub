import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import logo from './assets/images/planet.png';

const Layout = () => (
  <>
    <nav className="container border-bottom border-3 d-flex align-items-center justify-content-between p-3">
      <div className="d-flex align-items-center justify-content-start">
        <img src={logo} alt="planet" className="logo" />
        <h1 className="ms-3">Space Traveler&apos;s Hub</h1>
      </div>
      <ul className="d-flex align-items-center justify-content-around">
        <li className="px-3">
          <NavLink to="/" className="active">
            Rockets
          </NavLink>
        </li>
        <li className="px-3">
          <NavLink to="/missions" className="active">
            Missions
          </NavLink>
        </li>
        <li className="line border-start border-3 border-dark px-3">
          <NavLink to="/myProfile" className="active">
            My Profile
          </NavLink>
        </li>
      </ul>
    </nav>
    <Outlet />
  </>
);

export default Layout;
