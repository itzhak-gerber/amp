import React, { useState } from 'react';
import { setUserSession } from '../Utils/Common';
import { useNavigate } from 'react-router-dom';





function Login(props) {
  
  const [loading, setLoading] = useState(false);
  const username = useFormInput('');
  const password = useFormInput('');
  const [error, setError] = useState(null);

  // handle button click of login form

 

  
  let navigate = useNavigate();




  const handleLogin = () => {

    var url= "https://y7qq3r1n63.execute-api.us-east-1.amazonaws.com/Prod/getMytoken1?name="+username.value+"&password="+password.value;

    fetch(url)
    .then(result => result.json())
    .then((data) => 
    {
      console.log(data);
      let token=data['token'];
    
      setUserSession(token, username.value);
      navigate('/dashboard');
  
     
    } 
    ).catch(error=>
    {
     setError("Something went wrong. Please try again later.");
    });
  

  
 
//}

  //  // let data=" { 'name':"+"'"+username.value+"','password':'"+password.value+"'}";
  //   let a= { 'name': username.value,'password':password.value };
  //   postData('https://y7qq3r1n63.execute-api.us-east-1.amazonaws.com/Prod/getMytoken', a)
  //   .then(data => {
  //   console.log(data); // JSON data parsed by `data.json()` call
  // });
    
   // props.navigate('/dashboard');
    //props.history.push('/dashboard');
  }

  // const handleLogin = () => {
  //   setError(null);
  //   setLoading(true);
  //   axios.post('http://localhost:4000/users/signin', { username: username.value, password: password.value }).then(response => {
  //     setLoading(false);
  //     setUserSession(response.data.token, response.data.user);
  //     props.history.push('/dashboard');
  //   }).catch(error => {
  //     setLoading(false);
  //     if (error.response.status === 401) setError(error.response.data.message);
  //     else setError("Something went wrong. Please try again later.");
  //   });
  // }

  return (
    <div>
      Login<br /><br />
      <div>
        Username<br />
        <input type="text" {...username} autoComplete="new-password" />
      </div>
      <div style={{ marginTop: 10 }}>
        Password<br />
        <input type="password" {...password} autoComplete="new-password" />
      </div>
      {error && <><small style={{ color: 'red' }}>{error}</small><br /></>}<br />
      <input type="button" value={loading ? 'Loading...' : 'Login'} onClick={handleLogin} disabled={loading} /><br />
    
    </div>
  );
}

const useFormInput = initialValue => {
  const [value, setValue] = useState(initialValue);

  const handleChange = e => {
    setValue(e.target.value);
  }
  return {
    value,
    onChange: handleChange
  }
}

export default Login;