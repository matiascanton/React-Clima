import React, { useState } from 'react';
import Error from './Error'
import PropTypes from 'prop-types';

const Form = ({ search, saveSearch, saveConsult }) => {

    const [error, saveError] = useState(false)

    // Extraeer ciudad y pais
    const { city, country } = search;

    // Funcion para colocar los elementos en el State
    const handleChange = e => {
        // actualizar el State
        saveSearch({
            ...search,
            [e.target.name]: e.target.value
        })
    }
    // Cuando se hace el submit
    const handleSubmit = e => {
        e.preventDefault();

        // Validacion
        if (city.trim() === '' || country.trim() === '') {
            saveError(true);
            return;
        }
        saveError(false);

        // Pasarlo al componente principal
        saveConsult(true);

    }


    return (
        <form onSubmit={handleSubmit}>
            {error ? <Error message="Ambos campos son obligatorios" /> : null}
            <div className="input-field col s12">
                <input
                    type="text"
                    name="city"
                    id="city"
                    value={city}
                    onChange={handleChange}
                />
                <label htmlFor="city"> Ciudad: </label>
            </div>
            <div className="input-field col s12">
                <select
                    name="country"
                    id="country"
                    value={country}
                    onChange={handleChange}
                >
                    <option value=""> Seleccione un Pais</option>
                    <option value="US">Estados Unidos</option>
                    <option value="MX">México</option>
                    <option value="AR">Argentina</option>
                    <option value="CO">Colombia</option>
                    <option value="CR">Costa Rica</option>
                    <option value="ES">España</option>
                    <option value="PE">Perú</option>
                </select>
                <label htmlFor="country">Pais: </label>
            </div>

            <div className="input-field col s12">
                <input
                    type="submit"
                    value="Search"
                    className="waves-effect waves-light btn-large btn-glock yellow accent-4"
                />
            </div>
        </form>

    );
}

Form.propTypes = {
    search: PropTypes.object.isRequired,
    saveSearch: PropTypes.func.isRequired,
    saveConsult: PropTypes.func.isRequired

}
export default Form;
