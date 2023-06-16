import { useEffect, useRef, useState } from 'react';
import { Return, Search } from '../../svg';
import { Link } from 'react-router-dom';
import useClickOutside from '../../helpers/clickOutside';

export default function SearchMenu({ color, setShowSearchMenu }) {
  const menu = useRef();
  const inputRef = useRef();
  const [iconVisible, setIconVisible] = useState(false);

  useClickOutside(menu, () => {
    setShowSearchMenu(false);
  });
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <div className='header_left search_area scrollbar' ref={menu}>
      <div className='search_wrap'>
        <div className='header_logo'>
          <div className='circle hover1'>
            <Return color={color} />
          </div>
        </div>
        <div className='search'>
          {iconVisible && (
            <div className='circle_icon'>
              <Search color={color} />
            </div>
          )}
          <input
            type='text'
            placeholder='Search Facebook'
            className='hide_input'
            ref={inputRef}
            onFocus={() => {
              setIconVisible(false);
            }}
            onBlur={() => {
              setIconVisible(true);
            }}
          />
        </div>
      </div>
      <div className='search_history_header'>
        <span>Recent</span>
        <Link to='/'>Edit</Link>
      </div>
      <div className='search_history'></div>
      <div className='search_results'></div>
    </div>
  );
}
