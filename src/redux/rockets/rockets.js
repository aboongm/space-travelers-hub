import axios from 'axios';

// constants
const FETCH_ROCKET = 'spaceTravelerHub/rockets/FETCH_ROCKET';
const RESERVE_ROCKET = 'spaceTravelerHub/rockets/RESERVE_ROCKET';
const url = 'https://api.spacexdata.com/v3/rockets';
const initialState = [];

// action creators
export const reserveRocketAction = (payload) => ({
  type: RESERVE_ROCKET,
  payload,
});

const fetchRocketAction = (payload) => ({
  type: FETCH_ROCKET,
  payload,
});

export const fetchRocketApiAction = () => async (dispatch) => {
  const rockets = await axios.get(url);
  const rocketFetch = Object.entries(rockets.data).map((rocket) => {
    const images = rocket[1].flickr_images[0];
    const {
      id, rocket_name: name, description, reserved = false,
    } = rocket[1];

    return {
      id,
      images,
      name,
      description,
      reserved,
    };
  });

  dispatch(fetchRocketAction(rocketFetch));
};

const bookRocket = (state, payload) => {
  const nextState = state.map((rocket) => {
    if (rocket.id !== payload) return rocket;
    return { ...rocket, reserved: !rocket.reserved };
  });
  return nextState;
};

// reducer
const rocketReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ROCKET:
      return action.payload;
    case RESERVE_ROCKET:
      return bookRocket(state, action.payload);
    default:
      return state;
  }
};

export default rocketReducer;
