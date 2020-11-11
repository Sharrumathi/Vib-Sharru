import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import TablePagination from '@material-ui/core/TablePagination';
import Pagination from "react-js-pagination";
// import 'bootstrap-less';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'taskName', headerName: 'TASK NAME', width: 130 },
  { field: 'lob', headerName: 'LOB', width: 130 },
  {
    field: 'subTask',
    headerName: 'SUB TASK',
    // type: 'number',
    width: 130,
  },
  {
    field: 'step',
    headerName: 'STEP',
    // description: 'This column has a value getter and is not sortable.',
    // sortable: false,
    width: 130,
//     valueGetter: (params) =>
//       `${params.getValue('firstName') || ''} ${params.getValue('lastName') || ''}`,
  },
//   {
//     field: 'subTask',
//     headerName: 'SUB TASK',
//     width: 130,
//   },
  {
    field: 'dueDate',
    headerName: 'DUE DATE',
    width: 130,
  }
];

const rows = [
  { id: 1, taskName: 'Snow', lob: 'aaa', subTask: 'Jon', step: 35, dueDate: 'www' },
  { id: 1, taskName: 'Snow', lob: 'aaa', subTask: 'Jon', step: 35, dueDate: 'www' },
  { id: 1, taskName: 'Snow', lob: 'aaa', subTask: 'Jon', step: 35, dueDate: 'www' },
  { id: 1, taskName: 'Snow', lob: 'aaa', subTask: 'Jon', step: 35, dueDate: 'www' },
  { id: 1, taskName: 'Snow', lob: 'aaa', subTask: 'Jon', step: 35, dueDate: 'www' },
  { id: 1, taskName: 'Snow', lob: 'aaa', subTask: 'Jon', step: 35, dueDate: 'www' },
//   { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
//   { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
//   { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
//   { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
//   { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
//   { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
//   { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
//   { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

const sampleJson = [
    {
      "id": 1,
      "taskName": 'aaa',
      "lob": 'aaa', 
      "subTask": 'aaa', 
      "step": 35, 
      "dueDate": 'aaa'
    },
    {
        "id": 2,
        "taskName": 'bbb',
        "lob": 'bbb', 
        "subTask": 'bbb', 
        "step": 35, 
        "dueDate": 'bbb'
    },
    {
        "id": 3,
        "taskName": 'ccc',
        "lob": 'ccc', 
        "subTask": 'ccc', 
        "step": 35, 
        "dueDate": 'ccc'
      },
      {
        "id": 4,
        "taskName": 'ddd',
        "lob": 'ddd', 
        "subTask": 'ddd', 
        "step": 35, 
        "dueDate": 'ddd'
      },
      {
        "id": 5,
        "taskName": 'eee',
        "lob": 'eee', 
        "subTask": 'eee', 
        "step": 35, 
        "dueDate": 'eee'
      },
      {
        "id": 6,
        "taskName": 'ddd',
        "lob": 'ddd', 
        "subTask": 'ddd', 
        "step": 35, 
        "dueDate": 'ddd'
      },
  ]

  

  class DataTable extends React.Component {

    state = {
        data: [],
        activePage: 1
      };

    handlePageChange = pageNumber => {
        console.log(`active page is ${pageNumber}`);
        this.setState({
            data: sampleJson
        })
        this.setState({ activePage: pageNumber });
      };
      

    render() {

        const allData = sampleJson.map(item => {
            return item
            // return <li key={item.id}>{item.title}</li>;
          });

          console.log('alladata', allData)
        return(
        <div>
        <div style={{ height: 400, width: '75%' }}>
          <DataGrid rows={sampleJson} columns={columns} pageSize={3} checkboxSelection pagination />
         
        </div>
        <Pagination
           activePage={this.state.activePage}
           itemsCountPerPage={2}
           totalItemsCount={6}
           pageRangeDisplayed={5}
           onChange={this.handlePageChange}
        />
    
        <TablePagination />
        </div>
        )
    }
  }

  export default DataTable;

// export default function DataTable() {

//     const count = 2
//     console.log('sample json', sampleJson)
//   return (
//       <div>
//     <div style={{ height: 400, width: '75%' }}>
//       <DataGrid rows={rows} columns={columns} pageSize={count} checkboxSelection />
     
//     </div>
//     <Pagination
//        activePage={1}
//        itemsCountPerPage={count}
//        totalItemsCount={450}
//        pageRangeDisplayed={5}
//        onChange={handlePageChange}
//     />

//     <TablePagination />
//     </div>
//   );
// }
