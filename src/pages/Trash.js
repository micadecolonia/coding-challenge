import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { MdOutlineArrowBack } from 'react-icons/md';
import NotesList from '../components/NotesList';
import { addToTrash, removeFromTrash, removeAllTrash } from '../store/trashSlice';
import { addNote } from '../store/notesSlice';

function Trash() {
  const { trash } = useSelector((state) => state.trash);
  const dispatch = useDispatch();

  const addToT = (note) => {
    dispatch(addToTrash(note));
  };

  // TODO Call this function on click icon restore.
  const removeFromT = (note) => {
    // TODO add note to the Notes Array
    dispatch(addNote(note));
    // TODO delete note from trash array
    dispatch(removeFromTrash(note));
  };

  const removeAllT = () => {
    dispatch(removeAllTrash());
  };

  return (
    <>
      <div className="control-btns">
        <Link to="/" className="back-lnk">
          <MdOutlineArrowBack />
        </Link>
        <button type="button" id="delete-all-btn" onClick={removeAllT}>
          Permanently delete all notes
        </button>
      </div>
      <NotesList
        notes={trash}
        handleAddToTrash={addToT}
        handleAddNote={() => () => {}}
        handleEditNote={() => () => {}}
        handleDeleteNote={() => () => {}}
        handleRemoveFromTrash={removeFromT}
        handleRemoveAllTrash={removeAllT}
        isEdit={false}
        // eslint-disable-next-line react/jsx-boolean-value
        isDelete={true}
        handleIsEdit={() => () => {}}
      />

    </>

  );
}

export default Trash;
