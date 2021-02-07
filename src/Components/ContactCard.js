import React from 'react'
import { Button, Card } from 'react-bootstrap';
import { Link, Route } from 'react-router-dom';

const ContactCard = ({ contact, deleteContact, getContact }) => {
  // const mypath={
  //   pathname:"/newcontact",
  //   contactId:contact.id
  // }
  return (
    <div>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={contact.imgSrc} />
        <Card.Body>
          <Card.Title>{contact.name}</Card.Title>
          <Card.Text>
            {contact.email}
          </Card.Text>
          {/* <Button variant="primary">Go somewhere</Button>
    <Button variant="danger">Go somewhere</Button> */}


          <Link to="/Edit_Contact" >
            <button style={{ margin: "10px" }} 
                    type="button" 
                    class="btn btn-primary" 
                    onClick={() => getContact(contact)}>
              Edit</button>
          </Link>
          <button style={{ margin: "10px" }} type="button" class="btn btn-danger" onClick={() => deleteContact(contact.id)}>Delete</button>
        </Card.Body>
      </Card>
    </div>
  )
}

export default ContactCard
