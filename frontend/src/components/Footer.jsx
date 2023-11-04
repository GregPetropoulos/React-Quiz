import React from 'react';
import PropTypes from 'prop-types';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className='footer'>
      <div className='row'>
        <div className='column text-center py-3'>
          <p>Greg Petropoulos Quiz App &copy; {currentYear}</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

Footer.propTypes = {
  currentYear: PropTypes.number
};
