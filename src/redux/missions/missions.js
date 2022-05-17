import axios from 'axios';

const BASE_URL = 'https://api.spacexdata.com/v3/';
const MISSIONS_URL = `${BASE_URL}missions`;
const GET_MISSIONS = 'GET_MISSIONS';
const JOIN_MISSION = 'JOIN_MISSION';
const LEAVE_MISSION = 'LEAVE_MISSION';

const initialState = [];

export const fetchMissionApiAction = (data) => {
  const missions = data.map((mission) => ({
    id: mission.mission_id,
    name: mission.mission_name,
    description: mission.description,
    reserved: false,
  }));
  return {
    type: GET_MISSIONS,
    payload: missions,
  };
};

export const joiningMissionAction = (id) => ({
  type: JOIN_MISSION,
  payload: id,
});

export const leavingMissionAction = (id) => ({
  type: LEAVE_MISSION,
  payload: id,
});

export const getMissions = () => async (dispatch) => {
  await axios({
    method: 'get',
    url: MISSIONS_URL,
    responseType: 'json',
  })
    .then((res) => {
      dispatch(fetchMissionApiAction(res.data));
    });
};

const missionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MISSIONS:
      return [...action.payload];

    case JOIN_MISSION: {
      const newState = state.map((mission) => {
        if (mission.id !== action.payload) { return mission; }
        return { ...mission, reserved: true };
      });
      return newState;
    }

    case LEAVE_MISSION: {
      const newState = state.map((mission) => {
        if (mission.id !== action.payload) { return mission; }
        return { ...mission, reserved: false };
      });
      return newState;
    }

    default:
      return state;
  }
};

export default missionsReducer;
