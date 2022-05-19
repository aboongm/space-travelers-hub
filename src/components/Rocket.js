import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { reserveRocketAction } from '../redux/rockets/rockets';

const Rocket = ({ rocket }) => {
  const {
    id, images, name, description, reserved,
  } = rocket;
  const dispatch = useDispatch();
  const reserveCancelRocket = () => {
    dispatch(reserveRocketAction(id));
  };
  return (
    <>
      <div className="pt-3 container d-flex align-items-start justify-content-between">
        <img src={images} alt="rockets" width="280px" />
        <div className="px-3 m-0 d-flex flex-column align-items-start justify-content-start">
          <h4 className="m-0 p-1" key={id}>
            {name}
          </h4>
          <p className="mx-0 mb-2 p-1 lh-sm">
            {reserved && <span className="badge">Reserved</span>}
            {' '}
            {description}
          </p>
          {reserved ? (
            <button
              type="button"
              onClick={reserveCancelRocket}
              className="btn2"
            >
              Cancel Reservation
            </button>
          ) : (
            <button
              type="button"
              onClick={reserveCancelRocket}
              className="btn1"
            >
              Reserve Rocket
            </button>
          )}
        </div>
      </div>
    </>
  );
};

Rocket.propTypes = {
  rocket: PropTypes.shape({
    id: PropTypes.number,
    images: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    reserved: PropTypes.bool,
  }).isRequired,
};

export default Rocket;
