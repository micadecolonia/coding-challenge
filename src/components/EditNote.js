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
    <div className="note new">
      <textarea rows="8" cols="10" placeholder="Type to add a note..." value={noteText.text} onChange={handleChange} />
      <div className="note-footer">
        <button type="button" className="save" onClick={handleEditClick}>Edit</button>
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
