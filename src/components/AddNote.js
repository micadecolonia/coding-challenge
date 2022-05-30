import PropTypes from 'prop-types';
import { useState } from 'react';

function AddNote({ handleAddNote }) {
  const [noteText, setNoteText] = useState('');

  const handleChange = (event) => {
    setNoteText(event.target.value);
  };

  const handleSaveClick = () => {
    handleAddNote(noteText);
  };

  return (
    <div className="note new">
      <textarea rows="8" cols="10" placeholder="Type to add a note..." value={noteText} onChange={handleChange} />
      <div className="note-footer">
        <button type="button" className="save" onClick={handleSaveClick}>Save</button>
      </div>
    </div>
  );
}

AddNote.propTypes = {
  handleAddNote: PropTypes.func.isRequired,
};

export default AddNote;
