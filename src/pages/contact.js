import React from 'react';

const ContactPage = () => {
  return (
    <div>
      <h1>Contact</h1>
      <p>You can contact me at:</p>
      <ul>
        <li>Email: john@example.com</li>
        <li>Phone: 555-555-5555</li>
      </ul>
      <h2>Send me a message</h2>
      <form>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <label>
          Message:
          <textarea name="message" />
        </label>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ContactPage;
