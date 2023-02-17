import { useEffect, useState } from "react";
import supabase from "../../config/supabaseClient";
import FormStatus from "../FormStatus";

import "./register.scss";

export default function Register() {
  const [devName, setDevName] = useState("");
  const [devEmail, setDevEmail] = useState("");
  const [devContact, setDevContact] = useState("");
  const [formStatus, setFormStatus] = useState(null);

  useEffect(() => {
    validateDetails();
  }, []);

  async function registerUser(name, email, contact) {
    const { data, error } = await supabase
      .from("registration")
      .insert([{ name: name, email: email, phone: contact }]);

    if (!error) {
      setFormStatus(true);
      resetFormStatus();
      setDevName("");
      setDevEmail("");
      setDevContact("");
    } else {
      setFormStatus(false);
      resetFormStatus();
      setDevName("");
      setDevEmail("");
      setDevContact("");
    }
  }

  function validateDetails() {
    if (devName !== "" && devEmail !== "" && devContact !== "") {
      let contact = Number(devContact); // string ---> number
      registerUser(devName, devEmail, contact);
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
