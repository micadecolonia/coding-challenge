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

  const addN = (text) => {
    const newNote = {
      id: nanoid(),
      text,
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

  return (
    <>
      <SearchNote handleSearchNote={setSearchText} />
      {notes && notes.length > 0
        ? (
          <NotesList
            notes={notes.filter((note) => note.text.toLowerCase().includes(searchText))}
            handleAddNote={addN}
            handleDeleteNote={deleteN}
            handleEditNote={editN}
            isEdit={isEdit}
            isDelete={false}
            handleIsEdit={setIsEdit}
          />
        )
        : (<AddNote handleAddNote={addN} />)}

    </>
  );
}

export default Dashboard;
