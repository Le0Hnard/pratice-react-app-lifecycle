import React, { Component } from 'react';
// import Message from './components/Message';
// import List from './components/List';
// import ExternalCounter from './components/ExternalCounter';
// import HookMessage from './components/HookMessage';
import DirectionDisplay from './components/DirectionDisplay';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // counterLeft: 0,
      // counterRight: 0
      counter: 100
    }
  }

  // incrementCounter = (counter) => {
  //   if(counter === "left") {
  //     this.setState({ counterLeft: this.state.counterLeft + 1 });
  //   } else {
  //     this.setState({ counterRight: this.state.counterRight + 1 });
  //   }
  // }

  // handleChange = () => {
  //   this.setState({ showMessage: !this.state.showMessage });
  // }

  changeCounter = (val) => {
    this.setState({ counter: this.state.counter + val });
  }

  render() {
    console.log("Render App Component");
    return (
      <div className="container text-center">
        {/* <div className="row p-2">
          <div className="col-6">
            <Message message={ `Left: ${this.state.counterLeft}` } callback={ () => this.incrementCounter("left") } text="Increment Left Counter" />
          </div>
          <div className="col-6">
          <Message message={ `Right: ${this.state.counterRight}` } callback={ () => this.incrementCounter("right") } text="Increment Right Counter" />
          </div>
        </div> */}

        <DirectionDisplay value={ this.state.counter } />
        <div className="text-center">
          <button className="btn btn-primary m-1" onClick={ () => this.changeCounter(-1) }>Decrease</button>
          <button className="btn btn-primary m-1" onClick={ () => this.changeCounter(1) }>Increase</button>
        </div>
      </div>
    );
  }
}
