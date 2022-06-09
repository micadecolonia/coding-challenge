import { useState } from 'react';
import { MdDeleteForever, MdEdit, MdUndo } from 'react-icons/md';
import PropTypes from 'prop-types';
import EditNote from '../EditNote/Index';

// eslint-disable-next-line no-unused-vars
function Note({
  note, handleDeleteNote, handleRemoveFromTrash, isEdit, isDelete, handleIsEdit, handleEditNote,
}) {
  const [isSelectedId, setIselectedId] = useState(null);

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {
      // Only edits the note that receives from params
      isEdit && note.id === isSelectedId
        ? (
          <EditNote
            note={note}
            handleEditNote={handleEditNote}
            handleIsEdit={handleIsEdit}
          />
        )
        : (
          <div className="flex flex-col rounded-xl p-4 h-60 break-words whitespace-pre-wrap" style={{ backgroundColor: note.color }}>
            <div className="font-bold">

              {/* // If it is deleting, it does not show edit or delete icons */}
              {!isDelete ? (

                <>
                  <MdDeleteForever
                    title="Delete note"
                    onClick={() => handleDeleteNote(note)}
                    className="h-6 w-6 inline float-right cursor-pointer"
                  />
                  <MdEdit
                    title="Edit note"
                    onClick={() => {
                      setIselectedId(note.id);
                      handleIsEdit(true);
                    }}
                    className="h-6 w-6 inline float-right cursor-pointer"
                  />
                </>
              )
                : (
                  <MdUndo
                    title="Restore note"
                    onClick={() => handleRemoveFromTrash(note)}
                    className="h-6 w-6 p-0.5 inline float-right cursor-pointer rounded-2xl bg-white hover:bg-gray-200"
                  />
                )}
              <small>{note.date}</small>
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
