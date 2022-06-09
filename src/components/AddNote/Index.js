import PropTypes from 'prop-types';
import { useState } from 'react';
import ColorSelector from '../ColorSelector/Index';

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
    <div className="flex flex-col rounded-xl p-4 h-60 break-words whitespace-pre-wrap bg-gray-200" style={{ backgroundColor: noteColor }}>
      <textarea className="border-0 resize-none bg-gray-200 focus:outline-0" rows="8" cols="10" placeholder="Type to add a note..." value={noteText} onChange={handleChange} style={{ backgroundColor: noteColor }} />
      <div className="flex justify-between items-center">
        <ColorSelector handleChangeColor={handleChangeColor} />
        <button title="Save note" type="button" className="border border-black cursor-pointer rounded-3xl bg-white hover:bg-gray-400 p-1.5" onClick={handleSaveClick}>Save</button>
      </div>
    </div>
  );
}

AddNote.propTypes = {
  handleAddNote: PropTypes.func.isRequired,
};

export default AddNote;
