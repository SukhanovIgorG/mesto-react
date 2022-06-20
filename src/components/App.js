import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import api from "../utils/Api";
import { CurrentUserContext } from "../context/CurrentUserContext";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({
    name: "",
    link: "",
  });
  const [isPopupWithImageOpen, setIsPopupWithImageOpen] = React.useState(false);

  const [currentUser, setCurrentUser] = React.useState({});

  React.useEffect(() => {
    api
      .loadUserInfo()
      .then((userData) => {
        console.log("получен обьект с информацией -" +  userData + userData.name);
        setCurrentUser(userData);
          console.log("загрузили инфу о пользователе - " + currentUser + userData.name)
      })
      .catch((err) => {
        console.log(`ошибка загрузки стартовых данных ${err}`);
      });
  }, []);

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
  }
  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
  }
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(!isAddPlacePopupOpen);
  }

  function handleImageClick(card) {
    setSelectedCard({ name: card.name, link: card.link });
    setIsPopupWithImageOpen(true);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsPopupWithImageOpen(false);
    setSelectedCard({ name: "", link: "" });
  }

  return (
    <div className="App root">
      <CurrentUserContext.Provider value={currentUser} >
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleImageClick}
      />
      <Footer />
      <PopupWithForm
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        name="edit-profile"
        title="Редактировать профиль"
        textButton={"Сохранить"}
      >
        <>
          <input
            className="form__input form__input_type_name"
            id="neme-input"
            type="text"
            name="name"
            placeholder="Введите имя"
            minLength={2}
            maxLength={40}
            required
            autoFocus
          />
          <span className="form__input-error neme-input-error" />
          <input
            className="form__input form__input_type_sign"
            id="sign-input"
            type="text"
            name="sign"
            placeholder="Введите описание"
            minLength={2}
            maxLength={200}
            required
          />
          <span className="form__input-error sign-input-error" />
        </>
      </PopupWithForm>
      <PopupWithForm
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        name="new-place"
        title="Новое место"
        textButton={"Создать"}
      >
        <>
          <input
            className="form__input form__input_type_place"
            id="place-input"
            type="text"
            name="name"
            placeholder="Название"
            minLength={2}
            maxLength={30}
            required
          />
          <span className="form__input-error place-input-error" />
          <input
            className="form__input form__input_type_photo"
            id="link-input"
            type="url"
            name="link"
            placeholder="ссылка на картинку"
            required
          />
          <span className="form__input-error link-input-error" />
        </>
      </PopupWithForm>
      <PopupWithForm
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        name="edit-avatar"
        title="Обновить аватар"
        textButton={"Сохранить"}
      >
        <>
          <input
            className="form__input form__input_type_avatar"
            id="avatar-input"
            type="url"
            name="avatar"
            placeholder="Введите ссылку"
            minLength={2}
            maxLength={100}
            required
            autoFocus
          />
          <span className="form__input-error avatar-input-error" />
        </>
      </PopupWithForm>
      <ImagePopup
        card={selectedCard}
        isOpen={isPopupWithImageOpen}
        onClose={closeAllPopups}
      />
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
