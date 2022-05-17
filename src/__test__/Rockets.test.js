import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Rockets from '../components/Rockets';
import store from '../redux/configureStore';

describe('Test for Rockets', () => {
  test('should render', () => {
    const rockets = render(
      <Provider store={store}>
        <HashRouter>
          <Rockets />
        </HashRouter>
      </Provider>
    );
    expect(rockets).toMatchSnapshot();
  });
});
