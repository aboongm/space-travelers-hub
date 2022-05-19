import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Rockets from '../components/Rockets';
import store from '../redux/configureStore';

import {
  fetchRocketAction,
  reserveRocketAction,
} from '../redux/rockets/rockets';

describe('Test for Rockets', () => {
  test('should render', () => {
    const rockets = render(
      <Provider store={store}>
        <HashRouter>
          <Rockets />
        </HashRouter>
      </Provider>,
    );
    expect(rockets).toMatchSnapshot();
  });

  it('should return an action with type FETCH_ROCKET', () => {
    const data = [
      {
        id: 1,
        images: 'images',
        name: 'rocket',
        description: 'description',
        reserved: true,
      },
    ];
    const action = fetchRocketAction(data);
    expect(action.type).toBe('spaceTravelerHub/rockets/FETCH_ROCKET');
  });

  it('should return an action with type RESERVE_ROCKET', () => {
    const data = [
      {
        id: 1,
        images: 'images',
        name: 'rocket',
        description: 'description',
        reserved: true,
      },
    ];
    const action = reserveRocketAction(data.id);
    expect(action.type).toBe('spaceTravelerHub/rockets/RESERVE_ROCKET');
  });
});
