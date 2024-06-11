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
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <div id="root">
        <h1>Contact Book</h1>
        <ContactForm />
        <SearchBox />
        <ContactList />
      </div>
    </PersistGate>
  </Provider>
);

export default App;
