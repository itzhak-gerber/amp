import React, { useState, useCallback } from 'react';

import  CDatesRange from './CDatesRange'


function CDatesRangeBar({fetchData})
{
    const [fromDate, setFromDate] = useState(new Date());
    const [toDate, setToDate] = useState(new Date());

     function setFrom(dt)
    {
        setFromDate(dt);
     }
     function setTo(dt)
    {
        setToDate(dt);
     }

    const shoot = () => {
        fetchData(fromDate,toDate);
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
       
      </table>

    );
}

export default CDatesRangeBar;