
import '../AddContact/AddContact.css';
import React, { useState } from "react";
import { Link } from 'react-router-dom';

function AddContact({ Action,handleChange,newContact,isEdit }) {

   
        return (
        <div>
            <div className="login-box">
  <h2>{isEdit?"Edit contact ":"Add New Contact"}</h2>
  <form>
    <div className="user-box">
      <input type="text" name="name"  onChange={handleChange} value={newContact.name} required="" />
      <label>Name</label>
    </div>
    <div className="user-box">
      <input type="text" name="email" onChange={handleChange} value={newContact.email} required=""/>
      <label>Email</label>
    </div>
    <Link to="/Add_Contact">
    <a href="#" onClick={Action}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      {isEdit?"Save":"Add New Contact"}
    
    </a>
    </Link>
  </form>
</div>
        </div>
    )
}

export default AddContact
