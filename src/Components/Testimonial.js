import { useState } from "react";
import "./Testimonial.css";
import TestimoniaCard from "./TestimonialCard";
import Avatar0 from "../Images/anna.png";
import Avatar1 from "../Images/jim.png";
import Avatar2 from "../Images/emma.png";
import Avatar3 from "../Images/max.png";
import Rating0 from "../Images/star0.png";
import Rating1 from "../Images/star1.png";
import Rating2 from "../Images/star2.png";
import Rating3 from "../Images/star3.png";

const testimoniesObj = [
  {
    id: 0,
    rating: Rating0,
    ratingText: "4",
    avatar: Avatar0,
    name: "Anna Effiong",
    comment: "Great service. I love it!",
  },
  {
    id: 1,
    rating: Rating1,
    ratingText: "5",
    avatar: Avatar1,
    name: "Charles Jim",
    comment: "Good food & service.",
  },
  {
    id: 2,
    rating: Rating2,
    ratingText: "4",
    avatar: Avatar2,
    name: "Emma Yi",
    comment: "Simply delicious meals",
  },
  {
    id: 3,
    rating: Rating3,
    ratingText: "5",
    avatar: Avatar3,
    name: "Max Joel",
    comment: "My favorite restaurant.",
  },
];
function Testimonial() {
  const [testimonies] = useState(testimoniesObj);
  return (
    <section className="testimonial">
      <section className="wrapper">
        <h1>Testimonials</h1>
        <section className="testimonial-cards">
          {testimonies.map((item) => (
            <TestimoniaCard key={item.id} data={item} />
          ))}
        </section>
      </section>
    </section>
  );
}

export default Testimonial;
