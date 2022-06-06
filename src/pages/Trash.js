import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { MdOutlineArrowBack } from 'react-icons/md';
import { FaRegGrinBeam } from 'react-icons/fa';
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
      {trash && trash.length > 0
        ? (
          <NotesList
            notes={trash}
            handleAddToTrash={addToT}
            handleAddNote={() => () => {}}
            handleEditNote={() => () => {}}
            handleDeleteNote={() => () => {}}
            handleRemoveFromTrash={removeFromT}
            isEdit={false}
        // eslint-disable-next-line react/jsx-boolean-value
            isDelete={true}
            handleIsEdit={() => () => {}}
          />
        )
        : (
          <div className="empty-trash">
            <h2>Yay! There are no elements in the trash!</h2>
            <FaRegGrinBeam size="1.3em" />
          </div>
        )}

    </>

  );
}

export default Trash;
