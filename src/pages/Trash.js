import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { MdOutlineArrowBack } from 'react-icons/md';
import { FaRegGrinBeam } from 'react-icons/fa';
import NotesList from '../components/NotesList/Index';
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
      <div className="flex justify-between items-center mb-6">
        <Link to="/" className="border border-black relative bg-white hover:bg-gray-400 text-black cursor-pointer rounded-3xl p-2.5">
          <MdOutlineArrowBack title="Go back to dashboard" />
        </Link>
        <button className="relative bg-white hover:bg-gray-400 border border-black text-black cursor-pointer rounded-3xl p-1.5" title="Permanently delete all notes" type="button" onClick={removeAllT}>
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
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-2xl">Yay! There are no elements in the trash!</h2>
            <FaRegGrinBeam className="text-xl font-bold mt-1.5" title="Happy face" />
          </div>
        )}

    </>

  );
}

export default Trash;
