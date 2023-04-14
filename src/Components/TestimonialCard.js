import "./TestimonialCard.css";

function TestimoniaCard({ data }) {
  return (
    <section className="testimonial-card">
      <div>
        <div className="testimonial-card-header">
          <p>Score&nbsp; </p>
          <img src={data.rating} alt={data.ratingText} />
        </div>
        <div className="testimonial-card-content">
          <img src={data.avatar} alt={`${data.name} profile image`} />
          <p>{data.name}</p>
        </div>
        <p className="testimonial-card-comment">{data.comment}</p>
      </div>
    </section>
  );
}

export default TestimoniaCard;
