import { Plus } from '../../../svg';
import '../style.css';
import { stories } from '../../../data/home';
import Story from './Story';

export default function Stories() {
  return (
    <div className='stories'>
      <div className='create_story_card'>
        <img
          src={`${process.env.PUBLIC_URL}/images/default_pic.png`}
          alt=''
          className='create_story_img'
        />
        <div className='plus_story'>
          <Plus color='#fff' />
        </div>
        <div className='story_create_text'>Create Story</div>
      </div>
      {stories.map((story, index) => (
        <Story story={story} index={index} />
      ))}
    </div>
  );
}
