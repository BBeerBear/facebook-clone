export default function DisplayAccessibility({ setVisible }) {
  return (
    <div className='absolute_wrap scrollbar'>
      <div className='absolute_wrap_header'>
        <div
          className='circle hover1'
          onClick={() => {
            setVisible(0);
          }}
        >
          <i className='arrow_back_icon'></i>
        </div>
        <span>Display & accessibility</span>
      </div>
      <div className='mmenu_main_item' style={{ alignItems: 'stretch' }}>
        <div className='circle_icon'>
          <div className='dark_filled_icon'></div>
        </div>
        <div className='mmenu_col'>
          <div className='mmenu_span1'>Dark Mode</div>
          <div className='mmenu_span2'>
            Adjust the appearance of Facebook to reduce glare and give your eyes
            a break.
          </div>
          <label htmlFor='darkOff' className='hover1 mmenu_radio'>
            <span>Off</span>
            <input type='radio' name='dark' id='darkOff' />
          </label>
          <label htmlFor='darkOn' className='hover1 mmenu_radio'>
            <span>On</span>
            <input type='radio' name='dark' id='darkOn' />
          </label>
          <label htmlFor='automatic' className='hover1 mmenu_radio'>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span>Automatic</span>
              <span
                style={{
                  fontSize: '12px',
                  color: 'var(--color-secondary)',
                  fontWeight: '400',
                }}
              >
                We'll automaticall adjust the display based on your device's
                system settings
              </span>
            </div>
            <input type='radio' name='dark' id='automatic' />
          </label>
        </div>
      </div>
      <div className='mmenu_main_item' style={{ alignItems: 'stretch' }}>
        <div className='circle_icon'>
          <div className='compact_icon'></div>
        </div>
        <div className='mmenu_col'>
          <div className='mmenu_span1'>Compact Mode</div>
          <div className='mmenu_span2'>
            Make your font size smaller so more content can fit on the screen.
          </div>
          <label htmlFor='darkOff' className='hover1 mmenu_radio'>
            <span>Off</span>
            <input type='radio' name='dark' id='darkOff' />
          </label>
          <label htmlFor='darkOn' className='hover1 mmenu_radio'>
            <span>On</span>
            <input type='radio' name='dark' id='darkOn' />
          </label>
        </div>
      </div>
      <div className='mmenu_main_item'>
        <div className='circle_icon'>
          <div className='keyboard_icon'></div>
        </div>
        <div className='mmenu_col'>
          <div className='mmenu_span1'>Keyboard</div>
        </div>
      </div>
    </div>
  );
}
