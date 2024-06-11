import React from 'react';
import ContactForm from '../ContactForm/ContactForm'
import ContactList from '../ContactList/ContactList';
import SearchBox from '../SearchBox/SearchBox';
import './App.module.css';


const App = () => (
  <div id="root">
    <h1>Contact Book</h1>
    <ContactForm />
    <SearchBox />
    <ContactList />
  </div>
);

export default App;
