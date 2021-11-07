import React, { useState, useEffect } from 'react';
import {AgGridColumn, AgGridReact} from 'ag-grid-react';
import CDateRangeBar from './CDateRangeBar';
import { getToken } from '../Utils/Common';


import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';


const MyGrid = () => {
      const [rowData, setRowData] = useState([]);
    
      function setFromTo(fromDt,toDT)
        {
            const token=getToken();
          let fromText =fromDt.toISOString().split("T")[0];
          let toText =toDT.toISOString().split("T")[0];
           var url= "https://y7qq3r1n63.execute-api.us-east-1.amazonaws.com/Prod/testgetordersv?from="+fromText+"&to="+toText+"&shopid=1234"+"&token="+ "42853261";

          fetch(url)
          .then(result => result.json())
          .then((data) =>  setRowData(data)) 
        }
    
      
       return (
         <div>
           <div style={{ margin: 20}}>
          
             <CDateRangeBar  fetchData={setFromTo}/>
           </div>
           <div className="ag-theme-alpine" style={{height: 1000, width: 1600}}>
               <AgGridReact
                   rowData={rowData}>
                   <AgGridColumn field="dt" sortable={ true } filter={ true }></AgGridColumn>
                   <AgGridColumn field="orderidi" sortable={ true } filter={ true }></AgGridColumn>
                   <AgGridColumn field="total_price"  sortable={ true } filter={ true }></AgGridColumn>
                   <AgGridColumn field="email" sortable={ true } filter={ true }></AgGridColumn>
                   <AgGridColumn field="source" sortable={ true } filter={ true }></AgGridColumn>
                   <AgGridColumn field="h_ad_id"  sortable={ true } filter={ true }></AgGridColumn>
                   <AgGridColumn field="fbc_id"  sortable={ true } filter={ true }></AgGridColumn>
                 
               </AgGridReact>
           </div>
           </div>
       );
    };
    
    export default MyGrid;
    