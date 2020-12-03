import React from 'react';
import PropTypes from 'prop-types';

const Clima = ({ result }) => {

    //extraer valores
    const { name, main, weather } = result;

    if (!name) return null;

    return (
        <div className="card-panel white col s12">
            <div className="black-text">
                <h2 className="header">{name}</h2>
                <div className="card-image imageClima">
                    <img src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`} alt="Imagen Clima" />
                </div>
                <div className="card-stacked">
                    <div className="card-content">
                        <p className="temperature">
                            {Math.round(main.temp)}<span>&#x2103;</span>
                        </p>
                    </div>
                    <div className="card-action">
                        <p> Temperatura Maxima
                    {Math.round(main.temp_max)}<span>&#x2103;</span>
                        </p>
                        <p> Temperatura Minima
                    {Math.round(main.temp_min)}<span>&#x2103;</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>

    );
}
Clima.propTypes = {
    result: PropTypes.object.isRequired

}
export default Clima;