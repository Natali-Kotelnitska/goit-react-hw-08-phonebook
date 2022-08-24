import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';
import styles from './HomeView.module.css';

export default function HomeView() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <>
      {isLoggedIn ? (
        <Navigate to="/contacts" />
      ) : (
        <div className={styles.section}>
          <h1 className={styles.title}>Phonebook app</h1>
          <p className={styles.text}>
            Please register or log in to start to work with the app.
          </p>
        </div>
      )}
    </>
  );
}

// import PageHeading from 'components/PageHeading/PageHeading';

// const HomeView = () => {
//   return (
//     <div>
//       <PageHeading text={'Welcome to PhoneBook Service!'} />
//       <span role="img" aria-label="welcome icon">
//         🙋
//       </span>
//     </div>
//   );
// };

// const styles = {
//   container: {
//     minHeight: 'calc(100vh - 50px)',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   title: {
//     fontWeight: 500,
//     fontSize: 48,
//     textAlign: 'center',
//   },
// };
