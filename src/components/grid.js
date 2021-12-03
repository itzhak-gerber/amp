import React, { useState} from 'react';
import {AgGridColumn, AgGridReact} from 'ag-grid-react';
import CDateRangeBar from './CDateRangeBar';





import CExport from './export';



import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';


const MyGrid = () => {
      const [rowData, setRowData] = useState([]);
   
      const sideBar = true; 
    

      function setData(data)
      {
        setRowData(data);
      }
    
   
      
       return (
         <div>
           <div style={{ margin: 20}}>
           <table>
  
        <tr>
          <td>  <CDateRangeBar setData={setData}  /></td>
         
       
           
        
            </tr>
            </table>
           </div>
           <div className="ag-theme-alpine" style={{height: 1000, width: 1600}}>
               <AgGridReact reactUi="true" sideBar={sideBar}
                   rowData={rowData}>
                   <AgGridColumn field="dt" sortable={ true } filter={ true }></AgGridColumn>
                   <AgGridColumn field="orderid" sortable={ true } filter={ true }></AgGridColumn>
                   <AgGridColumn field="total_price"  sortable={ true } filter={ true }></AgGridColumn>
                   <AgGridColumn field="email" sortable={ true } filter={ true }></AgGridColumn>
                   <AgGridColumn field="source" sortable={ true } filter={ true }></AgGridColumn>
                   <AgGridColumn field="tagName"  sortable={ true } filter={ true }></AgGridColumn>
                   <AgGridColumn field="tagValue"  sortable={ true } filter={ true }></AgGridColumn>
                   <AgGridColumn field="setName"  sortable={ true } filter={ true }></AgGridColumn>
                   <AgGridColumn field="setValue"  sortable={ true } filter={ true }></AgGridColumn>
                 
               </AgGridReact>
           </div>
           </div>
       );
    };
    
    export default MyGrid;
    