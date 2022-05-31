import PropTypes from 'prop-types';
import Note from './Note';
import AddNote from './AddNote';

function NotesList({
  notes, handleAddNote, handleDeleteNote, isEdit, handleIsEdit, handleEditNote,
}) {
  return (
    <div className="notes-list">
      {notes.map((note, index) => (
        <Note
          // eslint-disable-next-line react/no-array-index-key
          key={index}
          id={note.id}
          text={note.text}
          date={note.date}
          handleDeleteNote={handleDeleteNote}
          handleEditNote={handleEditNote}
          isEdit={isEdit}
          handleIsEdit={handleIsEdit}
        />
      ))}
      <AddNote handleAddNote={handleAddNote} />
    </div>
  );
}

NotesList.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  notes: PropTypes.array.isRequired,
  handleAddNote: PropTypes.func.isRequired,
  handleDeleteNote: PropTypes.func.isRequired,
  handleEditNote: PropTypes.func.isRequired,
  isEdit: PropTypes.bool.isRequired,
  handleIsEdit: PropTypes.func.isRequired,
};

export default NotesList;
