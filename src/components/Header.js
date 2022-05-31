import PropTypes from 'prop-types';
import React from 'react';
import { MdOutlineDarkMode, MdDeleteForever } from 'react-icons/md';
import { useHistory } from 'react-router-dom';

function Header({ handleToggleDarkMode }) {
  const history = useHistory();

  return (
    <div className="header">
      <h1 id="page-title">My notes dashboard</h1>
      <MdOutlineDarkMode onClick={() => handleToggleDarkMode((previousDarkMode) => !previousDarkMode)} className="moon" />
      <MdDeleteForever onClick={() => history.push('/trash')} className="delete-icon" size="2em" color="red" />
    </div>
  );
}

Header.propTypes = {
  handleToggleDarkMode: PropTypes.func.isRequired,
};

export default Header;
