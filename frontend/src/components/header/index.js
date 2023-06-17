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
import UserMenu from './userMenu';

export default function Header() {
  const color = '#65676B';
  const user = useSelector((state) => state.user);
  const desktopView = useMediaQuery({
    query: '(min-width:1300px)',
  });
  const [showSearchMenu, setShowSearchMenu] = useState(false);
  const [showAllMenu, setShowAllMenu] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const allMenuRef = useRef();
  const userMenuRef = useRef();
  useClickOutside(allMenuRef, () => {
    setShowAllMenu(false);
  });
  useClickOutside(userMenuRef, () => {
    setShowUserMenu(false);
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
          className='search search1'
          onClick={() => {
            setShowSearchMenu(true);
          }}
        >
          <div className='circle'>
            <Search color={color} />
          </div>
          <input
            type='text'
            placeholder='Search Facebook'
            className='hide_input'
          />
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
          className={`circle_icon hover2 ${showAllMenu ? 'active_header' : ''}`}
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
        <div
          className='circle_icon hover2'
          ref={userMenuRef}
          onClick={(prev) => {
            setShowUserMenu((prev) => !prev);
          }}
        >
          <img src={user?.picture} alt='' />
          {showUserMenu && <UserMenu user={user} />}
        </div>
      </div>
    </header>
  );
}
