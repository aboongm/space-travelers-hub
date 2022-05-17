import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMissionAction } from '../redux/missions/missions';
import { fetchRocketApiAction } from '../redux/rockets/rockets';

const MyProfile = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missions);
  const rocketList = useSelector((state) => state.rocketReducer);

  useEffect(() => {
    if (missions.length === 0) {
      dispatch(getMissionAction());
    }
    if (rocketList.length === 0) {
      dispatch(fetchRocketApiAction);
    }
  }, []);

  return (
    <div className="container">
      <div className="row mt-4">
        <div className="col">
          <h2 className="text-center">My Missions</h2>
          <ul>
            {missions
              .filter((msn) => msn.reserved === true)
              .map((fmsn) => (
                <li key={fmsn.id} className="border p-3">
                  {fmsn.name}
                </li>
              ))}
          </ul>
        </div>

        <div className="col">
          <h3 className="mb-3">My Rockets</h3>
          <ul>
            {rocketList.length ? (
              rocketList
                .filter((rocket) => rocket.reserved === true)
                .map((frocket) => (
                  <li className="border m-0 p-3" key={frocket.id}>
                    {frocket.name}
                  </li>
                ))
            ) : (
              <li>No rocket to display</li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
