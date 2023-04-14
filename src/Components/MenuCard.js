import "./MenuCard.css";

function MenuCard({ menu }) {
  return (
    <section className="menu-card">
      <img src={menu.image} alt={`${menu.name} picture`} />
      <div className="menu-card-content">
        <div className="menu-card-header">
          <h3>{menu.name}</h3>
          <p>{menu.price}</p>
        </div>
        <p>{menu.desc}</p>
        <div className="menu-card-footer">
          <a href="#" role="button">
            Order a delivery
          </a>
          <a href="#" role="button">
            <img src={menu.icon} alt="scooter icon" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default MenuCard;
