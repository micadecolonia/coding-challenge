import { useState } from 'react';
import { MdDeleteForever, MdEdit, MdUndo } from 'react-icons/md';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import EditNote from './EditNote';

// eslint-disable-next-line no-unused-vars
function Note({
  note, handleDeleteNote, handleRemoveFromTrash, isEdit, isDelete, handleIsEdit, handleEditNote,
}) {
  const [isSelectedId, setIselectedId] = useState(null);
  const { totalNotes } = useSelector((state) => state.trash);
  const isOnlyOneNoteLeft = totalNotes === 1;

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {
      // TODO Change that from id received from params
      isEdit && note.id === isSelectedId
        ? (
          <EditNote
            note={note}
            handleEditNote={handleEditNote}
            handleIsEdit={handleIsEdit}
          />
        )
        : (
          <div className={`note ${isOnlyOneNoteLeft ? 'deleted-note' : ''}`} style={{ backgroundColor: note.color }}>
            <div className="note-header">
              <small>{note.date}</small>
              {/* // TODO If it is deleting, do not show edit or delete icons */}
              {!isDelete ? (

                <>

                  <MdDeleteForever onClick={() => handleDeleteNote(note)} className="delete-icon" size="1.3em" />
                  <MdEdit
                    onClick={() => {
                      setIselectedId(note.id);
                      handleIsEdit(true);
                    }}
                    className="edit-icon"
                    size="1.3em"
                  />
                </>
              )
                : (<MdUndo onClick={() => handleRemoveFromTrash(note)} className="save" />)}

              {/* // TODO Add button to take out from the trash */}
            </div>
            <span>{note.text}</span>
          </div>
        )
    }
    </>
  );
}

Note.propTypes = {
  note: PropTypes.shape({
    id: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
  }).isRequired,
  handleDeleteNote: PropTypes.func.isRequired,
  handleRemoveFromTrash: PropTypes.func.isRequired,
  handleEditNote: PropTypes.func.isRequired,
  isEdit: PropTypes.bool.isRequired,
  isDelete: PropTypes.bool.isRequired,
  handleIsEdit: PropTypes.func.isRequired,
};

export default Note;
