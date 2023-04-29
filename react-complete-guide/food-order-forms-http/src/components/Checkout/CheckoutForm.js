import React, { useState } from 'react';

const CheckoutForm = () => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [requests, setRequests] = useState('');
  return (
    <form>
      <input id="name" type="text">
        name
      </input>
      <input id="address" type="text">
        address
      </input>
      <input id="telephoneNumber" type="text">
        phone number
      </input>
      <input id="specialRequest" type="text">
        any specific requests?
      </input>
    </form>
  );
};

export default CheckoutForm;
