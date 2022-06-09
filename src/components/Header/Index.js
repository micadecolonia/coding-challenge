import PropTypes from 'prop-types';
import React from 'react';
import { MdOutlineDarkMode, MdDeleteForever } from 'react-icons/md';
import { useHistory, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

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
  const { totalNotes } = useSelector((state) => state.trash);

  return (
    <div className="flex justify-between items-center mt-5 mb-5">
      <h1 className="flex-[2_2_0%] text-3xl text-black font-bold dark:text-white">{HeaderView()}</h1>
      <MdOutlineDarkMode className="rounded-2xl h-7 w-7 text-black cursor-pointer hover:bg-gray-200 dark:text-white dark:hover:bg-gray-400" title="Enable or disable dark mode" onClick={() => handleToggleDarkMode((previousDarkMode) => !previousDarkMode)} />
      <MdDeleteForever className="rounded-2xl h-7 w-7 text-red-600 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-400" title="Go to the trash screen" onClick={() => history.push('/trash')} />
      <p className="text-lg text-red-600 font-bold">{totalNotes}</p>
    </div>
  );
}

Header.propTypes = {
  handleToggleDarkMode: PropTypes.func.isRequired,
};

export default Header;
