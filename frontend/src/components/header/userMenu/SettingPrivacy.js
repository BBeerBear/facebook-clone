export default function SettingPrivacy({ setVisible }) {
  return (
    <div className='absolute_wrap'>
      <div className='absolute_wrap_header'>
        <div
          className='circle hover1'
          onClick={() => {
            setVisible(0);
          }}
        >
          <i className='arrow_back_icon'></i>
        </div>
        <span>Setting & privacy</span>
      </div>
      <div className='mmenu_main_item hover1'>
        <div className='circle_icon'>
          <div className='settings_filled_icon'></div>
        </div>
        <span>Settings</span>
      </div>
      <div className='mmenu_main_item hover1'>
        <div className='circle_icon'>
          <div className='privacy_checkup_icon'></div>
        </div>
        <span>Privacy Checkup</span>
      </div>
      <div className='mmenu_main_item hover1'>
        <div className='circle_icon'>
          <div className='privacy_shortcuts_icon'></div>
        </div>
        <span>Privacy Shortcuts</span>
      </div>
      <div className='mmenu_main_item hover1'>
        <div className='circle_icon'>
          <div className='activity_log_icon'></div>
        </div>
        <span>Activity Log</span>
      </div>
      <div className='mmenu_main_item hover1'>
        <div className='circle_icon'>
          <div className='news_icon'></div>
        </div>
        <span>News Feed Preferences</span>
      </div>
      <div className='mmenu_main_item hover1'>
        <div className='circle_icon'>
          <div className='language_icon'></div>
        </div>
        <span>Language</span>
      </div>
    </div>
  );
}
