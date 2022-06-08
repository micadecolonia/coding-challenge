import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import Trash from '../../pages/Trash';

test('renders Trash component', () => {
  const store = {
    getState: jest.fn().mockReturnValue({ trash: [] }),
    subscribe: jest.fn(),
  };
  const component = render(
    <Provider store={store}>
      <Trash />
    </Provider>,
  );
  expect(component).toBeTruthy();
});
