import React from 'react';
import PropTypes from 'prop-types';

const Clima = ({result}) => {
    
    //extraer valores
    const {name, main} = result;

    if(!name) return null;

    return (
        <div className="card-panel white col s12">
            <div className="black-text">
                <h2>El clima de {name} es:</h2>
                <p className="temperature">
                    {Math.round(main.temp)}<span>&#x2103;</span>
                </p>
                <p> Temperatura Maxima
                    {Math.round(main.temp_max)}<span>&#x2103;</span>
                </p>
                <p> Temperatura Minima
                    {Math.round(main.temp_min)}<span>&#x2103;</span>
                </p>
            </div>
        </div>

    );
}
Clima.propTypes = {
    result: PropTypes.object.isRequired

}
export default Clima;