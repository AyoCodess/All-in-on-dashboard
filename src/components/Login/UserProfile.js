import React from 'react';

function UserProfile({ user }) {
  return (
    <div>
      <dov>Profile Details</dov>
      <img src={user.picture} alt='user profile pic' />
      <h2>{user.name}</h2>
      <p>{user.email}</p>
    </div>
  );
}

export default UserProfile;
