import { NavLink } from 'react-router-dom';

import styles from './AuthNav.module.css';

export default function AuthNav() {
  return (
    <div className={styles.auth}>
      <NavLink
        to="/login"
        className={({ isActive }) => {
          return isActive
            ? [styles.button, styles.active].join(' ')
            : styles.button;
        }}
      >
        Login
      </NavLink>
      <NavLink
        to="/register"
        className={({ isActive }) => {
          return isActive
            ? [styles.button, styles.active].join(' ')
            : styles.button;
        }}
      >
        Register
      </NavLink>
    </div>
  );
}
