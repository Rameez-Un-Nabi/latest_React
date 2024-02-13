// Inside your BookingForm component
const BookingForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [formError, setFormError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation logic
    if (name && email && isValidEmail(email)) {
      // Proceed with booking
      // Add your booking logic here
    } else {
      setFormError('Please provide valid name and email.');
    }
  };

  const isValidEmail = (email) => {
    // Add your email validation logic
    // Return true if the email is valid, otherwise false
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Form fields go here */}
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Your Name" />
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Your Email" />
      <button type="submit">Book Now</button>
      {formError && <p style={{ color: 'red' }}>{formError}</p>}
    </form>
  );
};


export default BookingForm;  component
