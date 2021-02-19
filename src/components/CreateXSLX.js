import React, { Component } from 'react'
import ExportExcel from 'react-export-excel'
import Ticket from './Ticket'
import ReactHTMLTableToExcel from 'react-html-table-to-excel'

const ExcelFile = ExportExcel.ExcelFile
const ExcelSheet = ExportExcel.ExcelSheet
const ExcelColumn = ExportExcel.ExcelColumn

export default class CreateXSLX extends Component {
    render() {
        return  <div>
                    <ReactHTMLTableToExcel id="boton-xslx" className="btn btn-danger" table="datos" filename={this.props.cliente} sheet="Tickets" buttonText="Descargar XSLX"/>
                    <div className="pl-5 pr-5 pb-5 d-none">
                        <table className="table" id="datos">
                            <thead>
                                <tr>
                                    <th scope="col">Id</th>
                                    <th scope="col">Solicitante</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">Asunto</th>
                                    
                                </tr>
                                </thead>
                            <tbody>
                                {this.props.tickets.map(ticket => <Ticket ticket={ticket} key={ticket.id}/>)}
                            </tbody>
                        </table>
                    </div>
                </div>
    }
}
