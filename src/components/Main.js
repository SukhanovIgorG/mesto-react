import React from "react";
import { CurrentUserContext } from "../context/CurrentUserContext";
import editAvatarIcon from "../image/icon/edit-avatar.svg";
import Card from "./Card";

function Main(props) {
  const handleEditProfileClick = props.onEditProfile;
  const handleEditAvatarClick = props.onEditAvatar;
  const handleAddPlaceClick = props.onAddPlace;
  const currentUser = React.useContext(CurrentUserContext);

  return (
    <main className="content">
      <section className="profile">
        <div
          className="profile__avatar-contein"
          style={{ backgroundImage: `url(${currentUser.avatar})` }}
        >
          <div className="profile__avatar-edit">
            <img
              onClick={handleEditAvatarClick}
              className="profile__avatar-edit-button"
              src={editAvatarIcon}
              alt="кнопка редактирования аватара"
            />
          </div>
        </div>
        <div className="profile__info">
          <h1 className="profile__name">{currentUser.name}</h1>
          <button
            onClick={handleEditProfileClick}
            className="profile__edit-button"
            type="button"
          />
          <p className="profile__sign">{currentUser.about}</p>
        </div>
        <button
          onClick={handleAddPlaceClick}
          className="profile__add-button"
          type="button"
        />
      </section>
      <section aria-label="Список карточек">
        <ul className="cards-list">
          {props.cards.map((card) => (
            <Card
              onCardLike={props.onCardLike}
              onCardDelete={props.onCardDelete}
              card={card}
              key={card._id}
              onClick={(card) => {
                props.onCardClick(card);
              }}
            />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
