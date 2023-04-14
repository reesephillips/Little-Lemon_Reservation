import ImageLeft from "../Images/table-left.png";
import ImageRight from "../Images/table-right.png";
import "./BookingHero.css";

function BookingHero() {
  return (
    <section className="booking-hero">
      <section className="wrapper">
        <aside>
          <h1>Little Lemon</h1>
          <h3>Chicago</h3>
          <p>Reserve a table for your favorite occasion.</p>
        </aside>
        <aside>
          <img src={ImageLeft} alt="Little lemon" />
          <img src={ImageRight} alt="Little lemon" />
        </aside>
      </section>
    </section>
  );
}

export default BookingHero;
