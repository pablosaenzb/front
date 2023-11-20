import React from 'react';

const ContactoPage = () => {
  return (
    <div className="contenedor_general_contacto">
      <div className="info_contacto">
        <form name="fvalida">
          <label htmlFor="nombre">Tu Nombre:</label>
          <input type="text" name="nombre" size="30" maxLength="50" id="nombre" />
          <br /><br />
          <label htmlFor="correo">Tu correo electrónico:</label>
          <input type="email" name="correo" size="30" id="correo" />
          <br /><br />
          <label htmlFor="interes">Asunto:</label>
          <select type="interes" name="interes" id="interes">
            <option value="Clientes">Atención al cliente</option>
            <option value="Proveedores">Armado de PC</option>
            <option value="Elegir">Reclamo</option>
            <option value="Comercial">Formar Parte</option>
          </select>
          <br /><br />
          <label htmlFor="mensaje">Mensaje:</label>
          <textarea type="mensaje" name="mensaje" id="mensaje" rows="4" cols="50"></textarea>
          <br /><br />
          <input type="button" id="b1" value="Enviar" />
          <p className="warnings" id="warnings"></p>
        </form>
      </div>
      <div className="contenedor_titulocontacto">
        <p className="titulo_contacto">CONTACTATE CON NOSOTROS</p>
        <p className="titulo_contacto">ESTAMOS PARA AYUDARTE</p>
        <br />
        <h3 className="info_contacto">
          <i className="fa fa-phone-square" aria-hidden="true"></i> Atención al cliente: <b>(+54) 011 4545-4545 </b>
        </h3>
        <h3 className="info_contacto">
          <i className="fa fa-envelope-open" aria-hidden="true"></i> Email: <b>powerpulse@gmail.com</b>
        </h3>
        <h3 className="info_contacto">
          <i className="fa fa-calendar" aria-hidden="true"></i> <b>Lunes a Sábado - 8:00 a 22:00 </b>
        </h3>
      </div>
    </div>
  );
};

export default ContactoPage;