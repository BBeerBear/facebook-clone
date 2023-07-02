import React from 'react';

export default function Contact({ user }) {
  return (
    <div className='contact hover1'>
      <div className='circle_icon'>
        <img src={user?.picture} alt='' />
      </div>
      <span>
        {user?.first_name} {user?.last_name}
      </span>
    </div>
  );
}
