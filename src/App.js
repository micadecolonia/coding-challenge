import { useState } from 'react';
import { nanoid } from 'nanoid';
import NotesList from './components/NotesList';

function App() {
  // eslint-disable-next-line no-unused-vars
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

  const addNote = (text) => {
    console.log(text);
  };

  return (
    <div className="container">
      <NotesList notes={notes} handleAddNote={addNote} />
    </div>
  );
}

export default App;
