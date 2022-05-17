import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMissions } from '../redux/missions/missions';
import { fetchRocketApiAction } from '../redux/rockets/rockets';

const MyProfile = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missions);
  const rockets = useSelector((state) => state.rocketReducer);

  useEffect(() => {
    if (missions.length === 0) {
      dispatch(getMissions());
    }
    if (rockets.length === 0) {
      dispatch(fetchRocketApiAction);
    }
  }, []);

  const rocketList = useSelector((state) => state.rocketReducer);
  const myRocket = rocketList.filter((rocket) => rocket.reserved);
  console.log('profile', myRocket);

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
          {myRocket.length ? (
            myRocket.map((rocket) => (
              <p className="border m-0 p-3" key={rocket.id}>
                {rocket.name}
              </p>
            ))
          ) : (
            <p>No rocket to display</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
