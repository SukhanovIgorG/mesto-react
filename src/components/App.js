import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
  const [isEditProfilePopupOpen, hendleStateProfileInfo] = React.useState();
  const [isAddPlacePopupOpen, hendleStateNewPlace] = React.useState();
  const [isEditAvatarPopupOpen, hendleStateProfileAvatar] = React.useState();
  // const [isConfirmPopupOpen, hendleConfirmTrash] = React.useState();
  // const [selectedCard, setSelectedCard] = React.useState();
  const [selectedCard, setSelectedCard] = React.useState({ name: '', link: '' });
  const [isPopupWithImageOpen, hendlePopupWithImage] = React.useState(false);

  function handleEditProfileClick() {
    hendleStateProfileInfo(!isEditProfilePopupOpen);
  }
  function handleEditAvatarClick() {
    hendleStateProfileAvatar(!isEditAvatarPopupOpen);
  }
  function handleAddPlaceClick() {
    hendleStateNewPlace(!isAddPlacePopupOpen);
  }

  function handleImageClick(card) {
    setSelectedCard({ name: card.name, link: card.link });
    hendlePopupWithImage(true);
  }
  // function handleTrashCard() {
  //   hendleConfirmTrash(!isConfirmPopupOpen);
  // }
  // function closeAllPopups () {};

  function closeAllPopups() {
    console.log('функция closeAllPopup в App')
    hendleStateProfileInfo(false);
    hendleStateNewPlace(false);
    hendleStateProfileAvatar(false);
    // hendleConfirmTrash(false);
    hendlePopupWithImage(false);
    setSelectedCard({ name: "", link: "" });

  }

  return (
    <div className="App root">
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleImageClick}
      />
      <Footer />
      {isEditProfilePopupOpen ? (
        <PopupWithForm
          onClose={closeAllPopups}
          name="edit-profile"
          title="Редактировать профиль"
          popupContent={
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
              <button
                className="form__button form-profile-button"
                type="submit"
              >
                Сохранить
              </button>
            </>
          }
        />
      ) : (
        ""
      )}
      {isAddPlacePopupOpen ? (
        <PopupWithForm
          name="new-place"
          title="Новое место"
          onClose={closeAllPopups}
          popupContent={
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
              <button className="form__button form-place-button" type="submit">
                Создать
              </button>
            </>
          }
        />
      ) : (
        ""
      )}
      {isEditAvatarPopupOpen ? (
        <PopupWithForm
          onClose={closeAllPopups}
          name="edit-avatar"
          title="Обновить аватар"
          popupContent={
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
              <button
                className="form__button form-profile-button"
                type="submit"
              >
                Сохранить
              </button>
            </>
          }
        />
      ) : (
        ""
      )}

      <ImagePopup card={selectedCard} isOpen={isPopupWithImageOpen} onClose={closeAllPopups} />


      {/* 
{isConfirmPopupOpen ? (
        <PopupWithForm
          name="confirm-trash"
          title="Вы уверены?"
          popupContent={
            <>
            <button
              className="form__button form-confirm-trash-button"
              type="submit"
            >
              да
            </button>
            </>
          }
        />
      ) : (
        ""
      )} */}

      {/* <div className="popup popup_type_photo" id="popup_type_photo">
        <div className="popup__container popup__container_type_photo">
          <button
            className="popup__close-button popup__close-button_type_photo"
            type="button"
          />
          <img
            className="popup__img"
            id="popup__img"
            src="#"
            alt="увеличенное изображение"
          />
          <p className="popup__photo-title">Подпись к изображению</p>
        </div>
      </div> */}
    </div>
  );
}

export default App;
