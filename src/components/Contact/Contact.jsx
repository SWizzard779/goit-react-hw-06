import React from 'react';
import styles from './Contact.module.css';

const Contact = ({ contact, onDelete }) => (
  <li className={styles.contact}>
    <p>{contact.name}: {contact.number}</p>
    <button onClick={onDelete}>Delete</button>
  </li>
);

export default Contact;

