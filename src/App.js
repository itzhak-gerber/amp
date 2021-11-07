import logo from './logo.svg';
import './App.css';

import React, { useState, useEffect } from 'react';
import {AgGridColumn, AgGridReact} from 'ag-grid-react';
import CDateRangeBar from './components/CDateRangeBar';


import { BrowserRouter, Routes, Route,Router,Switch, NavLink ,useNavigate} from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';

import PrivateRoute from './Utils/PrivateRoute';
import PublicRoute from './Utils/PublicRoute';




import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

function App() {
  
  return (
    
    <div className="App">
    <BrowserRouter>
        <div>
          <div className="header">
            <NavLink exact activeClassName="active" to="/">Home</NavLink>
            <NavLink activeClassName="active" to="/login">Login</NavLink><small>(Access without token only)</small>
            <NavLink activeClassName="active" to="/dashboard">Dashboard</NavLink><small>(Access with token only)</small>
          </div>
          <div className="content">
            <Routes>
              <Route exact path="/" element={<Home/>} />
              <PublicRoute  path="/login" element={<Login/>} />
              <Route  path="/dashboard" element={ <PrivateRoute><Dashboard/></PrivateRoute>} />
            </Routes>
          </div>
        </div>
        </BrowserRouter>
    </div>
  
  );
}

// const App = () => {
//   const [rowData, setRowData] = useState([]);

//   function setFromTo(fromDt,toDT)
//     {
//       let fromText =fromDt.toISOString().split("T")[0];
//       let toText =toDT.toISOString().split("T")[0];
//        var url= "https://y7qq3r1n63.execute-api.us-east-1.amazonaws.com/Prod/testgetordersv?from="+fromText+"&to="+toText+"&shopid=1234"
//       fetch(url)
//       .then(result => result.json())
//       .then((data) =>  setRowData(data)) 
//     }

  
//    return (
//      <div>
//        <div style={{ margin: 20}}>
      
//          <CDateRangeBar  fetchData={setFromTo}/>
//        </div>
//        <div className="ag-theme-alpine" style={{height: 1000, width: 1600}}>
//            <AgGridReact
//                rowData={rowData}>
//                <AgGridColumn field="dt" sortable={ true } filter={ true }></AgGridColumn>
//                <AgGridColumn field="orderidi" sortable={ true } filter={ true }></AgGridColumn>
//                <AgGridColumn field="total_price"  sortable={ true } filter={ true }></AgGridColumn>
//                <AgGridColumn field="email" sortable={ true } filter={ true }></AgGridColumn>
//                <AgGridColumn field="source" sortable={ true } filter={ true }></AgGridColumn>
//                <AgGridColumn field="h_ad_id"  sortable={ true } filter={ true }></AgGridColumn>
//                <AgGridColumn field="fbc_id"  sortable={ true } filter={ true }></AgGridColumn>
             
//            </AgGridReact>
//        </div>
//        </div>
//    );
// };

export default App;
