import React, { Component } from 'react'
import axios from 'axios'

export default class formulario extends Component {

  componentDidMount = async () => {
    let direction = 'http://localhost:3000/priority-tickets-exports'
    let url = window.location.href;
    if(url.indexOf(direction) !== -1){
      if (url.indexOf('access_token=') !== -1){
        let token = url.replace(direction+"#access_token=", "")
        token = token.substr(0,token.indexOf("&"))
        const res = await axios.get("https://priority.zendesk.com/api/v2/tickets.json?page=5",{
          headers: {
            Authorization: 'Bearer '+token
          }
        })
        console.log(res);
      }else if(url.indexOf('error=') !== -1){

      }
    }
  }
  
  render() {
      return  <div className="col-xs-8 col-md-8 col-lg-5">
                <div className="card card-body">
                  <h5 className="mb-5 text-left">Bienvenido a la herramienta de exportación de tickets. Para procesar una solicitud de forma correcta, por favor seguir los pasos descritos a continuación:</h5>
                  <h6 className="mb-4 text-left">1) Haga clic en el siguiente botón de autenticar, lo redirigirá al formulario de autenticación de Zendesk para solicitar su Token de acceso (Su cuenta debe tener rol de agente o administrador):</h6>
                  <a href="https://priority.zendesk.com/oauth/authorizations/new?response_type=token&client_id=priority_tickets_export&scope=read">
                    <button type="button" className="btn btn-danger mb-4">Autenticar</button>
                  </a>
                  <h6 className="mb-4 text-left">2) Ingrese en el siguiente campo el nombre del cliente del que desea exportar sus tickets:</h6>
                  <div className="form-group">
                        <input type="Tel" className="form-control" placeholder="Ej: 123456789" name="rut" onChange={this.onInputChange} required/>
                  </div>
                  <h6 className="mb-4 text-left">3) Seleccione el formato del documento a exportar:</h6>
                  <select className="mb-4 form-control">
                    <option selected>Tipo de formato</option>
                    <option value={1}>Formato PDF</option>
                    <option value={2}>Formato XLSX</option>
                  </select>
                  <h6 className="mb-4 text-left">4) Haga clic en el siguiente botón de procesar solicitud, para realizar la exportación solicitada:</h6>
                  <a href="https://priority.zendesk.com/oauth/authorizations/new?response_type=token&client_id=priority_tickets_export&scope=read">
                    <button type="button" className="btn btn-danger mb-4">Procesar solicitud</button>
                  </a>
                </div>
              </div>
       
    }
}
