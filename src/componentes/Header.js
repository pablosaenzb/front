import React from 'react';
import { Link } from 'react-router-dom'; 

const Header = () => {
  return (
    <header className="header">
      <div className="header_superior">
        <div className="logo">
          <img src="imagenes/logo_powerpulse.png" alt="Logo" />
        </div>
      </div>
      <div className="contenedor_menu">
        <div className="menu">
          <input type="checkbox" id="check_menu" />
          <label htmlFor="check_menu" id="label_check">
            <i className="fa-solid fa-bars icon_menu"></i>
          </label>
          <nav>
            <ul>
              <li><Link to="/"><i className="fa-solid fa-house" style={{ color: '#ffffff' }}></i> INICIO</Link></li>
              <li><Link to="/nosotros">NOSOTROS</Link></li>
              <li><Link to="/servicios">SERVICIOS</Link></li>
              <li><Link to="/productos">PRODUCTOS</Link></li> 
              <li><Link to="/contacto">CONTACTO</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;