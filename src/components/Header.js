import PropTypes from 'prop-types';
import React from 'react';
import { MdOutlineDarkMode } from 'react-icons/md';

function Header({ handleToggleDarkMode }) {
  return (
    <div className="header">
      <h1>Notes dashboard</h1>
      <MdOutlineDarkMode onClick={() => handleToggleDarkMode((previousDarkMode) => !previousDarkMode)} className="save" />
    </div>
  );
}

Header.propTypes = {
  handleToggleDarkMode: PropTypes.func.isRequired,
};

export default Header;
