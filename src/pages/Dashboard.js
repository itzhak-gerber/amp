import React from 'react';
import  { useState } from 'react';
import { getUser, removeUserSession } from '../Utils/Common';
import {useNavigate ,Routes, Route} from 'react-router-dom';
import MyGrid from '../components/grid';


import Login from './Login';

function Dashboard(props) {

 

 // const [userName, setUserName] = useState("");
 let navigate = useNavigate();
 

  let user = getUser();
  if (user==null)
  {
  
    //setX(false);
  //  handleLogout();
   // navigate('/Login');
    user={"value":"aaaa"};
  }

 // setUserName(user);

  // handle click event of logout button
  
  const handleLogout = () => {
    removeUserSession();
    navigate('/Login');
   // props.history.push('/login');
  }

  //return (
 
      return(
    <div>
      Welcome {user.value}!<br /><br />
      <input type="button" onClick={handleLogout} value="Logout" />
      <MyGrid/>
    </div>
      );
    

}

export default Dashboard;