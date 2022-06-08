import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import Dashboard from '../../pages/Dashboard';

test('renders Dashboard component', () => {
  const store = {
    getState: jest.fn().mockReturnValue({ notes: [] }),
    subscribe: jest.fn(),
  };

  const component = render(
    <Provider store={store}>
      <Dashboard />
    </Provider>,
  );
  expect(component).toBeTruthy();
});
