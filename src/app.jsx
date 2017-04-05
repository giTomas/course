import React, { PropTypes } from 'react';
// import Hello from './components/hello';
// import styled from 'styled-components';

// list
const allSpeakers = ['Scott Hanselman', 'John Papa', 'Scott Guthrie', 'Dan Wahlin', 'Debora Kurata', 'Zoiner Tejada', 'Scott Allen', 'Elijah Manor', 'Ward Bell', 'Todd Anglin', 'Saron Yitbare', 'Scott Hunter'];

// possible refactor with compose, curry??
const SpeakerListItem = ({ speaker, selected, onClick }) => {
  // console.log(selected === speaker)
  const itemOnClick = () => onClick(speaker);
  const content = selected === speaker ? <b style={{ fontWeight: 'bold' }}><i style={{ fontStyle: 'italic' }}>{speaker}</i></b> : speaker;
  return <li onClick={itemOnClick}>{content}</li>;
};

SpeakerListItem.propTypes = {
  speaker: PropTypes.string.isRequired,
  // selected: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { speakers: allSpeakers, selectedSpeaker: null };

    this.handleSort = ::this.handleSort;
    this.handleScotts = ::this.handleScotts;
    this.handleReset = ::this.handleReset;
    this.handleSelected = ::this.handleSelected;
  }

  handleSort() {
    this.setState({ speakers: this.state.speakers.slice().sort() });
  }

  handleScotts() {
    this.setState({ speakers: this.state.speakers.filter(name => name.startsWith('Scott')) });
  }

  handleReset() {
    this.setState({ speakers: allSpeakers, selectedSpeaker: null });
  }

  handleSelected(speaker) {
    this.setState({ selectedSpeaker: speaker });
  }

  render() {
    const { speakers, selectedSpeaker } = this.state;
    const speakersListItems = speakers.map(speaker => (
      <SpeakerListItem
        key={speaker}
        speaker={speaker}
        selected={selectedSpeaker}
        onClick={this.handleSelected}
      />
    ));

    return (
      <div>
        <button onClick={this.handleSort}>Sort List</button>
        <button onClick={this.handleScotts}>Scotts Only</button>
        <button onClick={this.handleReset}>Reset List</button>
        <ul>
          {speakersListItems}
        </ul>
      </div>
    );
  }
}

export default App;
