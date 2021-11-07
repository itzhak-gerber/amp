import React, { useState } from 'react';
import { setUserSession } from '../Utils/Common';
import { useNavigate } from 'react-router-dom';


function Login(props) {
  
  const [loading, setLoading] = useState(false);
  const username = useFormInput('');
  const password = useFormInput('');
  const [error, setError] = useState(null);

  // handle button click of login form

  async function postData(url = '', data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }

  
  let navigate = useNavigate();
  const handleLogin = () => {

    const requestOptions = {
      method: 'POST',
      mode: 'cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 'name': username.value,'password':password.value })
  };
  fetch('https://y7qq3r1n63.execute-api.us-east-1.amazonaws.com/Prod/getMytoken', requestOptions)
     .then(response => response.json())
      .then(data =>  
        {
          console.log(data);
        }
        );
//}

  //  // let data=" { 'name':"+"'"+username.value+"','password':'"+password.value+"'}";
  //   let a= { 'name': username.value,'password':password.value };
  //   postData('https://y7qq3r1n63.execute-api.us-east-1.amazonaws.com/Prod/getMytoken', a)
  //   .then(data => {
  //   console.log(data); // JSON data parsed by `data.json()` call
  // });
    setUserSession("1234", username);
    navigate('/dashboard');
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