import React, { PropTypes } from 'react';
// import Hello from './components/hello';
// import styled from 'styled-components';


//composition
const ProfilePic = ({ username }) => (
  <img src={`https://photo.fb.com/'${username}`} alt={username} />
);

const ProfileLink = ({ username }) => (
  <a href={`https://www.fb.com//${username}`}>
    {username.replace('.', ' ')}
  </a>
);

ProfilePic.propTypes = {
  username: PropTypes.string.isRequired,
};

ProfileLink.propTypes = {
  username: PropTypes.string.isRequired,
};

const username = 'tomas.kosegi';

const App = () => (
  <div>
    <ProfilePic username={username} />
    <ProfileLink username={username} />
  </div>
);

export default App;
