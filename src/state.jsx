import React from 'react';
// import Hello from './components/hello';
// import styled from 'styled-components';


const its = ['lolo', 'trolo', 'brolo', 'molo'];

const styles = {
  listGroup: {
    fontFamily: "'Istok Web' sans-serif",
  },
  removeItem: {
    border: '1px solid blue',
    margin: '0.5em',
  },
};

// composition
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [...its],
    };

    this.remove = ::this.remove;
  }

  remove(index) {
    const newState = this.state.items;
    newState.splice(index, 1);
    this.setState({
      items: newState,
    });
  }

  render() {
    const listItems = this.state.items.map((item, index) => (
      <li
        style={styles.listGroup}
        key={index.toString()}
      >
        <button
          style={styles.removeItem}
          onClick={() => this.remove(index)}
        >
          <span>
            {item}
          </span>
        </button>
      </li>
    ));

    return (
      <ul>
        {listItems}
      </ul>
    );
  }
}

export default App;
