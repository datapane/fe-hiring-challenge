import React from "react";

const ContactsList = ({ contacts }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {contacts.map((contact, index) => (
          <tr key={index}>
            <th>{contact.name}</th>
            <th>{contact.age}</th>
            <th>{contact.email}</th>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ContactsList;
