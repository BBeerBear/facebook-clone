import React from 'react';

export default function Story({ story, index }) {
  return (
    <div className='story' key={index}>
      <img src={story.image} alt='' className='story_img' />
      <div className='story_profile_pic'>
        <img
          src={`${process.env.PUBLIC_URL}/images/${story.profile_picture}`}
          alt=''
        />
      </div>
      <div className='story_profile_name'>{story.profile_name}</div>
    </div>
  );
}
