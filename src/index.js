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
  posi = {
    top: '',
    left:'',
  }



  handleChange = (e) => {
    let status1 = (Math.random() * 30) + 'rem'
    let status2 = (Math.random() * 20) + 'rem'
    e.target.style.position = 'relative'
    e.target.style.top = status1
    e.target.style.left = status2

  }

  render () {
    return (
        <span className='container' onMouseEnter={this.handleChange}>Change</span>
    )
  }
}


const root = document.getElementById('root')
ReactDOM.render(<App />, root)