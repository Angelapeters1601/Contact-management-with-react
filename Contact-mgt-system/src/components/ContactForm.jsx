import Button from "./Button";

function ContactForm({
  name,
  setName,
  email,
  setEmail,
  address,
  setAddress,
  imgUrl,
  setImgUrl,
  handleSubmit,
}) {
  const handleEmailChange = (e) => {
    const email = e.target.value;
    setEmail(email);
    setImgUrl(`https://i.pravatar.cc/78?u=${encodeURIComponent(email)}`);
  };

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        value={name}
        placeholder="Enter full-name"
        onChange={(e) => setName(e.target.value)}
        required
      />

      <label htmlFor="email">Email:</label>
      <input
        type="email"
        value={email}
        placeholder="Enter email address.."
        onChange={handleEmailChange}
        required
      />

      <label htmlFor="address">Address:</label>
      <input
        type="text"
        value={address}
        placeholder="Your location..."
        onChange={(e) => setAddress(e.target.value)}
        required
      />

      <label htmlFor="image">Photo:</label>
      <input
        type="text"
        value={imgUrl}
        placeholder="Upload your photo"
        onChange={(e) => setImgUrl(e.target.value)}
        required
      />
      <Button type="submit">Add</Button>
    </form>
  );
}

export default ContactForm;
