import { Link } from 'react-router-dom';
import { left } from '../../../data/home';
import LeftLink from './LeftLink';
import '../style.css';
import { ArrowDown1 } from '../../../svg';
import { useState } from 'react';

export default function LeftHome({ user }) {
  const [visible, setVisible] = useState(false);
  return (
    <div className='left_home scrollbar'>
      <Link to='/profile' className='left_link hover1'>
        <img src={user?.picture} alt='avatar' />
        <span>
          {user?.first_name} {user?.last_name}
        </span>
      </Link>
      {left.slice(0, 8).map((link, i) => (
        <LeftLink key={i} img={link.img} text={link.text} />
      ))}
      {!visible && (
        <div
          className='left_link hover1'
          onClick={() => {
            setVisible(true);
          }}
        >
          <div className='circle_icon'>
            <ArrowDown1 />
          </div>
          <span>See more</span>
        </div>
      )}
      {visible && (
        <div className='more_left'>
          {left.slice(8, left.length).map((link, i) => (
            <LeftLink key={i} img={link.img} text={link.text} />
          ))}
          <div
            className='left_link hover1'
            onClick={() => {
              setVisible(false);
            }}
          >
            <div className='circle_icon rotate180'>
              <ArrowDown1 />
            </div>
            <span>See less</span>
          </div>
        </div>
      )}
    </div>
  );
}
