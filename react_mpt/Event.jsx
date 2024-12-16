import React, { Component } from 'react';
import Button from './components/Button';  // Ensure this component exists

class Event extends Component {
  state = {
    name: '',
    count: 0,
  };

  handleClick = () => {
    this.setState({ count: this.state.count + 1 });
  };

  handleChange = (event) => {
    this.setState({ name: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    alert('Form submitted with name: ${this.state.name}');
  };

  render() {
    return (
      <div className="App">
        <h1>React Event Handling</h1>
        <Button onClick={this.handleClick} count={this.state.count} />
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.name}
            onChange={this.handleChange}
            placeholder="Enter your name"
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Event;
