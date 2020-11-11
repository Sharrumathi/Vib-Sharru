import React from 'react';
import DataTable from './BSTable';
import NewTable from './NewTable';
class Table extends React.Component {
  constructor(props) {
    super(props);
  };
  render() {
    return (

      <div>
        <NewTable />
      </div>
    );
  }
};

export default Table;





{/* <section className="mt-4 container-fluid">
<div className="row">
  <div className="col-sm-12">
    <div className="box-row">
      <div className="card">

        <h1 className="sec-header float-left mt-3 ml-3">Latest Orders</h1>
        <div className="card-body gatepass-saveoutput">
        MyComponent
          <div className="reports">
            <div style={{overflowX:'auto'}} className="container">

              <table className="table">
                <thead>
                  <tr>
                    <th>Merchant Name</th>
                    <th>Order Date</th>
                    <th>Products</th>
                    <th>Order ID</th>
                    <th>Amount</th>
                    <th>Available Balance</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>

                  {/* {tableData.length > 0 && tableData.map((dt, index) => { */}
//                     return (
//                       <tr>
//                         <td><Link to={`view-merchants/${dt.merchantId}`}>{dt.merchentName}</Link></td>
//                         <td>aaa</td>
//                         <td>vvv</td>
//                         <td>zzzz</td>
//                         <td>rrrr</td>
//                         <td>rrrrr</td>
//                         <td>aaaaaa</td>
//                         <td>yyyyyyyy</td>
//                       </tr>
//                     )
//                   {/* })} */}
//                   {
//                     tableData.length === 0 &&
//                     <tr>
//                       <td colSpan='5' className="noData">No data found</td>
//                     </tr>
//                   }

//                 </tbody>
//               </table>
//             </div>

//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>
// </section> */}