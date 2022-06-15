const Card = ({ card, onClick }) => {
  function handleClick(card) {
    onClick(card);
  }

  return (
    <li className="card" id={card._id}>
      <img
        onClick={() => {
          handleClick(card);
        }}
        className="card__image"
        src={card.link}
        alt={card.name}
      />
      <button className="card__trash" type="button" />
      <div className="card__info">
        <h2 className="card__title">{card.name}</h2>
        <div className="card__like-box">
          <button className="card__like" type="button" />
          <p className="card__like-counter">{card.likes.length}</p>
        </div>
      </div>
    </li>
  );
};

export default Card;
