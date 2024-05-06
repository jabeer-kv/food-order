function Restocard(props) {
  const { name, cat, img,rat} = props;
  return (
    <div  className="resto-card">
      <div>
        <img
          className="resto-img"
          src={img}
          alt=""
        />
      </div>
      <div className="resto-info">
        <h3 className="food-name">{name}</h3>
        <p className="discription">{cat}</p>
        <p className="rating">{rat}</p>
      </div>
      <div className="resto-btn">
        <button className="order-button">order now</button>
      </div>
    </div>
  );
}
export default Restocard;
