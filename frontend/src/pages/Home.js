import LeftHome from '../components/home/left';
import { useSelector } from 'react-redux';
import RightHome from '../components/home/right';
import Stories from '../components/home/stories';
import './style.css';
import CreatePost from '../components/createPost';

export default function HomePage() {
  const user = useSelector((state) => state.user);
  return (
    <div className='home'>
      <LeftHome user={user} />
      <div className='middle_home'>
        <Stories />
        <CreatePost user={user} />
      </div>
      <RightHome user={user} />
    </div>
  );
}
