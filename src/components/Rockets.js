import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Rocket from './Rocket';
import { fetchRocketApiAction } from '../redux/rockets/rockets';

const Rockets = () => {
  const rocketList = useSelector((state) => state.rocketReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRocketApiAction());
  }, [dispatch]);

  return (
    <>
      {rocketList.length ? (
        rocketList.map((rocket) => <Rocket rocket={rocket} key={rocket.id} />)
      ) : (
        <h3>No rocket to display</h3>
      )}
    </>
  );
};
export default Rockets;
