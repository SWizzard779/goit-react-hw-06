import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { store, persistor } from '../../redux/store';
import ContactForm from '../ContactForm/ContactForm'
import ContactList from '../ContactList/ContactList';
import SearchBox from '../SearchBox/SearchBox';
import { selectContacts } from '../../redux/contactsSlice';
import './App.module.css';


const App = () => (
      <div>
        <h1>Contact Book</h1>
        <ContactForm />
        <SearchBox />
        <ContactList />
      </div>
);

export default App;
