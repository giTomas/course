import React from 'react';
// import Hello from './components/hello';
// import styled from 'styled-components';

// access DOM with refs
class App2 extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = ::this.handleClick;
  }

  handleClick() {
    this.element.textContent = this.element && 'Modified text content';
  }

  render() {
    return (
      <div>
        <div
          // callback is executed immediately after component is mounted or unmounted
          // callback receives underlying DOM element as its argument if mounted if unmounted null
          // USAGE: accessing DOM element
          // DON'T USE: on functional components
          // You can, however, use the ref attribute inside a functional component as
          // long as you refer to a DOM element or a class component
          // but ref must be defined as null in function ( let element = null)
          // see bellow
          ref={(element) => { this.element = element; }}
        >
           Rendered text content
         </div>
        <button onClick={this.handleClick}>Click Me</button>
      </div>
    );
  }
}

const App = () => {
  let element = null;
  function handleClick() {
    element.textContent = element && 'Modified text content';
  }

  return (
    <div>
      <div
        ref={(el) => { element = el; }}
      >
        Rendered text contnet
      </div>
      <button onClick={handleClick}>Click me!</button>
    </div>
  );
};


export default App;
