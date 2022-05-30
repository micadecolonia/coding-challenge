import { useState } from 'react';
import { nanoid } from 'nanoid';
import NotesList from './components/NotesList';
import SearchNote from './components/SearchNote';
import Header from './components/Header';

function App() {
  const [notes, setNotes] = useState([{
    id: nanoid(),
    text: 'Hello world - This is my first note!',
    date: '15/04/2022',
  },
  {
    id: nanoid(),
    text: 'Hello world - This is my second note!',
    date: '16/04/2022',
  },
  {
    id: nanoid(),
    text: 'Hello world - This is my third note!',
    date: '17/04/2022',
  }]);

  const [searchText, setSearchText] = useState('');

  const [darkMode, setDarkMode] = useState(false);

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text,
      date: date.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  return (
    <div className={`${darkMode && 'dark-mode'}`}>
      <div className="container">
        <Header handleToggleDarkMode={setDarkMode} />
        <SearchNote handleSearchNote={setSearchText} />
        <NotesList
          notes={notes.filter((note) => note.text.toLowerCase().includes(searchText))}
          handleAddNote={addNote}
          handleDeleteNote={deleteNote}
        />
      </div>
    </div>

  );
}

export default App;
