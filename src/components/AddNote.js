import PropTypes from 'prop-types';
import { useState } from 'react';

function AddNote({ handleAddNote }) {
  const [noteText, setNoteText] = useState('');

  const handleChange = (event) => {
    // Validate it does not exceed the 300 char limit
    if (300 - event.target.value.length >= 0) {
      setNoteText(event.target.value);
    }
  };

  const handleSaveClick = () => {
    // Validate that the user does enter at least one char in the note
    if (noteText.trim().length > 0) {
      handleAddNote(noteText);
      // After adding the note, set the preview note back to being empty
      setNoteText('');
    }
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
