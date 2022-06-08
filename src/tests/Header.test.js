import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import Header from '../components/Header';

test('renders editNote component', () => {
  const store = {
    getState: jest.fn().mockReturnValue({ trash: [] }),
    subscribe: jest.fn(),
    location: jest.fn().mockReturnValue({ location: '' }),
  };

  const handleToggleDarkMode = jest.fn();
  const component = render(
    <Provider store={store}>
      <Header handleToggleDarkMode={handleToggleDarkMode} />
    </Provider>,
  );
  expect(component).toBeTruthy();
});
