function ContactItem({ name, email, imgUrl, address, onDeleteContact }) {
  return (
    <div className="contact-item">
      <div className="contact-header">
        <h3>{name}</h3>
        <button className="delete-btn" onClick={onDeleteContact}>
          ✖
        </button>
      </div>
      <img src={imgUrl} alt={name} />
      <p>{email}</p>
      <p>{address}</p>
    </div>
  );
}

export default ContactItem;
