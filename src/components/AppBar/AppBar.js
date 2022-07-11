import s from './AppBar.module.css';
import Navigation from 'components/Navigation/Navigation';
import Container from 'components/Container/Container';
import UserMenu from 'components/UserMenu/UserMenu';
import AuthNav from 'components/AutNav/AuthNav';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';

export default function Appbar() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <header className={s.header}>
      <Container>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Container>
    </header>
  );
}
