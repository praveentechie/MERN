import React, { Component }   from 'react';
import {
  BootstrapTable,
  TableHeaderColumn
}                             from 'react-bootstrap-table';
import '../css/react-bootstrap-table.min.css';
import '../css/table.scss';

export default class Table extends Component {
  constructor(props) {
    super(props);
  }
  priceFormatter(cell, row){
    return <span><i className="fa fa-plug"></i> {cell}</span>;
  }
  render() {
    var products = [{
      id: 1,
      name: "Item name 1",
      price: 100
  },{
      id: 2,
      name: "Item name 2",
      price: 150
  }];
    return (
      <div className='table'>
      <BootstrapTable data={products} striped={true} hover={true}>
        <TableHeaderColumn dataField="id" isKey={true} dataAlign="center" dataSort={true}>Product ID</TableHeaderColumn>
        <TableHeaderColumn dataField="name" dataSort={true}>Product Name</TableHeaderColumn>
        <TableHeaderColumn dataField="price" dataFormat={this.priceFormatter}>Product Price</TableHeaderColumn>
      </BootstrapTable>
      </div>
    );
  }
}
