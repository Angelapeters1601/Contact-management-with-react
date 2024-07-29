import ContactItem from "./ContactItem";

function ContactList({ contacts, onDeleteContact }) {
  return (
    <>
      <div className="contact-list">
        {contacts.map((contact) => (
          <ContactItem
            key={contact.id}
            name={contact.name}
            email={contact.email}
            imgUrl={contact.imageUrl}
            address={contact.address}
            onDeleteContact={() => onDeleteContact(contact.id)}
          />
        ))}
      </div>
    </>
  );
}

export default ContactList;
