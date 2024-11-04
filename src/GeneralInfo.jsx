import { useState } from "react";
import "../src/styles/GeneralInfo.css";

function GeneralInfo({ isViewMode }) {
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

  return (
    <div>
      {!isViewMode ? (
        <div className="general-info-edit-mode">
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
        <div className="general-info-view-mode">
          <section>
            <h2>{name}</h2>
            <h2>Email: {email}</h2>
            <h2>Phone Number: {phoneNumber}</h2>
          </section>
        </div>
      )}
    </div>
  );
}

export default GeneralInfo;
