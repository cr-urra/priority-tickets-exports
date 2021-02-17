import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.jpg';

import Formulario from './components/Formulario'

function App() {

  return <div className="App">
            <header className="App-header">
              <div className="row mb-4">
                <div className="col-xs-4 col-md-4 col-lg-3">
                  <img src={logo} Alt="Logo"></img>
                </div>
                <h1 className="col-xs-2 col-md-8 col-lg-9 mt8 pl-5">Exportador de Tickets</h1>
              </div>
              <Formulario/>
              <h5 className="mt-3">© Copyright 2021 | Todos los derechos reservados a Priority Ltda.</h5>
            </header>
          </div>

}

export default App;
