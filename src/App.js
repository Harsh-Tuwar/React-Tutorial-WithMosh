import React, { Component } from 'react';
import Counters from './components/counters';
import Nav from './components/nav';

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 99 },
      { id: 4, value: 0 }
    ]
  };

  componentDidMount() {
    console.log("App - Did Mount!");
  }

  componentWillUnmount() {
    console.log("App - Component Will Unmount!");
  }

  handelDelete = (counterID) => {
    const counters = this.state.counters.filter(c => c.id !== counterID);
    this.setState({ counters });
  }

  handleReset = () => {
    const counters = this.state.counters.map(c => { c.value = 0; return c; });
    this.setState({ counters });
  }

  handleIncreament = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  }
  render() {
    return (
      <React.Fragment>
        <Nav totalCount={this.state.counters.filter(c => c.value > 0).length}/>
        <main className="container">
          <Counters counters={this.state.counters} onReset={this.handleReset} onIncreament={this.handleIncreament} onDelete={this.handelDelete}></Counters>
        </main>
      </React.Fragment>
    );
  }

}

export default App;
