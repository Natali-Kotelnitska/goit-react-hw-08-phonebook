import { useDispatch, useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';
import { authOperations } from 'redux/auth';

const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);
  // const avatar = Avatar;
  return (
    <div>
      {/* <img src={avatar} alt="" width="32" className="avatar" /> */}
      <span>Welcome, {name}</span>
      <button type="button" onClick={() => dispatch(authOperations.signOut())}>
        Log out
      </button>
    </div>
  );
};
export default UserMenu;
