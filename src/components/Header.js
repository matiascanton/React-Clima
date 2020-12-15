import React from 'react';
import PropTypes from 'prop-types';

function Header({ title }) {
  return (
    <nav>
      <div className="nav-wrapper light-blue darken-2">
        <a href="#!" className="brand-logo">{title}</a>
        <a href="#!" className="brand-logo">asd</a>
      </div>
    </nav>
  );
}
Header.propTypes = {
  title: PropTypes.string.isRequired

}

export default Header;
