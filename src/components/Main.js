import React from "react";
import { CurrentUserContext } from "../context/CurrentUserContext";
import editAvatarIcon from "../image/icon/edit-avatar.svg";
import api from "../utils/Api";
import Card from "./Card";

function Main(props) {
  const handleEditProfileClick = props.onEditProfile;
  const handleEditAvatarClick = props.onEditAvatar;
  const handleAddPlaceClick = props.onAddPlace;

  const currentUser = React.useContext(CurrentUserContext);
  console.log("в мейн пришел конткст - " + currentUser);

  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api
      .getInitialCards()
      .then((data) => {
        setCards(data);
      })
      .catch((err) => {
        console.log(`ошибка загрузки стартовых данных ${err}`);
      });
  }, []);

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    !isLiked ? (api.addLike(card).then((newCard) => {
        setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
    })) 
      :
    (api.removeLike(card).then((newCard) => {
        setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
    }));
    // Отправляем запрос в API и получаем обновлённые данные карточки
  } 

  function handleCardDelete(card) {
    api.trashCard(card).then((newCard)=> {
      console.log(cards);
      setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
    })
  }

// ??????????????????????????????????????????????????????????

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
          {cards.map((card) => (
            <Card
              onCardLike={handleCardLike}
              onCardDelite={handleCardDelete}
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
