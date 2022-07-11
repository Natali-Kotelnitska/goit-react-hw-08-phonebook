import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { authSelectors } from 'redux/auth';
import s from './Navigation.module.css';

const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <nav>
      <NavLink
        to="/"
        className={({ isActive }) => {
          return isActive ? [s.button, s.active].join(' ') : s.button;
        }}
      >
        Home
      </NavLink>
      {isLoggedIn && (
        <>
          <NavLink
            to="/contacts"
            exact
            className={({ isActive }) => {
              return isActive ? [s.button, s.active].join(' ') : s.button;
            }}
          >
            Contacts
          </NavLink>
        </>
      )}

      {/* {isLoggedIn ? (
        <NavLink
          to="/contacts"
          className={({ isActive }) => {
            return isActive ? [s.button, s.active].join(' ') : s.button;
          }}
        >
          Contacts
        </NavLink>
      ) : (
        <NavLink
          to="/"
          className={({ isActive }) => {
            return isActive ? [s.button, s.active].join(' ') : s.button;
          }}
        >
          Home
        </NavLink>
      )} */}
    </nav>
  );
};

export default Navigation;
