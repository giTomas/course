import React, { PropTypes } from 'react';
// import Hello from './components/hello';
// import styled from 'styled-components';


//composition
const ProfilePic = ({ username }) => (
  <img src={`https://photo.fb.com/'${username}`} alt={username} />
);

const ProfileLink = ({ username }) => (
  <a href={`https://www.github.com//${username}`}>
    {username.replace('.', ' ')}
  </a>
);

ProfilePic.propTypes = {
  username: PropTypes.string.isRequired,
};

ProfileLink.propTypes = {
  username: PropTypes.string.isRequired,
};

const USERDATA = {
  'tomas.kosegi'
};

const Avatar = ({USER_DATA}) => (
  <div>
    <ProfilePic imageUrl={USER_DATA.username} />
    <ProfileName name={USER_DATA.name} />
    <ProfileLink username={USER_DATA.username} />
  </div>
);

const App = () => (
  <Avatar USER_DATA={USERDATA} />
);

export default App;
