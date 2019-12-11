import React from 'react';
import axios from 'axios';
import { withRouter } from 'next/router'
import Papa from 'papaparse';

import '../styles/styles.sass'

class CSVViewer extends React.Component {
  static async getInitialProps () {
    return {}
  }

  constructor(props) {
    super(props)
    console.log(props)
    this.state = {data: [], currentCSVFILEView: 1}
    
    this.updateData = this.updateData.bind(this)
    this.changeStatePlease = this.changeStatePlease.bind(this)
  }
  
  componentDidMount() {
    console.log("This comesfromchidl", this.state)
    axios.get('http://localhost:8000/upload/?id=' + this.state.currentCSVFILEView)
      .then(response => {
        console.log(response.data[0].csvfile)
        Papa.parse(response.data[0].csvfile, {
          download: true,
          complete: this.updateData
        })
      })
  }

  updateData(result) {
    const data = result.data
    this.setState({csvdata: data})
  }

  changeStatePlease(pk) {
    this.setState({currentCSVFILEView: pk})

    axios.get('http://localhost:8000/upload/?id=' + this.state.currentCSVFILEView)
    .then(response => {
      console.log(response.data[0].csvfile)
      Papa.parse(response.data[0].csvfile, {
        download: true,
        complete: this.updateData
      })
    })
  }

  render() {
    if (this.state.csvdata) {
      var tableHeader = <TableHeader key={this.state.csvdata[0]} item={this.state.csvdata[0]} />
      var tableBody = this.state.csvdata.map((item, index) => (
        <TableBody key={index} item={item} />
      ))
    } else {
      var tableHeader = <TableHeader />
      var tableBody = <TableBody />
    }
    return (
      <div className="csvviewer">
        <section className="section">
          <div className="container">
            <h1 className="title">List Area</h1>
            <ShowUploadedCSVFiles currentState={this.changeStatePlease} />
            <br />
            <table className="table is-bordered is-striped is-fullwidth">
              <thead>
                {tableHeader}
              </thead>
              <tbody>
                {tableBody}
              </tbody>
            </table>

          </div>
        </section>
      </div>
    )
  }   
}

class TableHeader extends React.Component  {
  constructor(props) {
    super(props)
  }
  render() {
    if (this.props.item) {
      return (
        <tr>{this.props.item.map((entry, index) => (
          <TableHeaderEntry key={index} entry={entry} />
        ))}</tr>
      )
    } else {
      return <tr><td>Loading...</td></tr>
    }
  }
}

function TableHeaderEntry(props) {
  return (
    <th key={props}>{props.entry}</th>
  )
}


class TableBody extends React.Component {
  render() {
    if (this.props.item) {
      return (
        <tr>{this.props.item.map((entry, index) => (
          <TableBodyEntry key={index} entry={entry} />
        ))}</tr>
      )
    } else {
      return <tr><td>Loading...</td></tr>
    }
  }
}

function TableBodyEntry(props) {
  return (
    <td key={props}>{props.entry}</td>
  )
}

class ShowUploadedCSVFiles extends React.Component {
  constructor() {
    super() 
    this.state = {csvfiles: []}

    this.viewCSVFileitem = this.viewCSVFileitem.bind(this)
  }
  componentDidMount() {
    axios.get('http://localhost:8000/upload/')
      .then((response) => {
        this.setState({csvfiles: response.data})
      })
  }

  viewCSVFileitem(pk) {
    this.props.currentState(pk)
  }
   render() {
    return (
      <div>
          {this.state.csvfiles.map((item, index) => (
            <p key={index} className="subtitle">{item.csvfile} <a className="button is-small" onClick={() => this.viewCSVFileitem(item.id)}>View</a></p>
          ))}
      </div>
    )
  }
}

export default withRouter(CSVViewer)