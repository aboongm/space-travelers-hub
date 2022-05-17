import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import Missions from '../components/Missions';
import store from '../redux/configureStore';
import { joinMissionAction, leaveMissionAction, fetchMissionApiAction } from '../redux/missions/missions';

describe('Missions tests', () => {
  it('render test', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <Missions />
      </Provider>,
    );

    expect(tree).toMatchSnapshot();
  });

  it('should return an action with type GET_MISSIONS', () => {
    const data = [
      {
        id: 1,
        name: 'mission',
        description: 'description',
      },
    ];
    const action = fetchMissionApiAction(data);
    expect(action.type).toBe('GET_MISSIONS');
  });

  it('should return an action with type JOIN_MISSION', () => {
    const id = 1;
    const action = joinMissionAction(id);
    expect(action.type).toBe('JOIN_MISSION');
  });

  it('should should return an action with type LEAVE_MISSION', () => {
    const id = 1;
    const action = leaveMissionAction(id);
    expect(action.type).toBe('LEAVE_MISSION');
  });
});
