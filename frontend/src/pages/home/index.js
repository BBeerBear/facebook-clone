import './style.css';
import Header from '../../components/header';
import useClickOutside from '../../helpers/clickOutside';
import { useRef, useState } from 'react';

export default function Home() {
  const el = useRef();
  const [visible, setVisible] = useState(false);
  useClickOutside(el, () => {
    setVisible(false);
  });
  console.log(visible);
  // useClickOutside(el, () => {
  //   el.current.style.display = 'none';
  // });
  return (
    <>
      <Header />
      {visible && (
        <div className='card' ref={el}>
          dfdaf
        </div>
      )}
    </>
  );
}
