import React, { Component } from 'react'
import axios from 'axios'
import { PDFDownloadLink } from "@react-pdf/renderer";
import PDF from './Pdf'

export default class Formulario extends Component {

  state = {
    token: "",
    cliente: "",
    clienteMay: "",
    clienteMin: "",
    format: "",
    tickets: [],
    ticketsFilter: [],
    pdf: true,
    xslx: false,
    button: false
  }

  componentDidMount = async () => {
    let direction = 'http://localhost:3000/priority-tickets-exports'
    let url = window.location.href;
    if(url.indexOf(direction) !== -1){
      if(url.indexOf('access_token=') !== -1){
        let corte = url.replace(direction+"#access_token=", "")
        const originalToken = corte.substr(0, corte.indexOf("&"));
        this.setState({
          token: originalToken
        })
      }else if(url.indexOf('error=') !== -1){
        alert("Ha ocurrido un error en la obtención del Token")
        console.log("Error: ", url)
      }
    }
  }

  onInputChange = (e) => {
    this.setState({ 
      [e.target.name]: e.target.value
    })
  }

  onMayus = (text) => {
    let init = text.substr(0, 1)
    return init.toUpperCase()+text.substr(1, text.length-1)
  }

  onMinus = (text) => {
    let init = text.substr(0, 1)
    return init.toLowerCase()+text.substr(1, text.length-1)
  }

  onChangeFormat = (event) => {
    this.setState({
      format: event.target.value
    })
  }

  importTickets = async () => {
    let validar = true
    let count = 1;
    let res = "";
    let arr = []
    while(validar) {
      res = await axios.get("https://priority.zendesk.com/api/v2/tickets.json?page="+count.toString(),{
        headers: {
          Authorization: "Bearer "+this.state.token
        }
      })
      if(res.data.tickets.length === 0){
        validar = false
      }else if(res.data.tickets.length > 0 && res.data.tickets.length < 100){
        arr.push(res)
        validar = false
      }else{
        arr.push(res)
        count = count + 1
      }
      console.log(arr);
    }
    arr.map(tickets => {
      this.setState({
        tickets: this.state.tickets.concat(tickets.data.tickets)
      })
    })
  }

  onChange = async () => {
    const error = "Ha ocurrido un error al procesar la solicitud"
    this.setState({
      clienteMay: await this.onMayus(this.state.cliente),
      clienteMin: await this.onMinus(this.state.cliente),
      pdf: false,
      xslx: false,
      button: true
    })
    if(this.state.token !== "" 
      && this.state.cliente !== "" 
      && this.state.clienteMay !== "" 
      && this.state.clienteMin !== "" 
      && this.state.format !== "" 
      && this.state.format !== "Tipo de formato"){
      try{
        await this.importTickets()
        console.log("Tickets: ", this.state.tickets);
        let filtrado = this.state.tickets.filter(ticket => {
          if(ticket.fields[0].value === this.state.clienteMay || ticket.fields[0].value === this.state.clienteMin)
            return true
          else
            return false  
        })
        filtrado = filtrado.filter(ticket => {
          if(ticket.status === "open" || ticket.status == "pending")
            return true
          else
            return false
        })
        this.setState({
          ticketsFilter: filtrado
        })
        this.setState({
          button: false
        })
        this.state.format ? this.setState({
          pdf: true
        }) : this.setState({
          xslx: true
        })
        console.log("filter: ", this.state.ticketsFilter);

      }catch(e){
        alert(error)
        console.log("Error: ", e);
        this.setState({
          button: false
        })
      }
    }else{
      alert(error);
      console.log("Problemas en los parámetros de entrada ");
      this.setState({
        button: false
      })
    }
  }

  render() {
      return  <div className="col-xs-8 col-md-8 col-lg-5 pl10">
                <div className="card card-body">
                  <h5 className="mb-5 text-left">Bienvenido a la herramienta de exportación de tickets. Para procesar una solicitud de forma correcta, por favor seguir los pasos descritos a continuación:</h5>
                  <h6 className="mb-4 text-left">1) Haga clic en el siguiente botón de autenticar, lo redirigirá al formulario de autenticación de Zendesk para solicitar su Token de acceso (Su cuenta debe tener rol de agente o administrador):</h6>
                  <a className="btn btn-danger mb-4" href="https://priority.zendesk.com/oauth/authorizations/new?response_type=token&client_id=priority_tickets_export&scope=read">
                    Autenticar
                  </a>
                  <h6 className="mb-4 text-left">2) Ingrese en el siguiente campo el nombre del cliente del que desea exportar sus tickets:</h6>
                  <div className="form-group">
                        <input type="Tel" className="form-control" placeholder="Nombre del cliente" name="cliente" onChange={this.onInputChange} required/>
                  </div>
                  <h6 className="mb-4 text-left">3) Seleccione el formato del documento a exportar:</h6>
                  <select className="mb-4 form-control" value={this.state.format} onChange={this.onChangeFormat}>
                    <option defaultValue>Tipo de formato</option>
                    <option value={true}>Formato PDF</option>
                    <option value={false}>Formato XLSX</option>
                  </select>
                  <h6 className="mb-4 text-left">4) Haga clic en el siguiente botón de procesar solicitud para realizar la exportación:</h6>
                  <button type="button" className="btn btn-danger mb-4" disabled={this.state.button} onClick={() => this.onChange()}>
                    Procesar solicitud
                  </button>
                  {
                    this.state.pdf && <h6 className="mb-4 text-left">Documento PDF generado correctamente, para descargar hacer click en el botón de Descargar PDF a continuación</h6>
                  }
                  {
                    this.state.pdf && 
                    <PDFDownloadLink document={<PDF/>} fileName="movielist.pdf" className="btn btn-danger"> 
                    {
                      ({ blob, url, loading, error }) => loading ? "Cargando documento..." : "Descargar PDF"
                    }
                    </PDFDownloadLink>
                  }
                </div>
                <h6 className="mt-3">© Copyright 2021 | Todos los derechos reservados a Priority Ltda.</h6>
              </div>
       
    }
}

//                {this.state.pdf && <PDF/>}