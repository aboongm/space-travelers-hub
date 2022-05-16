import axios from 'axios';

// constants
const RESERVE_MISSION = 'spaceTravelerHub/rockets/RESERVE_MISSION';
const FETCH_MISSION = 'spaceTravelerHub/rockets/FETCH_MISSION';
const url = 'https://api.spacexdata.com/v3/missions';
const initialState = [];

// action creators
export const reserveMissionAction = (payload) => ({
  type: RESERVE_MISSION,
  payload,
});

const fetchMissionAction = (payload) => ({
  type: FETCH_MISSION,
  payload,
});

export const fetchMissionApiAction = () => async (dispatch) => {
  const missions = await axios.get(url);
  const missionFetch = Object.entries(missions.data).map((mission) => {
    const {
      mission_id: id, mission_name: name, description, reserved = false,
    } = mission[1];
    return {
      id,
      name,
      description,
      reserved,
    };
  });

  dispatch(fetchMissionAction(missionFetch));
};

const bookMission = (state, payload) => {
  const nextState = state.map((mission) => {
    console.log('mission id: ', mission.id);
    console.log('payload: ', payload);
    if (mission.id !== payload) return mission;
    return { ...mission, reserved: !mission.reserved };
  });
  return nextState;
};

// reducer
const missionReducer = (state = initialState, action) => {
  switch (action.type) {
    case RESERVE_MISSION:
      return bookMission(state, action.payload);
    case FETCH_MISSION:
      return action.payload;
    default:
      return state;
  }
};

export default missionReducer;
