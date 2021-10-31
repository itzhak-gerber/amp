import React, { useState, useCallback } from 'react';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";


 
     
function CDatesRange({myFunc})
 {
    const [startDate, setStartDate] = useState(new Date());
    return (
  
        // <DatePicker   selected={startDate} onChange={(date) => setStartDate(date)} />
        <DatePicker   selected={startDate} onChange={(date) =>
            { 
                myFunc(date);
                setStartDate(date);
            }
            } />


     
    );
};
export default CDatesRange;