import "./Menu.css";
import MenuCard from "./MenuCard";
import Img0 from "../Images/greek-salad.jpg";
import Img1 from "../Images/bruchetta.jpg";
import Img2 from "../Images/lemon-dessert.jpg";
import Scooter from "../Images/scooter-icon.png";
import { useState } from "react";

const specials = [
  {
    id: 0,
    image: Img0,
    name: "Greek salad",
    price: "$12.99",
    desc: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. ",
    icon: Scooter,
  },
  {
    id: 1,
    image: Img1,
    name: "Bruschetta",
    price: "$5.99",
    desc: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. Toppings of tomato, veggies",
    icon: Scooter,
  },

  {
    id: 2,
    image: Img2,
    name: "Lemon dessert",
    price: "$5.00",
    desc: "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined. You'll absolutely love it.",
    icon: Scooter,
  },
];

function Menu() {
  const [menus] = useState(specials);
  return (
    <section className="menu" id="menu">
      <section className="wrapper">
        <section className="top">
          <h2>This week specials!</h2>
          <a href="#" role="button" className="btn">
            Online menu
          </a>
        </section>
        <section className="menu-category">
          {menus.map((item) => (
            <MenuCard key={item.id} menu={item} />
          ))}
        </section>
      </section>
    </section>
  );
}
export default Menu;
