import React from 'react';
import { Feeling, LiveVideo, Photo } from '../../svg';

export default function CreatePost({ user }) {
  return (
    <div className='create_post'>
      <div className='create_post_header'>
        <div className='circle_icon'>
          <img src={user?.picture} alt='' />
        </div>
        <div className='open_post'>What's on your mind, {user?.first_name}</div>
      </div>
      <div className='splitter'></div>
      <div className='create_post_body'>
        <div className='create_post_icon hover1'>
          <LiveVideo color='#f3425f' />
          Live video
        </div>
        <div className='create_post_icon hover1'>
          <Photo color='#4bbf67' />
          Photo/Video
        </div>
        <div className='create_post_icon hover1'>
          <Feeling color='#f7b920' />
          Feeling/Activity
        </div>
      </div>
    </div>
  );
}
