import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDragon } from '@fortawesome/free-solid-svg-icons';
import SearchBar from './searchBar';




import Auth from '../../utils/auth';

const Header = ({ value, handleInputChange, handleFormSubmit }) => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <header id="header">
      <div id="nav">
        <div style={{ marginLeft: "20px", display: "flex", flexDirection: "column" }}>
          <Link className="text-light" style={{ textDecoration: "none" }} to="/">
            <h1 className="m-0" style={{ color: "red" }}><FontAwesomeIcon icon={faDragon} /> D&D Creations</h1>
          </Link>
          <p style={{ color: "red" }}>Make Fantasy Reality</p>
        </div>
        <div>
          {Auth.loggedIn() ? (
            <div id="buttonLayout">
              <SearchBar
                value={value}
                handleInputChange={handleInputChange}
                handleFormSubmit={handleFormSubmit}
              />
              <Link className="btn btn-lg btn-info m-2" to="/"> Home </Link>
              <Link className="btn btn-lg btn-info m-2" to="/profile">
                {Auth.getProfile().data.username}'s Profile
              </Link>
              <Link className="btn btn-lg btn-info m-2" to="/createChar">Create Character</Link>
              <button className="btn btn-lg btn-light m-2" onClick={logout}>
                Logout
              </button>

            </div>
          ) : (
            <>
              <Link className="btn btn-lg btn-info m-2" to="/login">
                Login
              </Link>
              <Link className="btn btn-lg btn-light m-2" to="/signup">
                Signup
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;