import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import NoteList from '../../src/components/NotesList';

test('renders noteList component', () => {
  const handleAddNote = jest.fn();
  const handleDeleteNote = jest.fn();
  const handleRemoveFromTrash = jest.fn();
  const isEdit = false;
  const isDelete = false;
  const handleIsEdit = jest.fn();
  const handleEditNote = jest.fn();
  const notes = [{
    id: '0',
    date: '12/12/2020',
    text: 'Some text',
    color: 'red',
  }, {
    id: '1',
    date: '12/12/2020',
    text: 'Some text',
    color: 'red',
  }];
  const component = render(<NoteList
    notes={notes}
    handleAddNote={handleAddNote}
    handleDeleteNote={handleDeleteNote}
    handleRemoveFromTrash={handleRemoveFromTrash}
    isEdit={isEdit}
    isDelete={isDelete}
    handleIsEdit={handleIsEdit}
    handleEditNote={handleEditNote}
  />);
  expect(component).toBeTruthy();
});
