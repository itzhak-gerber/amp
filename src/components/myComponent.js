import React from 'react';

class MyComponent extends React.Component {
  componentDidMount() {
     var url="https://y7qq3r1n63.execute-api.us-east-1.amazonaws.com/Prod/obj";
     var url1='https://api.github.com/users/hacktivist123/repos';
    const apiUrl = url
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => console.log('This is your data', data));
  }
  render() {
    return <h1>my Component has Mounted, Check the browser 'console' </h1>;
  }
}
export default MyComponent;