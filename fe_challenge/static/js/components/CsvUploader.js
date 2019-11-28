import React from "react";
import ReactDOM from "react-dom";
import CSVReader from "react-csv-reader";
import Table from "./Table";

const handleForce = data => console.log(data);

const papaparseOptions = {
  header: true,
  dynamicTyping: true,
  skipEmptyLines: true,
  transformHeader: header => header.toLowerCase().replace(/\W/g, "_")
};

const getColumns = data => {
  return Object.keys(data[0]).map(key => {
    return {
      Header: key,
      accessor: key
    };
  });
};

export class CsvUploader extends React.Component {
  constructor(props) {
    super(props);
    this.updateTableData = this.updateTableData.bind(this);
    this.state = { data: null };
  }

  updateTableData(data) {
    this.setState({ data: data });
  }
  render() {
    const { data } = this.state;
    let columns;
    let table;
    if (data) {
      columns = getColumns(data);
      table = <Table columns={columns} data={data} />;
    }
    return (
      <div className="container">
        <CSVReader
          cssClass="react-csv-input"
          label="Select CSV"
          onFileLoaded={this.updateTableData}
          parserOptions={papaparseOptions}
        />
        {table}
      </div>
    );
  }
}
