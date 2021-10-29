import logo from './logo.svg';
import './App.css';

import React from 'react';
import {AgGridColumn, AgGridReact} from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

const App = () => {
   const rowData = [
       {make: "Toyota", model: "Celica", price: 35000},
       {make: "Ford", model: "Mondeo", price: 32000},
       {make: "Porsche", model: "Boxter", price: 72000}
   ];

   return (
       <div className="ag-theme-alpine" style={{height: 400, width: 600}}>
           <AgGridReact
               rowData={rowData}>
               <AgGridColumn field="make"></AgGridColumn>
               <AgGridColumn field="model"></AgGridColumn>
               <AgGridColumn field="price"></AgGridColumn>
           </AgGridReact>
       </div>
   );
};

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <h1>Hello from V3</h1>
//       </header>
//     </div>
//   );
// }


export default App;
