import React, { PropTypes } from 'react';
// import Hello from './components/hello';
// import styled from 'styled-components';

const Button = ({ buttonText, toggle, highlight }) => (
  <button
    onClick={toggle}
    // if return undefinned(?) throws error, then use {}
    style={highlight ? { border: '1px solid blue' } : { }}
    // style={ highlight && { border: '1px solid blue'}}
  >
    {buttonText}
  </button>
);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      highlight: false,
      buttonText: 'Add Highlight',
    };

    this.handleToggleHighlight = ::this.handleToggleHighlight;
  }
  // this is rather imperative code
  handleToggleHighlight() {
    this.setState({
      highlight: !this.state.highlight,
      buttonText: this.state.buttonText === 'Add Highlight'
        ? 'Remove Highlight'
        : 'Add Highlight',
    });
  }
// reac == declarative mostly for components
  render() {
    return (
      <Button
        buttonText={this.state.buttonText}
        toggle={this.handleToggleHighlight}
        highlight={this.state.highlight}
      />
    );
  }
}
Button.propTypes = {
  buttonText: PropTypes.string.isRequired,
  toggle: PropTypes.func.isRequired,
  highlight: PropTypes.bool.isRequired,
};

export default App;
