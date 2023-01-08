import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// class App extends Component {
//   state = {
//     firstName: '',
//     message: '',
//     key: '',
//   }

//   handleOnclick = (e) => {
//     //e gives an event object
//     //check the value of e using console.log(e)
//     this.setState({message: 'Welcome to the world of events'})
//   }

//   handleMouseMove = (e) => {
//     this.setState({message: 'mouse is moving'})
//   }

//   handleChange = (e) => {
//     this.setState({firstName: e.target.value, message: e.target.value})
//   }

//   handleKeyPress = (e) => {
//     this.setState({message: `${e.target.value} has been pressed and the keycode is ` + e.charCode})
//   }

//   handleBlur = (e) => {
//     this.setState({message: 'Input field has been blurred'})
//   }

//   handleCopy = (e) => {
//     this.setState({message: "Text don't allowed Copy"})
//   }

//   render () {
//     return (
//       <div className='container'>
//         <h1>Welcome to the world of Events</h1>

//         <button onClick={this.handleOnclick}>Click Me</button>
//         <button onClick={this.handleMouseMove}>Move mouse on me</button>
//         <p onCopy={this.handleCopy}>Check this text</p>
//         <p>{this.state.message}</p>

//         <label htmlFor=''>Test for onKeyPress Event: </label>
//         <input type='text' onBlur={this.handleBlur} />
//       </div>
//     )
    
//   }
// }

class App extends Component {
  state = {
    left: '',
    top: '',
  }
  handleClick = ({style}) => {

  }

  render (){
    return (
      <span className='child'>30 Days with React</span>
    )
  }
}


const root = document.getElementById('root')
ReactDOM.render(<App />, root)