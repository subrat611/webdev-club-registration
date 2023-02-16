import "./herosection.scss";

export default function HeroSection({ scrollToSection }) {
  return (
    <div className="hero-wrapper">
      <div className="hero-inner-wrapper">
        <div>
          <span className="hero-title">Students at Opju</span>
          <br />
          <span className="hero-title">
            are <span className="hero-title-bg-style">invited</span>
          </span>
          <br />
          <span className="hero-title">
            to join a{" "}
            <span className="hero-title-bg-style">web developers club</span>
          </span>
          <br />
          <span className="hero-desc">It is never too late to start...</span>
        </div>
        <button className="hero-action-btn" onClick={scrollToSection}>
          join the club
        </button>
      </div>
    </div>
  );
}
