import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.jpg';

import Formulario from './components/Formulario'

function App() {

  return <div className="App">
            <header className="App-header">
              <div className="row mb-4">
                <div className="col-xs-4 col-md-4 col-lg-3">
                  <img src={logo} alt="Logo"></img>
                </div>
                <h1 className="col-xs-2 col-md-8 col-lg-9 mt8 pl-2 t-header">Exportador de Tickets</h1>
              </div>
              <Formulario/>
            </header>
          </div>

}

export default App;
