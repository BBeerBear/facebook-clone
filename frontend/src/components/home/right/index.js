import React from 'react';
import { Dots, NewRoom, Search } from '../../../svg';
import '../style.css';
import Contact from './Contact';

export default function RightHome({ user }) {
  const color = '#65676b';
  return (
    <div className='right_home'>
      <div className='heading'>Sponsered</div>
      <div className='splitter'></div>
      <div className='contacts_wrap'>
        <div className='contact_header'>
          <div className='heading'>Contacts</div>
          <div className='contact_header_right'>
            <div className='contact_circle'>
              <NewRoom color={color} />
            </div>
            <div className='contact_circle'>
              <Search color={color} />
            </div>
            <div className='contact_circle'>
              <Dots color={color} />
            </div>
          </div>
        </div>
        <div className='contact_list'>
          <Contact user={user} />
        </div>
      </div>
    </div>
  );
}
