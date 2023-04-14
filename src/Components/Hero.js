import HeroImg from "../Images/hero.png";
import "./Hero.css";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero">
      <section className="wrapper">
        <aside>
          <h1>Little Lemon</h1>
          <h3>Chicago</h3>
          <p>
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <Link to="/booking" role="button" className="btn">
            Book a table
          </Link>
        </aside>
        <aside>
          <img src={HeroImg} alt="Little lemon" />
        </aside>
      </section>
    </section>
  );
}

export default Hero;
