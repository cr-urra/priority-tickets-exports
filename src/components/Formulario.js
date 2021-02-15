import React, { Component } from 'react'
import axios from 'axios'

export default class formulario extends Component {

  componentDidMount = async () => {
    //const res = await axios.get("https://priority.zendesk.com/oauth/authorizations/new?response_type=code&redirect_uri={https://cr-urra.github.io/priority-tickets-exports}&client_id={cd2eab47f51f1cbbb873ef116a239bb9c56dc08d4a714f09e27d17da2f5914fd}&scope=tickets:read")
    //console.log(res);
  }
  render() {

      return (
          <div>
              <a href="https://priority.zendesk.com/oauth/authorizations/new?response_type=code&redirect_uri={https://cr-urra.github.io/priority-tickets-exports}&client_id={cd2eab47f51f1cbbb873ef116a239bb9c56dc08d4a714f09e27d17da2f5914fd}&scope=tickets:read">
                <button type="button" className="btn btn-primary">Primary</button>
              </a>
              

            </div>
       )
    }
}
