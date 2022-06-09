import { nanoid } from 'nanoid';

const notes = [{
  id: nanoid(),
  text: 'Hello world - This is my first note!',
  date: '15/04/2022',
  color: '#fec971',
  isTrashed: 'false',
},
{
  id: nanoid(),
  text: 'Hello world - This is my second note!',
  date: '16/04/2022',
  color: '#00d4fe',
  isTrashed: 'false',
},
{
  id: nanoid(),
  text: 'Hello world - This is my third note!',
  date: '17/04/2022',
  color: '#fec971',
  isTrashed: 'false',
}];

export const initialNoteState = {
  lastNoteCreatedAt: null,
  totalNotes: notes.length,
  notes,
};

export const initialTrashState = {
  lastNoteCreatedAt: null,
  totalNotes: 0,
  trash: [],
};
