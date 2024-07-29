import React, { useState } from "react";
import { contacts as initialContacts } from "../data/contacts";
import ContactForm from "./ContactForm";
import ContactList from "./ContactList";
import Search from "./Search";
import Sort from "./Sort";
import TotalContacts from "./TotalContacts";
import Button from "./Button";

function ContactApp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [imgUrl, setImgUrl] = useState("https://i.pravatar.cc/78");
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem("contacts");
    return savedContacts ? JSON.parse(savedContacts) : initialContacts;
  });
  const [search, setSearch] = useState("");
  const [openAddForm, setOpenAddForm] = useState(false);
  const [sortCriteria, setSortCriteria] = useState("");

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

  const searchContact = contacts.filter(
    (contact) =>
      contact.name.toLowerCase().includes(search.toLowerCase()) ||
      contact.email.toLowerCase().includes(search.toLowerCase()) ||
      contact.address.toLowerCase().includes(search.toLowerCase())
  );

  const sortContacts = (contacts, criteria) => {
    switch (criteria) {
      case "alphabetical":
        return contacts.sort((a, b) => a.name.localeCompare(b.name));
      case "newest":
        return contacts.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
      case "oldest":
        return contacts.sort(
          (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
        );
      default:
        return contacts;
    }
  };

  const handleSortChange = (e) => {
    setSortCriteria(e.target.value);
  };

  const handleOpenAddForm = () => {
    setOpenAddForm((currState) => !currState);
  };

  const total = contacts.length;

  return (
    <div className="contact-app">
      <Search
        search={search}
        setSearch={setSearch}
        searchContact={searchContact}
      />
      <Sort sortCriteria={sortCriteria} handleSortChange={handleSortChange} />
      <TotalContacts total={total} />
      <ContactList contacts={searchContact} onDeleteContact={handleDelete} />

      <Button className="btn" onClick={handleOpenAddForm}>
        {openAddForm ? "✖" : "👥+ Add contact"}
      </Button>

      {openAddForm && (
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
      )}
    </div>
  );
}

export default ContactApp;
