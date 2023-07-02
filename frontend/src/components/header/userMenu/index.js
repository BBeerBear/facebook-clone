import { Form, Link } from 'react-router-dom';
import { useState } from 'react';
import SettingPrivacy from './SettingPrivacy';
import HelpSupport from './HelpSupport';
import DisplayAccessibility from './DisplayAccessibility';

export default function UserMenu({ user }) {
  const [visible, setVisible] = useState(0);
  return (
    <div className='all_menu mmenu'>
      {visible === 0 && (
        <div>
          <div className='mmenu_header'>
            <Link to='/profile'>
              <div className='mmenu_header_item hover1'>
                <img src={user?.picture} alt='' className='circle_icon' />
                <span>
                  {user?.first_name} {user?.last_name}
                </span>
              </div>
            </Link>
            <div className='mmenu_splitter'></div>

            <div className='mmenu_header_item hover1'>
              <Link to='profile'>See all profiles</Link>
            </div>
          </div>
          <div className='mmenu_main'>
            <div
              className='mmenu_main_item hover1'
              onClick={() => {
                setVisible(1);
              }}
            >
              <div className='circle_icon'>
                <div className='settings_filled_icon'></div>
              </div>
              <span>Settings & privacy</span>
              <div className='rArrow'>
                <i className='right_icon'></i>
              </div>
            </div>
            <div
              className='mmenu_main_item hover1'
              onClick={() => {
                setVisible(2);
              }}
            >
              <div className='circle_icon'>
                <div className='help_filled_icon'></div>
              </div>
              <span>Help & support</span>
              <div className='rArrow'>
                <i className='right_icon'></i>
              </div>
            </div>
            <div
              className='mmenu_main_item hover1'
              onClick={() => {
                setVisible(3);
              }}
            >
              <div className='circle_icon'>
                <div className='dark_filled_icon'></div>
              </div>
              <span>Display & accessibility</span>
              <div className='rArrow'>
                <i className='right_icon'></i>
              </div>
            </div>
            <div className='mmenu_main_item hover1'>
              <div className='circle_icon'>
                <div className='report_filled_icon'></div>
              </div>
              <span>Give feedback</span>
            </div>
            <div className='mmenu_main_item hover1'>
              <div className='circle_icon'>
                <div className='logout_filled_icon'></div>
              </div>
              <Form action='/logout' method='post'>
                <span>Log Out</span>
              </Form>
            </div>
          </div>
        </div>
      )}
      {visible === 1 && <SettingPrivacy setVisible={setVisible} />}
      {visible === 2 && <HelpSupport setVisible={setVisible} />}
      {visible === 3 && <DisplayAccessibility setVisible={setVisible} />}
    </div>
  );
}
