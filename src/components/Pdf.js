import React, { Component} from 'react'
import logo from '../logo.jpg'
import Ticket from './Ticket'

export default class Pdf extends Component {

    render() {
        return  <div>
                    <div className="text-left pl-5 pt-5">
                        <img src={logo} alt="Logo"></img>
                    </div>
                    <div className="text-center">
                        <h1>Tickets {this.props.cliente}</h1>
                    </div>
                    <div className="pl-5 pr-5 pb-5">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Id</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">Asunto</th>
                                    <th scope="col">Descripción</th>
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

