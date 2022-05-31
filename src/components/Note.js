import { MdDeleteForever, MdEdit } from 'react-icons/md';
import PropTypes from 'prop-types';
import EditNote from './EditNote';

// eslint-disable-next-line no-unused-vars
function Note({
  id, text, date, handleDeleteNote, isEdit, handleIsEdit, handleEditNote,
}) {
  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {
      isEdit
        ? (
          <EditNote
            note={{ id, text, date }}
            handleEditNote={handleEditNote}
            handleIsEdit={handleIsEdit}
          />
        )
        : (
          <div className="note">
            <div className="note-header">
              <small>{date}</small>
              <MdDeleteForever onClick={() => handleDeleteNote({ id })} className="delete-icon" size="1.3em" />
              <MdEdit onClick={() => handleIsEdit(true)} className="edit-icon" size="1.3em" />
            </div>
            <span>{text}</span>
          </div>
        )
    }
    </>
  );
}

Note.propTypes = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  handleDeleteNote: PropTypes.func.isRequired,
  handleEditNote: PropTypes.func.isRequired,
  isEdit: PropTypes.bool.isRequired,
  handleIsEdit: PropTypes.func.isRequired,
};

export default Note;
