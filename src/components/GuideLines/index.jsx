import "./guideline.scss";

export default function GuideLines() {
  return (
    <div className="guideline-wrapper">
      <div className="guideline-container">
        <p className="guideline-title">
          Read the <span className="guideline-title-style">guidelines</span>
          <br /> before registering
        </p>
        <ul className="guideline-lists">
          <li className="guideline-list">
            Be respectful to everyone. There is no such thing as a senior or
            junior.
          </li>
          <li className="guideline-list">
            If you know more than others then share your knowledge rather than
            disrespect them.
          </li>
          <li className="guideline-list">
            If you register then you must have to attend the activities
            conducted inside the club.
          </li>
        </ul>
      </div>
    </div>
  );
}
