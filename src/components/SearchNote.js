import PropTypes from 'prop-types';
import React from 'react';
import { MdSearch } from 'react-icons/md';

function SearchNote({ handleSearchNote }) {
  return (
    <div className="search">
      <MdSearch className="search-icons" size="1.3em" />
      <input onChange={(event) => handleSearchNote(event.target.value)} type="text" placeholder="Search for a note" />
    </div>
  );
}

SearchNote.propTypes = {
  handleSearchNote: PropTypes.func.isRequired,
};

export default SearchNote;
