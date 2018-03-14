import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
          name: 'Elizabeth',
          city: 'Ames',
    }
  };
    this.handleChange = this.handleChange.bind(this);


  }

  handleChange(event) {
    console.log(event.target.value);
   
    const name = event.target.name;

   if (name === 'person') {
    this.setState( {user: {...this.state.user, name: event.target.value}});
   }

   else {
     console.log(event.target.value);
     this.setState({ user: { ...this.state.user, city: event.target.value } });

   }

  }

  // taco(event) {
  //   console.log(event.target.value);
  //   this.setState({ user: { ...this.state.user, city: event.target.value } });

  // }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <input name="person"  onChange={this.handleChange}/>
        <input name="city" onChange={this.handleChange}/>
       <p>{this.state.user.name} is from {this.state.user.city}</p>
      </div>
    );
  }
}

export default App;
