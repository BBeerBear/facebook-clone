import axios from 'axios';
import Cookies from 'js-cookie';
import { useDispatch, useSelector } from 'react-redux';
import { useLoaderData, useNavigation, useNavigate } from 'react-router-dom';
import CreatePost from '../components/createPost';
import ActivateForm from '../components/home/activate';
import LeftHome from '../components/home/left';
import RightHome from '../components/home/right';
import Stories from '../components/home/stories';
import { userActions } from '../store/user';
import './style.css';

export default function ActivatePage() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { type, header, text } = useLoaderData();
  const navigation = useNavigation();
  const loading = navigation.state === 'loading';

  if (type === 'success') {
    Cookies.set('user', JSON.stringify({ ...user, verified: true }));
    dispatch(userActions.verify());
    setTimeout(() => {
      navigate('/');
    }, 3000);
  }

  return (
    <div className='home'>
      <ActivateForm type={type} header={header} text={text} loading={loading} />
      <LeftHome user={user} />
      <div className='middle_home'>
        <Stories />
        <CreatePost user={user} />
      </div>
      <RightHome user={user} />
    </div>
  );
}
export async function loader({ params }) {
  const userToken = localStorage.getItem('token');
  try {
    const activateToken = params.token;
    const { data } = await axios.post(
      `${process.env.REACT_APP_BACKEND_URL}/activate`,
      {
        token: activateToken,
      },
      {
        headers: { Authorization: `Bearer ${userToken}` },
      }
    );
    return {
      type: 'success',
      header: 'Account verfication succeeded',
      text: data.message,
    };
  } catch (error) {
    return {
      type: 'error',
      header: 'Account verfication failed',
      text: error.response.data.message,
    };
  }
}
