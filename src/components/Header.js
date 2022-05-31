import PropTypes from 'prop-types';
import React from 'react';
import { MdOutlineDarkMode, MdDeleteForever } from 'react-icons/md';
import { useHistory, useLocation } from 'react-router-dom';

function HeaderView() {
  const location = useLocation();
  switch (location.pathname) {
    case '/':
      return 'My notes dashboard';
    case '/trash':
      return 'Deleted notes';
    default:
      return 'I do not know how you got here';
  }
}

function Header({ handleToggleDarkMode }) {
  const history = useHistory();

  return (
    <div className="header">
      <h1 id="page-title">{HeaderView()}</h1>
      <MdOutlineDarkMode onClick={() => handleToggleDarkMode((previousDarkMode) => !previousDarkMode)} className="moon" />
      <MdDeleteForever onClick={() => history.push('/trash')} className="delete-icon" size="2em" color="red" />
    </div>
  );
}

Header.propTypes = {
  handleToggleDarkMode: PropTypes.func.isRequired,
};

export default Header;
