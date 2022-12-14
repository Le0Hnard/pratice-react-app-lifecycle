import React, { Component } from 'react';
import Message from './components/Message';
import List from './components/List';
import ExternalCounter from './components/ExternalCounter';
import HookMessage from './components/HookMessage';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      showMessage: true
    }
  }

  incrementCounter = () => {
    this.setState({ counter: this.state.counter + 1 });
  }

  handleChange = () => {
    this.setState({ showMessage: !this.state.showMessage });
  }

  render() {
    console.log("Render App Component");
    return (
      <div className="container text-center">
        <div className="row p-2">
          <div className="col-4">
            <div className="form-check">
              <input type="checkbox" className="form check-input" checked={ this.state.showMessage } onChange={ this.handleChange } />
              <label className="form-check-label">Show</label>
            </div>
            {
              this.state.showMessage && 
              <div>
                <Message message={ `Counter: ${this.state.counter}` } callback={ this.incrementCounter } text="Increment Counter" />
                <HookMessage message={ `Counter: ${this.state.counter}` } callback={ this.incrementCounter } text="Increment Counter" />
              </div>
            }
          </div>
          <div className="col-4">
            <List />
          </div>
          <div className="col-4">
            <ExternalCounter />
          </div>
        </div>
      </div>
    );
  }
}
