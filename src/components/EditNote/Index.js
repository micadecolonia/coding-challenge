import PropTypes from 'prop-types';
import { useState } from 'react';

const date = new Date();
function EditNote({ note, handleEditNote, handleIsEdit }) {
  const [noteText, setNoteText] = useState(note);

  const handleChange = (event) => {
    // Validate it does not exceed the 300 char limit
    if (300 - event.target.value.length >= 0) {
      setNoteText((prevState) => ({
        ...prevState,
        date: `Edited on ${date.toLocaleDateString()}`,
        text: event.target.value,
      }));
    }
  };

  const handleEditClick = () => {
    // Validate that the user does enter at least one char in the note
    if (noteText.text.length > 0) {
      handleEditNote(noteText);
      handleIsEdit(false);
      // After adding the note, set the preview note back to being empty
      setNoteText('');
    }
  };

  return (
    <div className="flex flex-col rounded-xl p-4 h-60 break-words whitespace-pre-wrap bg-gray-200">
      <textarea className="border-0 resize-none bg-gray-200 focus:outline-0" rows="8" cols="10" placeholder="Type to add a note..." value={noteText.text} onChange={handleChange} />
      <div className="flex justify-between items-center">
        <button type="button" className="border border-black cursor-pointer rounded-3xl bg-white hover:bg-gray-400 p-1.5" onClick={handleEditClick}>Edit</button>
      </div>
    </div>
  );
}

EditNote.propTypes = {
  note: PropTypes.shape({}).isRequired,
  handleEditNote: PropTypes.func.isRequired,
  handleIsEdit: PropTypes.func.isRequired,
};

export default EditNote;
