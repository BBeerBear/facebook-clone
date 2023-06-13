import './style.css';
import { ErrorMessage, useField } from 'formik';

export default function LoginInput({ bottom, ...props }) {
  const [field, meta] = useField(props);
  return (
    <div className='input_wrap'>
      {/* show in the top */}
      {meta.touched && meta.error && !bottom && (
        <div className='input_error' style={{ transform: 'translateY(-1px)' }}>
          {meta.touched && meta.error && <ErrorMessage name={field.name} />}
          {meta.touched && meta.error && (
            <div className='error_arrow_top'></div>
          )}
        </div>
      )}
      <input
        className={meta.touched && meta.error ? 'input_error_border' : ''}
        // type={field.type}
        // name={field.name}
        // placeholder={placeholder}
        {...field}
        {...props}
      />
      {/* show in the bottom */}
      {meta.touched && meta.error && bottom && (
        <div className='input_error' style={{ transform: 'translateY(1px)' }}>
          {meta.touched && meta.error && (
            <div className='error_arrow_bottom'></div>
          )}
          {meta.touched && meta.error && <ErrorMessage name={field.name} />}
        </div>
      )}

      {meta.touched && meta.error && (
        <i className='error_icon' style={{ top: `${!bottom && '51px'}` }}></i>
      )}
    </div>
  );
}
