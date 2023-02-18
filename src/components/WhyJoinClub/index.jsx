import "./whyjoinclub.scss";

import LearnIcon from "../../assets/users.png";
import ChallengesIcon from "../../assets/problem.png";
import GrowIcon from "../../assets/self-growth.png";

export default function WhyJoinClub() {
  return (
    <div className="whyjoin-wrapper">
      <div className="whyjoin-container">
        <p className="whyjoin-title">Why join a club</p>
        <div className="whyjoin-lists">
          <div className="whyjoin-list">
            <img src={LearnIcon} alt="learn-icon" />
            <span className="list-title">Learn</span>
            <p className="list-desc">
              Learn new technology and share your knowledge with other members.
            </p>
          </div>
          <div className="whyjoin-list">
            <img src={ChallengesIcon} alt="learn-icon" />
            <span className="list-title">Solve Challenges</span>
            <p className="list-desc">
              Develop your understanding on a specific topic or skill by solving
              Challenges and projects.
            </p>
          </div>
          <div className="whyjoin-list">
            <img src={GrowIcon} alt="learn-icon" />
            <span className="list-title">Grow</span>
            <p className="list-desc">
              Apply your knowledge to get internship, contribute to projects and
              participate in hackathon.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
