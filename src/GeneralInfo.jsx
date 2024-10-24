import { useState } from "react";

function GeneralInfo({ view, toggleView }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handlePhoneNumberChange(e) {
    setPhoneNumber(e.target.value);
  }

  console.log("Current name value:", name);

  return (
    <div>
      {!view ? (
        <div>
          <h1>General Information</h1>
          <section>
            <label>Name</label>
            <input value={name} onChange={handleNameChange}></input>
            <label>Email</label>
            <input value={email} onChange={handleEmailChange}></input>
            <label>Phone Number</label>
            <input
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
            ></input>
          </section>
        </div>
      ) : (
        <section>
          <h2>Name: {name}</h2>
          <h2>Email: {email}</h2>
          <h2>Phone Number: {phoneNumber}</h2>
        </section>
      )}
    </div>
  );
}

export default GeneralInfo;
