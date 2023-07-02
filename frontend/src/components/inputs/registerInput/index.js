import './style.css';
import { useField, ErrorMessage } from 'formik';

export default function RegisterInput({ right, ...props }) {
  const [field, meta] = useField(props);
  return (
    <div className='input_wrap register_input_wrap'>
      {/* Error Message */}
      {meta.touched && meta.error && !right && (
        <div className='input_error input_error_left'>
          {meta.touched && meta.error && (
            <div className='error_arrow_left'></div>
          )}
          {meta.touched && meta.error && <ErrorMessage name={field.name} />}
        </div>
      )}
      {meta.touched && meta.error && right && (
        <div className='input_error input_error_right'>
          {meta.touched && meta.error && (
            <div className='error_arrow_right'></div>
          )}
          {meta.touched && meta.error && <ErrorMessage name={field.name} />}
        </div>
      )}
      {/* input */}
      <input
        className={meta.touched && meta.error ? 'input_error_border' : ''}
        {...field}
        {...props}
      />
      {/* error icon */}
      {meta.touched && meta.error && (
        <i
          className='error_icon'
          style={{ transform: 'translateY(-3px) scale(0.8)' }}
        ></i>
      )}
    </div>
  );
}
