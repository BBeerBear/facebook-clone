export default function HelpSupport({ setVisible }) {
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
        <span>Help & support</span>
      </div>
      <div className='mmenu_main_item hover1'>
        <div className='circle_icon'>
          <div className='help_center_icon'></div>
        </div>
        <span>Help Center</span>
      </div>
      <div className='mmenu_main_item hover1'>
        <div className='circle_icon'>
          <div className='email_icon'></div>
        </div>
        <span>Support Inbox</span>
      </div>
      <div className='mmenu_main_item hover1'>
        <div className='circle_icon'>
          <div className='info_filled_icon'></div>
        </div>
        <span>Report a problem</span>
      </div>
    </div>
  );
}
