import React from 'react'
import axios from 'axios';

import '../styles/styles.sass'

export default class EntryForm extends React.Component {

  constructor(props) {
    super(props)

    this.state = { data: []}
  }

  componentDidMount() {
    axios.get('http://localhost:8000/entry/')
    .then(res => this.setState({data: res.data}))
  }

  render() {
    return (
      <section className="section">
        <div className="container">
          <div className="columns is-mobile is-centered">
            <div className="column is-half-desktop">
              <h1 className="title">Entry Viewer</h1>
              {this.state.data.map(item => (
                <div className="box" key={Math.random()}>
                  <strong>Name:</strong><p className="title is-4">{item.name}</p>
                  <strong>Email:</strong><p className="title is-5">{item.email}</p>
                  <strong>Age:</strong><p className="title is-6">{item.age}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    )
  }
}
