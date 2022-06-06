import PropTypes from 'prop-types';
import { useState } from 'react';
import ColorSelector from './ColorSelector/Index';

function AddNote({ handleAddNote }) {
  const [noteText, setNoteText] = useState('');
  const [noteColor, setNoteColor] = useState('gainsboro');

  const handleChange = (event) => {
    // Validate it does not exceed the 300 char limit
    if (300 - event.target.value.length >= 0) {
      setNoteText(event.target.value);
    }
  };

  const handleSaveClick = () => {
    // Validate that the user does enter at least one char in the note
    if (noteText.trim().length > 0) {
      handleAddNote(noteText, noteColor);
      // After adding the note, set the preview note back to being empty
      setNoteText('');
    }
  };

  const handleChangeColor = (color) => {
    setNoteColor(color);
  };

  return (
    <div className="note new" style={{ backgroundColor: noteColor }}>
      <textarea rows="8" cols="10" placeholder="Type to add a note..." value={noteText} onChange={handleChange} style={{ backgroundColor: noteColor }} />
      <div className="note-footer">
        <ColorSelector handleChangeColor={handleChangeColor} />
        <button type="button" className="save" onClick={handleSaveClick}>Save</button>
      </div>
    </div>
  );
}

AddNote.propTypes = {
  handleAddNote: PropTypes.func.isRequired,
};

export default AddNote;
