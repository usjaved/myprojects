import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './index23.html';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {results: []}
    
}

getMoviesFromApiAsync() {
  return fetch("https://darwin-api.sparkcognition.com/v1/auth/login/user", {
    method: 'POST',
    headers: new Headers({
               'Content-Type': 'application/x-www-form-urlencoded', // <-- Specifying the Content-Type
      }),
    body: "username=cybersoft_user&pass1=tEJx739+EMs" // <-- Post parameters
  })
  .then((response) => response.text())
  .then((responseText) => {
    alert(responseText);
  })
  .catch((error) => {
      console.error(error);
  });
}

  callApi(){
    // Github fetch library : https://github.com/github/fetch
    // Call the API page
    // fetch('https://darwin-api.sparkcognition.com/v1/auth/login')
    // .then((result) => {
    //   // Get the result
    //   // If we want text, call result.text()
    //   return result.json();
    // }).then((jsonResult) => {
    //   // Do something with the result
    //   this.setState({ results: jsonResult});
     
    //   console.log(jsonResult);
    // })
    const formData = new FormData()
   formData.append('username', 'cybersoft_user');
   formData.append('pass1', 'U7D0c/Jj+EQ');
    fetch("https://darwin-api.sparkcognition.com/v1/auth/login/user", {
    method: 'POST',
    // headers: new Headers({
    //            'Content-Type': 'multipart/form-data', // <-- Specifying the Content-Type
    //   }),
    body: formData
  // <-- Post parameters
  })
  .then((response) => response.text())
  .then((responseText) => {
    alert(responseText);
  })
  .catch((error) => {
      console.error(error);
  });
  }
  
  render() {
    return <div>
      <h2>
        {this.state.results.message}
      </h2>;
            <button onClick={() => this.callApi()}>
        Click here to call API
      </button>
    </div>;
  }
  
}

  


export default App;
