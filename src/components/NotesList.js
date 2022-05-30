import PropTypes from 'prop-types';
import Note from './Note';
import AddNote from './AddNote';

function NotesList({ notes, handleAddNote, handleDeleteNote }) {
  return (
    <div className="notes-list">
      {notes.map((note) => (
        <Note id={note.id} text={note.text} date={note.date} handleDeleteNote={handleDeleteNote} />

      ))}
      <AddNote handleAddNote={handleAddNote} />
    </div>
  );
}

NotesList.propTypes = {
  notes: PropTypes.element.isRequired,
  handleAddNote: PropTypes.func.isRequired,
  handleDeleteNote: PropTypes.func.isRequired,
};

export default NotesList;
