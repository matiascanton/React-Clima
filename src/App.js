import React, { Fragment, useState, useEffect } from 'react';
import Header from './components/Header'
import Form from './components/Form'
import Clima from './components/Clima'
import Error from './components/Error'

function App() {

  const [search, saveSearch] = useState({
    city: '',
    country: ''
  });

  const [consult, saveConsult] = useState(false);
  const [result, saveResult] = useState({});
  const [error, saveError] = useState(false);

  const { city, country } = search;

  useEffect(() => {
    const consultApi = async () => {

      if (consult) {
        const appId = 'c12e3b2d99361885146b1ecc4d395072';
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&lang=es&APPID=${appId}&units=metric`;
        const response = await fetch(url);
        const result = await response.json();

        saveResult(result);
        saveConsult(false);

        if (result.cod === "404") {
          saveError(true);
        } else {
          saveError(false);
        }
      }
    }
    consultApi();
  }, [consult]);

  let component;
  if (error) {
    component = <Error message="No hay resultados" />
  } else {
    component = <Clima result={result} />
  }

  return (

    <Fragment>
      <Header
        title="Clima React"
      />
      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col m6 s12">
              <Form
                search={search}
                saveSearch={saveSearch}
                saveConsult={saveConsult}

              />
            </div>
            <div className="col m6 s12">
              <Clima
                result={result}
              />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
