import "./herosection.scss";

export default function HeroSection({ scrollToSection }) {
  return (
    <div className="hero-wrapper">
      <div className="hero-inner-wrapper">
        <div className="hero-title-container">
          <span className="hero-title">Students at Opju,</span>
          <br />
          <span className="hero-title">
            <span className="hero-title-bg-style">we invite you</span>{" "}
            <span className="hero-title">to join</span>
          </span>
          <br />
          <span className="hero-title hero-title-bg-style">
            our developers club
          </span>
          <br />
          <span className="hero-desc">It's never too late to start...</span>
        </div>
        <button className="hero-action-btn" onClick={scrollToSection}>
          join the club
        </button>
      </div>
    </div>
  );
}
