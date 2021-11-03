import React, { useState, useCallback } from 'react';

import  CDatesRange from './CDatesRange'


function CDatesRangeBar({fetchData})
{
    const [fromDate, setFromDate] = useState(new Date());
    const [toDate, setToDate] = useState(new Date());

    const [lastDate, setLastDate] = useState("01/01/1970");
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

    const shoot = () => {
        fetchData(fromDate,toDate);
        lastDateF();
       // alert("Great Shot!" +fromDate.toDateString()+" "+toDate.toDateString());
    }
    return(
        <table>
  
        <tr>
          <td>from:</td>
          <td> < CDatesRange id="dr1" myFunc={setFrom}/>  </td>
          <td> to: </td>
          <td> < CDatesRange id="dr2"  myFunc={setTo}/>  </td>
          <td><button onClick={shoot}>get data </button></td>

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