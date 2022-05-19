import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import MyProfile from '../components/MyProfile';
import store from '../redux/configureStore';

describe('Test for Rockets', () => {
  test('should render', () => {
    const profile = render(
      <Provider store={store}>
        <HashRouter>
          <MyProfile />
        </HashRouter>
      </Provider>,
    );
    expect(profile).toMatchSnapshot();
  });
});
