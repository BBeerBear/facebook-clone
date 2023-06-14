import React from 'react';

export default function DateOfBirthSelect({
  bYear,
  bMonth,
  bDay,
  months,
  days,
  years,
  handleRegisterChange,
  dateError,
}) {
  return (
    <div className='reg_grid'>
      {dateError && (
        <div className='input_error input_error_left'>
          <div
            className='error_arrow_left'
            style={{
              transform: 'translateX(-2px)',
            }}
          ></div>
          {dateError}
        </div>
      )}
      <select name='bMonth' value={bMonth} onChange={handleRegisterChange}>
        {months.map((month, i) => (
          <option key={i} value={month}>
            {month}
          </option>
        ))}
      </select>
      <select name='bDay' value={bDay} onChange={handleRegisterChange}>
        {days.map((day, i) => (
          <option key={i} value={day}>
            {day}
          </option>
        ))}
      </select>
      <select name='bYear' value={bYear} onChange={handleRegisterChange}>
        {years.map((year, i) => (
          <option key={i} value={year}>
            {year}
          </option>
        ))}
      </select>
    </div>
  );
}
