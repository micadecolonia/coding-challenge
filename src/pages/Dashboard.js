import { useState } from 'react';
import { nanoid } from 'nanoid';
import { useSelector, useDispatch } from 'react-redux';
import NotesList from '../components/NotesList';
import SearchNote from '../components/SearchNote';
import { addNote, deleteNote, editNote } from '../store/notesSlice';
import { addToTrash } from '../store/trashSlice';

import AddNote from '../components/AddNote';

function Dashboard() {
  const { notes } = useSelector((state) => state.notes);
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState('');
  const [isEdit, setIsEdit] = useState(false);
  const date = new Date();

  const addN = (text, color) => {
    const newNote = {
      id: nanoid(),
      text,
      color,
      date: date.toLocaleDateString(),
    };
    dispatch(addNote(newNote));
  };

  const deleteN = (note) => {
    // TODO add note to the trash
    dispatch(addToTrash(note));
    // TODO delete note from notes array
    dispatch(deleteNote(note));
  };

  const editN = (noteEdit) => {
    dispatch(editNote(noteEdit));
  };

  const [buttonText, setButtonText] = useState('Click me!');

  const handleClick = () => {
    setButtonText('Coding challenge, May 2022 - Micaela Rodriguez');
  };

  return (
    <>
      <SearchNote handleSearchNote={setSearchText} />
      {notes && notes.length > 0
        ? (
          <NotesList
            notes={notes.filter((note) => note.text.toLowerCase().includes(searchText))}
            handleAddNote={addN}
            handleDeleteNote={deleteN}
            handleRemoveFromTrash={() => () => {}}
            handleEditNote={editN}
            isEdit={isEdit}
            isDelete={false}
            handleIsEdit={setIsEdit}
          />
        )
        : (<AddNote handleAddNote={addN} />)}
      <footer className="signature">
        <button id="click" className="signature" type="button" onClick={handleClick} title="Click me" size="1.3em">
          {' '}
          {buttonText}
          {' '}
        </button>
      </footer>
    </>
  );
}

export default Dashboard;
