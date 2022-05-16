import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import logo from './assets/images/planet.png';

const Layout = () => (
  <>
    <nav className="navBar container">
      <div>
        <img src={logo} alt="planet" className="logo" />
        <h1>Space Traveler&apos;s Hub</h1>
      </div>
      <ul>
        <li>
          <NavLink to="/" className="active">
            Rockets
          </NavLink>
        </li>
        <li>
          <NavLink to="/missions" className="active">
            Missions
          </NavLink>
        </li>
        <li className="line">
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
