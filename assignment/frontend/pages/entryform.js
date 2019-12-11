import React from 'react'
import axios from 'axios';

import '../styles/styles.sass'

export default class EntryForm extends React.Component {

  constructor(props) {
    super(props)

    this.state = { email: '', name: '', age: 0, message: ""}

    this.handleEmailChange = this.handleEmailChange.bind(this)
    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleAgeChange = this.handleAgeChange.bind(this)
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
  }

  handleEmailChange(event) {
    this.setState({ email: event.target.value})
  }

  handleNameChange(event) {
    this.setState({ name: event.target.value})
  }

  handleAgeChange(event) {
    this.setState({ age: event.target.value})
  }

  handleFormSubmit(event) {
    event.preventDefault()

    const url = 'http://localhost:8000/entry/'
    const data = {
      email: this.state.email,
      name: this.state.name,
      age: this.state.age
    }

    axios.post(url, data)
    .then(res => this.setState({message: res.statusText}))
    .catch(error => this.setState({message: error.response.statusText}))
  }

  
  render() {
    return (
      <section className="section">
        <div className="container">
          <div className="columns is-mobile is-centered">
            <div className="column is-half-desktop">
              <h1 className="title">Entry Form</h1>
              <form>
                <div className="field">
                  <label className="label">Email</label>
                  <div className="control">
                    <input className="input" type="email" placeholder="Enter your Email..." onChange={this.handleEmailChange} value={this.state.email} />
                  </div>
                </div>
                <div className="field">
                  <label className="label">Name</label>
                  <div className="control">
                    <input className="input" type="text" placeholder="Enter your name..." onChange={this.handleNameChange} value={this.state.name} />
                  </div>
                </div>
                <div className="field">
                  <label className="label">age</label>
                  <div className="control">
                    <input className="input" type="number" placeholder="Enter your age..." onChange={this.handleAgeChange} value={this.state.age} />
                  </div>
                </div>
                <button className="button" onClick={this.handleFormSubmit}>Submit</button>
                <p className="help">{this.state.message}</p>
              </form>
            </div>
          </div>
        </div>
      </section>
    )
  }
}