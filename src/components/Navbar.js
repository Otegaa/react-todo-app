import React from 'react';
import { links } from './data';
import { NavLink } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const { user, logout } = useAuthContext();

  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };
  return (
    <>
      <nav className="navbar">
        <ul>
          {links.map((link) => {
            return (
              <React.Fragment key={link.text}>
                {link.path === 'login' ? (
                  !user && (
                    <li>
                      <NavLink to={link.path}>{link.text}</NavLink>
                    </li>
                  )
                ) : (
                  <li>
                    <NavLink to={link.path}>{link.text}</NavLink>
                  </li>
                )}
              </React.Fragment>
            );
          })}
        </ul>
      </nav>
      {user && (
        <div className="logout">
          <p>{user}</p>
          {<button onClick={handleLogout}>Logout</button>}
        </div>
      )}
    </>
  );
};

export default Navbar;