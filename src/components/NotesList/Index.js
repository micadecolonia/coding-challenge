import PropTypes from 'prop-types';
import Note from '../Note/Index';
import AddNote from '../AddNote/Index';

function NotesList({
  notes, handleAddNote, handleDeleteNote,
  handleRemoveFromTrash, isEdit, isDelete, handleIsEdit, handleEditNote,
}) {
  return (
    <div className="grid gap-4 grid-cols-250">
      {notes.map((note, index) => (
        <Note
          // eslint-disable-next-line react/no-array-index-key
          key={index}
          note={note}
          handleDeleteNote={handleDeleteNote}
          handleRemoveFromTrash={handleRemoveFromTrash}
          handleEditNote={handleEditNote}
          isEdit={isEdit}
          isDelete={isDelete}
          handleIsEdit={handleIsEdit}
        />
      ))}
      {!isDelete && <AddNote handleAddNote={handleAddNote} />}
    </div>
  );
}

NotesList.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  notes: PropTypes.array.isRequired,
  handleAddNote: PropTypes.func.isRequired,
  handleDeleteNote: PropTypes.func.isRequired,
  handleRemoveFromTrash: PropTypes.func.isRequired,
  handleEditNote: PropTypes.func.isRequired,
  isEdit: PropTypes.bool.isRequired,
  isDelete: PropTypes.bool.isRequired,
  handleIsEdit: PropTypes.func.isRequired,
};

export default NotesList;
