import ContactItem from "./ContactItem";
import NoContactsFound from "./NoContactsFound";

function ContactList({ contacts, onDeleteContact }) {
  return (
    <>
      <div className="contact-list">
        {contacts.length === 0 ? (
          <NoContactsFound />
        ) : (
          contacts.map((contact) => (
            <ContactItem
              key={contact.id}
              name={contact.name}
              email={contact.email}
              imgUrl={contact.imageUrl}
              address={contact.address}
              onDeleteContact={() => onDeleteContact(contact.id)}
            />
          ))
        )}
      </div>
    </>
  );
}

export default ContactList;
