import PropTypes from 'prop-types';
import React from 'react';
import { MdSearch } from 'react-icons/md';

function SearchNote({ handleSearchNote }) {
  return (
    <div className="flex items-center p-3 rounded-xl mb-6 bg-gray-200">
      <MdSearch className="rounded-2xl h-7 w-7 text-gray-500 cursor-pointer" title="Search for a note" />
      <input className="w-80 bg-gray-200 focus:outline-0" onChange={(event) => handleSearchNote(event.target.value)} type="text" placeholder="Type in to search for a note" />
    </div>
  );
}

SearchNote.propTypes = {
  handleSearchNote: PropTypes.func.isRequired,
};

export default SearchNote;
