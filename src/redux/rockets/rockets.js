import axios from 'axios';

// constants
const FETCH_ROCKET = 'spaceTravelerHub/rockets/FETCH_ROCKET';
const url = 'https://api.spacexdata.com/v3/rockets';
const initialState = [];

// action creators
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

// reducer
const rocketReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ROCKET:
      return action.payload;
    default:
      return state;
  }
};

export default rocketReducer;
