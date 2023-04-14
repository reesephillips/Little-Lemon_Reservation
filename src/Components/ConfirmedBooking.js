import { Link } from "react-router-dom";
import BookingHero from "./BookingHero";
import Footer from "./Footer";

function ConfirmedBooking() {
  const pStyles = {
    fontWeight: "500",
    fontSize: "18px",
    margin: "40px 0",
  };

  const hStyles = {
    fontFamily: "Markazi Text",
    fontWeight: "500",
    fontSize: "64px",
  };

  const dStyles = {
    margin: "100px 0 200px 0",
  };

  return (
    <>
      {/*<BookingHero /> */}
      <hr />
      <section className="wrapper">
        <div style={dStyles}>
          <h1 style={hStyles}>Thanks</h1>
          <p style={pStyles}>
            Your reservation is now complete. You'll receive an email from us
            shortly. <br /> <br />
            We look forward to welcoming you to our restaurant.
            <br /> <br />
            Regards,
          </p>
          <Link className="btn" to="/">
            Home
          </Link>
        </div>
      </section>
    </>
  );
}

export default ConfirmedBooking;
