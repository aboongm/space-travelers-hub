import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMissions } from '../redux/missions/missions';
// import { fetchRocketApiAction } from '../redux/rockets/rockets';

const MyProfile = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missions);
  // const rockets = useSelector((state) => state.rockets);

  useEffect(() => {
    if (missions.length === 0) {
      dispatch(getMissions());
    }
    // if (rockets.length === 0) {
    //   dispatch(fetchRocketApiAction);
    // }
  }, []);

  return (

    <div className="container">
      <div className="row align-items-end">
        <div className="col">
          <h2 className="text-center">My Missions</h2>
          <ul>
            {missions.filter((msn) => msn.reserved === true).map((fmsn) => (
              <li
                key={fmsn.id}
                className="border p-3"
              >
                {fmsn.name}
              </li>
            ))}
          </ul>
        </div>

        <div className="col">
          <h2 className="text-center">My Rockets</h2>
          <ul>
            {missions.filter((msn) => msn.reserved === true).map((fmsn) => (
              <li
                key={fmsn.id}
                className="border p-3"
              >
                {fmsn.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  /*      <div className="w-1/2 flex flex-col gap-3">
        <h2 className="font-bold text-xl">Rockets</h2>
        <ul className="border">
          {rockets.filter((rocket) => rocket.reserved === true).map((rocket) => (
            <li
              key={rocket.id}
              className="border p-3"
            >
              {rocket.name}
            </li>
          ))}
        </ul>
      </div>  */

  );
};

export default MyProfile;
