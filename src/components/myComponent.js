import React from 'react';
import { useState } from "react";

const obj = {
    
           age: 19
    ,
   
    
        city: "Tel-Aviv"
    
    ,
    
        name: "mandy"
  
    ,
   
};

function MyComponent()
{
    const [age, setAge] = useState(0);
    const [name,setName]=useState("None");
    const [city,setCity]=useState("Tel-Aviv");

        var url="https://y7qq3r1n63.execute-api.us-east-1.amazonaws.com/Prod/obj";
        var url1='https://api.github.com/users/hacktivist123/repos';
       const apiUrl = url
       fetch(apiUrl)
         .then((response) => response.json())
         .then((data) => 
         {
            // setColor(da   var c=color;
             console.log('This is your data', data);
           
             setAge(data['age']);
             setName(data['name']);
             setCity(data['city']);
            
         }
         );
   
  
        return  (
            <div>
               <ul>
                   <li>test</li>
                 
               </ul>
             <h1>my Component read from remote age={age} name={name} city={city} </h1>
             </div>
             );
      
     
        
     
}

// class MyComponent extends React.Component {
//     const [color, setColor] = useState("");
//   componentDidMount() {
//      var url="https://y7qq3r1n63.execute-api.us-east-1.amazonaws.com/Prod/obj";
//      var url1='https://api.github.com/users/hacktivist123/repos';
//     const apiUrl = url
//     fetch(apiUrl)
//       .then((response) => response.json())
//       .then((data) => console.log('This is your data', data));
//   }
//   render() {
//     return <h1>my Component has Mounted, Check the browser 'console' </h1>;
//   }
// }
export default MyComponent;