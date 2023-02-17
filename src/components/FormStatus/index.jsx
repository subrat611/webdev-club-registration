import "./formstatus.scss";

import successIcon from "../../assets/success.png";

export default function FormStatus({ formStatus }) {
  return (
    <div className="form-status-wrapper">
      {formStatus ? (
        <div className="form-success">
          <p className="form-status-msg">You are in</p>
          <img src={successIcon} alt="sucess-icon" />
        </div>
      ) : (
        <div className="form-faild">
          <p className="form-status-msg">Something wrong</p>
        </div>
      )}
    </div>
  );
}
