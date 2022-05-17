import React from 'react';
import PropTypes from 'prop-types';

const Rocket = ({ rocket }) => {
  const {
    id, images, name, description,
  } = rocket;
  return (
    <>
      <div className="pt-3 container d-flex align-items-start justify-content-between">
        <img src={images} alt="rockets" width="280px" />
        <div className="px-3 m-0 d-flex flex-column align-items-start justify-content-start">
          <h4 className="m-0 p-1" key={id}>
            {name}
          </h4>
          <p className="mx-0 mb-2 p-1 lh-sm">{description}</p>
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
