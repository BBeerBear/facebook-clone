import React from 'react';

export default function GenderSelect({ handleRegisterChange, genderError }) {
  return (
    <div className='reg_grid'>
      {genderError && (
        <div className='input_error input_error_left'>
          <div
            className='error_arrow_left'
            style={{
              transform: 'translateX(-2px)',
            }}
          ></div>
          {genderError}
        </div>
      )}
      <label htmlFor='female'>
        Female
        <input
          type='radio'
          name='gender'
          id='female'
          value='female'
          onChange={handleRegisterChange}
        />
      </label>
      <label htmlFor='male'>
        Male
        <input
          type='radio'
          name='gender'
          id='male'
          value='male'
          onChange={handleRegisterChange}
        />
      </label>
      <label htmlFor='male'>
        Custom
        <input
          type='radio'
          name='gender'
          id='custom'
          value='custom'
          onChange={handleRegisterChange}
        />
      </label>
    </div>
  );
}
