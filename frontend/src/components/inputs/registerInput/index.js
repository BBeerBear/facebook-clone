import './style.css';
import { useField } from 'formik';

export default function RegisterInput({ ...props }) {
  const [field, meta] = useField(props);
  return (
    <div className='input_wrap'>
      <input
        className={meta.touched && meta.error ? 'input_error_border' : ''}
        {...field}
        {...props}
      />
    </div>
  );
}
