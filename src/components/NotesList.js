import PropTypes from 'prop-types';
import Note from './Note';
import AddNote from './AddNote';

function NotesList({ notes }) {
  return (
    <div className="notes-list">
      {notes.map((note) => (
        <Note id={note.id} text={note.text} date={note.date} />

      ))}
      <AddNote />
    </div>
  );
}

NotesList.propTypes = {
  notes: PropTypes.element.isRequired,
};

export default NotesList;
