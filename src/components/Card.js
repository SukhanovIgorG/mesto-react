import React from "react";
import { CurrentUserContext } from "../context/CurrentUserContext";

const Card = ({ card, onClick, onCardLike, onCardDelete }) => {
  function handleClick(card) {
    onClick(card);
  }

  function handleCardLike(card) {
    onCardLike(card);
  }

  function handleCardDelete(card) {
    onCardDelete(card);
  }

  const currentUser = React.useContext(CurrentUserContext);

  const isOwn = card.owner._id === currentUser._id;

  const isLiked = card.likes.some((i) => i._id === currentUser._id);

  // Создаём переменную, которую после зададим в `className` для кнопки лайка
  const cardLikeButtonClassName = `card__like ${
    isLiked ? "card__like_active" : ""
  }`;

  // Создаём переменную, которую после зададим в `className` для кнопки удаления
  const cardDeleteButtonClassName = `card__trash ${
    isOwn ? "card__trash_visible" : "card__trash_hidden"
  }`;

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

      <div className="card__info">
        <h2 className="card__title">{card.name}</h2>
        <div className="card__like-box">
          <button
            onClick={() => {
              handleCardLike(card);
            }}
            className={cardLikeButtonClassName}
            type="button"
          />
          <p className="card__like-counter">{card.likes.length}</p>
        </div>
      </div>
      <button
        onClick={() => {
          handleCardDelete(card);
        }}
        className={cardDeleteButtonClassName}
        type="button"
      />
    </li>
  );
};

export default Card;
