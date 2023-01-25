import React, { useState } from "react";

function BookingForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [length, setLength] = useState("");
  const [beam, setBeam] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [nights, setNights] = useState("");


  const handleSubmit = (event) => {
    event.preventDefault();
    // Send the form data to your server here
    console.log("Name: ", name);
    console.log("Phone: ", phone);
    console.log("Email: ", email);
    console.log("Date: ", date);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label className="formInputLabel">
        Boat Name:
        <input className="formInputField"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <br />
      <label className="formInputLabel">
        Boat Length:
        <input className="formInputField"
          type="text"
          value={length}
          onChange={(e) => setLength(e.target.value)}
        />
      </label>
      <br />
      <label className="formInputLabel">
        Boat Beam:
        <input className="formInputField"
          type="text"
          value={beam}
          onChange={(e) => setBeam(e.target.value)}
        />
      </label>
      <br />
      <label className="formInputLabel">
        Phone Number:
        <input className="formInputField"
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </label>
      <br />
      <label className="formInputLabel">
        Email:
        <input className="formInputField"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <br />
      <label className="formInputLabel">
        Arrival Date:
        <input className="formInputField"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </label>
      <br />
      <label className="formInputLabel">
        Number of Nights:
        <input className="formInputField"
          type="number"
          value={nights}
          onChange={(e) => setNights(e.target.value)}
        />
      </label>
      <br />
      <button type="submit">Book</button>
    </form>
  );
}

export default BookingForm;