import React from 'react';
import PropTypes from 'prop-types';

const Rocket = ({ rocket }) => {
  const {
    id, images, name, description,
  } = rocket;
  return (
    <>
      <div className="container d-flex align-items-center justify-content-between">
        <img src={images} alt="rockets" width="240px" />
        <div className="p-3 d-flex flex-column align-items-start justify-content-center">
          <h3 key={id}>{name}</h3>
          <p>{description}</p>
          <button type="button" className="btn1">
            Reserve Rocket
          </button>
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
