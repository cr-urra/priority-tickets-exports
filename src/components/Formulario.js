import React, { Component } from 'react'
import axios from 'axios'

export default class formulario extends Component {

  state = {
    url: "https://priority.zendesk.com/api/v2/groups.json",
    user: "victor.olguin@priority.cl",
    pwd: "Pr10r1ty2019"
  }

  componentDidMount = async () => {
    const auth = {
      user: this.state.user, 
      pwd: this.state.pwd
    }
    let r = {auth}
    console.log(r);
    const res = await axios.get(this.state.url, {auth})
    console.log(res);
  }

  render() {

      return (
          <div>
              
            </div>
       )
    }
}
