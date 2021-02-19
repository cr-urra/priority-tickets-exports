import React, { Component } from 'react'
import ReactToPrint from 'react-to-print'
import ComponentToPrint from './Pdf';

export default class CreatePDF extends Component {

    render() {
        return  <div>
                    <ReactToPrint
                            trigger={() => {
                                return <button className="btn btn-danger mb-5">Descargar PDF</button>;
                            }}
                            content={() => this.componentRef}
                        />
                    <div className="d-none"><ComponentToPrint tickets={this.props.tickets} cliente={this.props.cliente} ref={el => (this.componentRef = el)} /></div>  
                </div>
    }
}
