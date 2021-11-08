import React, { useState, useCallback } from 'react';

import  CDatesRange from './CDatesRange'

import { getToken } from '../Utils/Common';

import CExport from './export';


function CDatesRangeBar({setData},{fetchData})
{
    const [rowData, setRowData] = useState([]);
    const [fromDate, setFromDate] = useState(new Date());
    const [toDate, setToDate] = useState(new Date());

    const [lastDate, setLastDate] = useState("01/01/1971");
    const [lastOrder, setLastOrder] = useState("0");

     function setFrom(dt)
    {
        setFromDate(dt);
     }
     function setTo(dt)
    {
        setToDate(dt);
     }

    

     function lastDateF()
     {
        var url= "https://y7qq3r1n63.execute-api.us-east-1.amazonaws.com/Prod/lastUpdatedOrder"
        fetch(url)
        .then(result => result.json())
        .then((data) => 
        {
             setLastDate(data['dt']);
             setLastOrder(data['orderidi'])

        })
     }


     function setGridData(fromDt,toDT)
     {
         const token=getToken();
       let fromText =fromDt.toISOString().split("T")[0];
       let toText =toDT.toISOString().split("T")[0];
        var url= "https://y7qq3r1n63.execute-api.us-east-1.amazonaws.com/Prod/testgetordersv?from="+fromText+"&to="+toText+"&shopid=1234"+"&token="+ "42853261";

       fetch(url)
       .then(result => result.json())
       .then((data) =>
        {
            setData(data);
             setRowData(data);
         
         

         }) 
     }

    

    const shoot = () => {
     
        setGridData(fromDate,toDate);
        lastDateF();
  
    }
    return(
        <table>
  
        <tr>
          <td>from:</td>
          <td> < CDatesRange id="dr1" myFunc={setFrom}/>  </td>
          <td> to: </td>
          <td> < CDatesRange id="dr2"  myFunc={setTo}/>  </td>
          <td style={{paddingLeft: "10px"}}><button  onClick={shoot}>get data </button></td>
          <td style={{paddingLeft: "10px"}}><CExport  rowData={rowData}/></td>
         

        </tr>
        <tr>
            <td>last Update:</td>
            <td><p>{lastDate}</p></td>
            <td>last update order:</td>
            <td><p>{lastOrder}</p></td>
        </tr>
       
      </table>

    );
}

export default CDatesRangeBar;