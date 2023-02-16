import HeroSection from "../../components/HeroSection";
import NavBar from "../../components/NavBar";
import Register from "../../components/Register";

export default function HomePage() {
  return (
    <div className="homepage-wrapper">
      <NavBar />
      <HeroSection />
      <Register />
    </div>
  );
}
