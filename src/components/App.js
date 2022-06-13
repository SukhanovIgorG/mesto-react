import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";

function App() {
  const [isEditProfilePopupOpen, hendleStateProfileInfo] = React.useState();
  const [isAddPlacePopupOpen, hendleStateNewPlace] = React.useState();
  const [isEditAvatarPopupOpen, hendleStateProfileAvatar] = React.useState();
  // const [isConfirmPopupOpen, hendleConfirmTrash] = React.useState();

  function handleEditProfileClick() {
    hendleStateProfileInfo(!isEditProfilePopupOpen);
  }
  function handleEditAvatarClick() {
    hendleStateProfileAvatar(!isEditAvatarPopupOpen);
  }
  function handleAddPlaceClick() {
    hendleStateNewPlace(!isAddPlacePopupOpen);
  }
  // function handleTrashCard() {
  //   hendleConfirmTrash(!isConfirmPopupOpen);
  // }
  // function closeAllPopups () {};

  return (
    <div className="App root">
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
      />
      <Footer />
      {isEditProfilePopupOpen ? (
        <PopupWithForm
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
            <button className="form__button form-profile-button" type="submit">
              Сохранить
            </button>
            </>
          }
        />
      ) : (
        ""
      )}
      {isAddPlacePopupOpen ? (
        <PopupWithForm name="new-place" title="Новое место" popupContent={
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
        } />
      ) : (
        ""
      )}
      {isEditAvatarPopupOpen ? (
        <PopupWithForm
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
            <button className="form__button form-profile-button" type="submit">
              Сохранить
            </button>
            </>
          }
        />
      ) : (
        ""
      )}
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


      <div className="popup popup_type_photo" id="popup_type_photo">
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
      </div>

      <template className="template">
        <li className="card">
          <img className="card__image" src="#" alt="название" />
          <button className="card__trash" type="button"></button>
          <div className="card__info">
            <h2 className="card__title">Название</h2>
            <div className="card__like-box">
              <button className="card__like" type="button"></button>
              <p className="card__like-counter">0</p>
            </div>
          </div>
        </li>
      </template>
    </div>
  );
}

export default App;
