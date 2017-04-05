import React from 'react';
// import Hello from './components/hello';
// import styled from 'styled-components';

// list

const allSpeakers = ['Scott Hanselman', 'John Papa', 'Scott Guthrie', 'Dan Wahlin', 'Debora Kurata', 'Zoiner Tejada', 'Scott Allen', 'Elijah Manor', 'Ward Bell', 'Todd Anglin', 'Saron Yitbare', 'Scott Hunter'];

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { speakers: allSpeakers };

    this.handleSort = ::this.handleSort;
    this.handleScotts = ::this.handleScotts;
    this.handleReset = ::this.handleReset;
  }

  handleSort() {
    this.setState({ speakers: this.state.speakers.slice().sort() });
  }

  handleScotts() {
    this.setState({ speakers: this.state.speakers.filter(name => name.startsWith('Scott')) });
  }

  handleReset() {
    this.setState({ speakers: allSpeakers });
  }

  render() {
    const { speakers } = this.state;

    const listItems = speakers.map(speaker => (
      <li key={speaker}>{speaker}</li>
    ));

    return (
      <div>
        <button onClick={this.handleSort}>Sort List</button>
        <button onClick={this.handleScotts}>Scotts Only</button>
        <button onClick={this.handleReset}>Reset List</button>
        <ul>
          {listItems}
        </ul>
      </div>
    );
  }
}

export default App;
