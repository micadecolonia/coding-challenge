import React from 'react';
import { MdSearch } from 'react-icons/md';

function SearchNote() {
  return (
    <div className="search">
      <MdSearch className="search-icons" size="1.3em" />
      <input type="text" placeholder="Search for a note" />
    </div>
  );
}

export default SearchNote;
