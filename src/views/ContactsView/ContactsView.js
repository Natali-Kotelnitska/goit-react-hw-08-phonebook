import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import styles from './ContactsView.module.css';

export default function ContactsPage() {
  return (
    <div className={styles.section}>
      <h1 className={styles.title}>PHONEBOOK APP</h1>
      <h2>Add new contact</h2>
      <ContactForm />

      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
}
