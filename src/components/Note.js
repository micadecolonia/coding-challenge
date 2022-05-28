import { MdDeleteForever } from 'react-icons/md';
import PropTypes from 'prop-types';

// eslint-disable-next-line no-unused-vars
function Note({ id, text, date }) {
  return (
    <div className="note">
      <div className="note-header">
        <small>{date}</small>
        <MdDeleteForever className="delete-icon" size="1.3em" />
      </div>
      <span>{text}</span>
    </div>
  );
}

Note.propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default Note;
