
import './App.css';
import AddContact from './Components/AddContact/AddContact';
import ContactCard from './Components/ContactCard';
import { Link, Route } from 'react-router-dom';
import { contactList } from './ContactData';
import React, { useState } from "react";

function App() {
  const [contacts, setContactList] = useState(contactList)
  const [newContact, setNewContact] = useState({
    name: "",
    email: "",
    imgSrc: "",
    id: "",
  })

  const [isEdit, setIsEdit] = useState(false);

  const handleChange = (e) => {
    setNewContact({ ...newContact, [e.target.name]: e.target.value });
  };







  const addNewContact = () => {
    setContactList([...contacts, {
      ...newContact,
      id: Math.random(),
      imgSrc: "https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
    }])

  }



  const getContact = (obj) => {
    setNewContact({
      name: obj.name,
      email: obj.email,
      imgSrc: obj.imgSrc,
      id: obj.id,
    });
    setIsEdit(true);
  };


  const reset = () => {
    setNewContact({
      name: "",
      email: "",
      src: "",
      id: "",
    });
    setIsEdit(false);
  };




  const editNewContact = () => {
    setContactList(
      contacts.map((el) => (el.id === newContact.id ? (el = newContact) : el))
    );

  }


  const deleteContact = (contactID) => { setContactList(contacts.filter(contact => contact.id != contactID)) }


  return (
    <div className="App">
      <Link to="/contacts">
        <button style={{ margin: "10px" }}
                type="button" 
                class="btn btn-primary btn-lg">
          List Contact</button>
      </Link>
      <Link to="/newcontact"> <button type="button" class="btn btn-secondary btn-lg" onClick={reset}>Add New Contact</button></Link>

      <div className="contactList">

        <Route path="/contacts" render={() => contacts.map(contact => <ContactCard getContact={getContact} contact={contact} deleteContact={deleteContact} key={contact.id} />)} />
        <Route path="/(Add_Contact|Edit_Contact)"
          render={() => <AddContact

            handleChange={handleChange}
            newContact={newContact}
            Action={isEdit ? editNewContact : addNewContact}  isEdit={isEdit} />}
           
            />

      </div>
    </div>
  );
}

export default App;
