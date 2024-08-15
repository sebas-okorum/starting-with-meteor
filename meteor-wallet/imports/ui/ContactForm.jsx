import React, { useState } from 'react';
import { insertContact } from '../api/ContactsCollection';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [imageURL, setImageURL] = useState('');

  const saveContact = () => {
    console.log({ name, email, imageURL });
    insertContact({ name, email, imageURL });
    setName('');
    setEmail('');
    setImageURL('');
  };

  return (
    <form>
      <div>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          value={name}
          type="text"
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          value={email}
          id="email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="imageURL">Image URL</label>
        <input
          type="text"
          value={imageURL}
          id="imageURL"
          onChange={(e) => setImageURL(e.target.value)}
        />
      </div>
      <div>
        <button type="button" onClick={saveContact}>
          Save Contact
        </button>
      </div>
    </form>
  );
};
