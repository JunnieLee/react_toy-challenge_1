import React, { Component } from 'react';
import './App.css';

import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {

  state = {
    username: 'Junnie'
  }

  changeUsernameHandler = (event) => {
    this.setState({username: event.target.value});
  }

  render() {

const InlineStyle = {
  backgroundColor: '#eee',
  font: 'inherit',
  color: 'blue',
  border: '1px solid blue',
  padding: '8px',
  }; // Inline styling
        // 이렇게 하면 뭔가 간편해 보이긴 한데, css의 full power를 누리진 못함. 좀 제한적임.

    return (

      <div className="App">

      <h1 style={InlineStyle}>Toy_Chanllenge page</h1>
      <br />

        <UserInput
          changed={this.changeUsernameHandler} {/* 메소드 쌩으로 호출할때 () 뒤에 절대 붙이지 말기! 불이면 렌더링 할때 자동으로 호출됨*/}
          username={this.state.username} 
        />
        <br />

        <UserOutput username={this.state.username} />
        <br />
        <UserOutput username={this.state.username} />

      </div>
    );
  }
}

export default App;
