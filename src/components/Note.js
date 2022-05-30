import { MdDeleteForever } from 'react-icons/md';
import PropTypes from 'prop-types';

// eslint-disable-next-line no-unused-vars
function Note({
  id, text, date, handleDeleteNote,
}) {
  return (
    <div className="note">
      <div className="note-header">
        <small>{date}</small>
        <MdDeleteForever onClick={() => handleDeleteNote(id)} className="delete-icon" size="1.3em" />
      </div>
      <span>{text}</span>
    </div>
  );
}

Note.propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  handleDeleteNote: PropTypes.func.isRequired,
};

export default Note;
