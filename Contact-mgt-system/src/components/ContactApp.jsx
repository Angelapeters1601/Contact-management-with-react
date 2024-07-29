import React, { useState } from "react";
import { contacts as initialContacts } from "../data/contacts";
import ContactForm from "./ContactForm";
import ContactList from "./ContactList";
import Search from "./Search";
import Sort from "./Sort";

function ContactApp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [imgUrl, setImgUrl] = useState("https://i.pravatar.cc/78");
  //   const [contacts, setContacts] = useState(initialContacts);
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem("contacts");
    return savedContacts ? JSON.parse(savedContacts) : initialContacts;
  });

  const addContact = (newContact) => {
    const updatedContacts = [...contacts, newContact];
    setContacts(updatedContacts);
    localStorage.setItem("contacts", JSON.stringify(updatedContacts));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addContact({
      name,
      email,
      address,
      imageUrl: imgUrl,
      id: crypto.randomUUID(),
    });
    setName("");
    setAddress("");
    setEmail("");
    setImgUrl("https://i.pravatar.cc/78");
  };

  const handleDelete = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  return (
    <div className="contact-app">
      <Search />
      <Sort />
      <ContactList contacts={contacts} onDeleteContact={handleDelete} />
      <ContactForm
        name={name}
        setName={setName}
        email={email}
        setEmail={setEmail}
        address={address}
        setAddress={setAddress}
        imgUrl={imgUrl}
        setImgUrl={setImgUrl}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}

export default ContactApp;
