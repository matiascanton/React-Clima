import React, {useState} from 'react';
import PropTypes from 'prop-types';

const Clima = ({message}) => {
    
    return (
    <p className="red darken-4 error">{message}</p>
    );
}
Error.propTypes = {
    messagge: PropTypes.string.isRequired

}
export default Clima;