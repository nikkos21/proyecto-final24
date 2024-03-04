import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './Components/NavBar';
import Sidebar from './Components/Sidebar';
import Home from './Components/pages/Home';
import User from './Components/pages/User';
import Rol from './Components/pages/Rol';
import Categoria from './Components/pages/Categoria';
import TipoIdentificacion from './Components/pages/TipoIdentifiacion';
import Servicios from './Components/pages/Servicios';
import ReservasEspacios from './Components/pages/ReservasEspacios';
import TipoDeSalas from './Components/pages/TipoDeSalas';
import Reserva from './Components/pages/Reserva';
import Calificacion from './Components/pages/Calificacion';
import Imagenes from './Components/pages/Imagenes';



import './App.scss';
import PanelDeAdministracion from './Components/PanelDeAdministracion';

function App() {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
          <div className="content">
            <NavBar />
              <Routes>
                <Route path="/" exact={true} component={Home} />
                <Route path="/" exact={true} component={User} />
                <Route path="/" exact={true} component={Rol} />
                <Route path="/" exact={true} component={Categoria} />
                <Route path="/" exact={true} component={TipoIdentificacion} />
                <Route path="/" exact={true} component={Servicios} />
                <Route path="/" exact={true} component={ReservasEspacios} />
                <Route path="/" exact={true} component={TipoDeSalas} />
                <Route path="/" exact={true} component={Reserva} />
                <Route path="/" exact={true} component={Calificacion} />
                <Route path="/" exact={true} component={Imagenes} />
              </Routes>
          </div>
          <div className="table">
              <PanelDeAdministracion/>

          </div>
      </div>
    </Router>
  );
}

export default App;
