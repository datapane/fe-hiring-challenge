import React, { Component } from 'react';

const Table = ({ response }) => {
  return (
    <table className='table table-responsive'>
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        { (response.length > 0) ? response.map((response, index) => {
           return (
            <tr>
              <td>{ response.name }</td>
              <td>{ response.age }</td>
              <td>{ response.email }</td>
            </tr>
          )
         }) : <tr><td colSpan="5">Loading...</td></tr> }
      </tbody>
    </table>
  );
}

class EntryTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      response: [],
      refresh_table: this.props.refreshTable
    }
  }

  componentWillReceiveProps(props) {
    this.setState({ refresh_table: props.refreshTable});
    this.fetchResponse();
  }

  componentDidMount(){
    this.fetchResponse();
  }

  fetchResponse(){
  const table = this;
  fetch('/api/entry/')
  .then(function(response) {
    return response.json();
  })
  .then(function(response) {
    table.setState({response: response});
  })
  .catch(function(error) {
    console.log('Request failed', error)
  });
  }

  render() {
       return( <Table response={ this.state.response } />);
  }
}

export default EntryTable;