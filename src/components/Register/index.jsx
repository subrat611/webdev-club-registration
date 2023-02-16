import "./register.scss";

export default function Register() {
  return (
    <div className="register-wrapper">
      <div className="register-inner-wrapper">
        <p className="register-title">
          Fill out <br />
          your details to join
        </p>
        <form className="register-controlers">
          <div className="register-input">
            <label htmlFor="inputName">Name</label>
            <input id="inputName" placeholder="Enter Your Name" type="text" />
          </div>
          <div className="register-input">
            <label htmlFor="inputEmail">Email</label>
            <input
              id="inputEmail"
              placeholder="Enter Your Email Id"
              type="email"
            />
          </div>
          <div className="register-input">
            <label htmlFor="inputContact">Contact</label>
            <input
              id="inputContact"
              placeholder="Enter Your Contact Number"
              type="tel"
            />
          </div>
          <button type="submit" className="btn-register">
            join the club
          </button>
        </form>
      </div>
    </div>
  );
}
