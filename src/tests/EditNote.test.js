import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import EditNote from '../components/EditNote';

test('renders editNote component', () => {
  const store = {
    getState: jest.fn().mockReturnValue({ notes: [] }),
    subscribe: jest.fn(),
  };

  const handleEditNote = jest.fn();
  const handleIsEdit = jest.fn();
  const note = {
    id: '0',
    date: '12/12/2020',
    text: 'Some text',
    color: 'red',
  };
  const component = render(
    <Provider store={store}>
      {' '}
      {/* Set context */}
      <EditNote
        note={note}
        handleEditNote={handleEditNote}
        handleIsEdit={handleIsEdit}
      />
    </Provider>,
  );
  expect(component).toBeTruthy();
});
