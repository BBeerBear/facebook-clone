import './style.css';
import { NavLink, Link } from 'react-router-dom';
import {
  Logo,
  Search,
  HomeActive,
  Friends,
  Watch,
  Market,
  Gaming,
  Messenger,
  Notifications,
  Plus,
  Menu,
} from '../../svg';
import { useSelector } from 'react-redux';
import SearchMenu from './SearchMenu';
import { useRef, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import AllMenu from './AllMenu';
import useClickOutside from '../../helpers/clickOutside';

export default function Header() {
  const color = '#65676B';
  const user = useSelector((state) => state.user);
  const [showSearchMenu, setShowSearchMenu] = useState(false);
  const desktopView = useMediaQuery({
    query: '(min-width:1300px)',
  });
  const [showAllMenu, setShowAllMenu] = useState(false);
  const allMenuRef = useRef();
  useClickOutside(allMenuRef, () => {
    setShowAllMenu(false);
  });
  return (
    <header>
      <div className='header_left'>
        <Link to='/' className='header_logo'>
          <div className='circle'>
            <Logo />
          </div>
        </Link>
        <div
          className='search'
          onClick={() => {
            setShowSearchMenu(true);
          }}
        >
          <div className='circle_icon'>
            <Search color={color} />
          </div>
          {desktopView && (
            <input
              type='text'
              placeholder='Search Facebook'
              className='hide_input'
            />
          )}
        </div>
      </div>
      {showSearchMenu && (
        <SearchMenu color={color} setShowSearchMenu={setShowSearchMenu} />
      )}
      <div className='header_middle'>
        <NavLink
          to='/'
          className={({ isActive }) =>
            isActive ? 'middle_icon active' : 'middle_icon hover1 '
          }
        >
          <HomeActive color={color} />
        </NavLink>
        <NavLink
          to='/friends'
          className={({ isActive }) =>
            isActive ? 'middle_icon active' : 'middle_icon hover1'
          }
        >
          <Friends color={color} />
        </NavLink>
        <NavLink
          to='/watch'
          className={({ isActive }) =>
            isActive ? 'middle_icon active' : 'middle_icon hover1'
          }
        >
          <Watch color={color} />
          <div className='middle_notification'>9</div>
        </NavLink>
        <NavLink
          to='/marketplace'
          className={({ isActive }) =>
            isActive ? 'middle_icon active' : 'middle_icon hover1'
          }
        >
          <Market color={color} />
        </NavLink>
        <NavLink
          to='/gaming'
          className={({ isActive }) =>
            isActive ? 'middle_icon active' : 'middle_icon hover1'
          }
        >
          <Gaming color={color} />
        </NavLink>
      </div>
      <div className='header_right'>
        <div
          className='circle_icon hover2'
          ref={allMenuRef}
          onClick={() => {
            setShowAllMenu((prev) => !prev);
          }}
        >
          <Menu />
          {showAllMenu && <AllMenu />}
        </div>
        <div className='circle_icon hover2'>
          <Messenger />
        </div>
        <div className='circle_icon hover2'>
          <Notifications />
          <div className='right_notification'>1</div>
        </div>
        <Link to='/profile' className='circle_icon'>
          <img src={user?.picture} alt='' />
        </Link>
      </div>
    </header>
  );
}
