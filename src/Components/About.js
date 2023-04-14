import "./About.css";
import Picture from "../Images/adrian-mario.png";

function About() {
  return (
    <section className="about" id="about">
      <section className="wrapper about-contents">
        <aside>
          <h1>Little Lemon</h1>
          <h3>Chicago</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standardLorem Ipsum is
            simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standardLorem Ipsum is simply dummy
            text of the printing and typesetting industry.
          </p>
        </aside>
        <aside>
          <img src={Picture} alt="picture of Adrian and Mario" />
        </aside>
      </section>
    </section>
  );
}

export default About;
