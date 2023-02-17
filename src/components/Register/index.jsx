import { useEffect, useState } from "react";
import supabase from "../../config/supabaseClient";
import FormStatus from "../FormStatus";

import "./register.scss";

const clubs = ["AI/ML development", "Android development", "Web development"];

export default function Register() {
  const [devName, setDevName] = useState("");
  const [devEmail, setDevEmail] = useState("");
  const [devContact, setDevContact] = useState("");
  const [devClub, setDevClub] = useState("");
  const [formStatus, setFormStatus] = useState(null);

  useEffect(() => {
    validateDetails();
  }, []);

  async function registerUser(name, email, contact, club) {
    const { data, error } = await supabase
      .from("registration")
      .insert([{ name: name, email: email, phone: contact, club: club }]);

    if (!error) {
      setFormStatus(true);
      resetFormStatus();
      setDevName("");
      setDevEmail("");
      setDevContact("");
      setDevClub("");
    } else {
      setFormStatus(false);
      resetFormStatus();
      setDevName("");
      setDevEmail("");
      setDevContact("");
      setDevClub("");
    }
  }

  function validateDetails() {
    if (
      devName !== "" &&
      devEmail !== "" &&
      devContact !== "" &&
      devClub !== ""
    ) {
      let contact = Number(devContact); // string ---> number
      registerUser(devName, devEmail, contact, devClub);
    }
  }

  function resetFormStatus() {
    setTimeout(() => {
      setFormStatus(null);
    }, 1000);
  }

  return (
    <div className="register-wrapper">
      <div className="register-inner-wrapper">
        <p className="register-title">
          Fill out <br />
          your details to join
        </p>
        <form
          className="register-controlers"
          onSubmit={(e) => {
            e.preventDefault();
            validateDetails();
          }}
        >
          <div className="register-input">
            <label htmlFor="inputName">Name</label>
            <input
              id="inputName"
              placeholder="Enter Your Name"
              type="text"
              value={devName}
              onChange={(e) => setDevName(e.target.value)}
            />
          </div>
          <div className="register-input">
            <label htmlFor="selectClub">Select club</label>
            <select
              id="selectClub"
              value={devClub}
              onChange={(e) => setDevClub(e.target.value)}
            >
              <option>Choose your club</option>
              {clubs.map((club, key) => (
                <option value={club} key={key}>
                  {club}
                </option>
              ))}
            </select>
          </div>
          <div className="register-input">
            <label htmlFor="inputEmail">Email</label>
            <input
              id="inputEmail"
              placeholder="Enter Your Email Id"
              type="email"
              value={devEmail}
              onChange={(e) => setDevEmail(e.target.value)}
            />
          </div>
          <div className="register-input">
            <label htmlFor="inputContact">Contact</label>
            <input
              id="inputContact"
              placeholder="Enter Your Contact Number"
              type="tel"
              value={devContact}
              onChange={(e) => setDevContact(e.target.value)}
            />
          </div>
          <button type="submit" className="btn-register">
            join the club
          </button>
        </form>
      </div>

      {formStatus != null ? <FormStatus formStatus={formStatus} /> : null}
    </div>
  );
}
