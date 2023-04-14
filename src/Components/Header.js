import Logo from "../Images/logo.png";
import Menu from "../Images/hamburger-menu.png";
import "./Header.css";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
function Header() {
  const [hide, setHide] = useState(true);
  const ref = useRef();

  useEffect(() => {
    if (hide === false) {
      ref.current.style.width = "200px";
      ref.current.style.padding = "50px 20px";
      ref.current.style.visibility = "visible";
    } else {
      ref.current.style.width = "0";
      ref.current.style.padding = "50px 0";
      ref.current.style.visibility = "hidden";
    }
  }, [hide]);

  return (
    <>
      <header className="mobile-header">
        <div className="wrapper">
          <img src={Logo} alt="logo" />
          <img
            src={Menu}
            alt="Hamburger menu icon"
            onClick={() => setHide(!hide)}
          />
        </div>

        <nav ref={ref} className="mobile-nav">
          <div>
            <button onClick={() => setHide(!hide)}>&times;</button>
          </div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <HashLink to="/#about">About</HashLink>
            </li>
            <li>
              <HashLink to="/#menu">Menu</HashLink>
            </li>
            <li>
              <Link to="/booking">Reservation</Link>
            </li>
            <li>
              <a href="/#order">Order Online</a>
            </li>
            <li>
              <a href="/login">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
      <header className="desktop-header">
        <nav className="wrapper desktop-nav">
          <img src={Logo} alt="logo" />
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <HashLink to="/#about">About</HashLink>
            </li>
            <li>
              <HashLink to="/#menu">Menu</HashLink>
            </li>
            <li>
              <Link to="/booking">Reservation</Link>
            </li>
            <li>
              <a href="/#order">Order Online</a>
            </li>
            <li>
              <a href="/login">Login</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
