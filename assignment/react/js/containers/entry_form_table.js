import React, { Component } from 'react';
import EntryForm from '../components/entry_form.js'
import EntryTable from '../components/entry_table.js'

class EntryFormTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
        refresh_table: false
    }

  }

  refreshTable(){
       const state = this.state;
       this.setState({refresh_table: !state.refresh_table});
  }
  render() {
    return (
      <div>
      <EntryForm refreshTable={this.refreshTable.bind(this)} />
      <EntryTable refreshTable={this.state.refresh_table} />
      </div>
    );
  }
}

export default EntryFormTable;