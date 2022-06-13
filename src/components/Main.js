import React from "react";
import editAvatarIcon from "../image/icon/edit-avatar.svg";
import api from "../utils/Api";

function Main(props) {
  const handleEditProfileClick = props.onEditProfile;
  const handleEditAvatarClick = props.onEditAvatar;
  const handleAddPlaceClick = props.onAddPlace;

  // let userName = "test";
  // let userDescription = "Test";
  // let userAvatar = "https://images.app.goo.gl/g2amFfdbb1EHaTyL8";

  const [userInfo, setUserInfo] = React.useState({
    userName: "user name",
    userDescription: "about",
    userAvatar: "https://images.app.goo.gl/g2amFfdbb1EHaTyL8",
  });

  React.useEffect(() => {
    api.loadUserInfo().then((userData) => {
      setUserInfo(userData)({
        userName: userData.name,
        userDescription: userData.about,
        userAvatar: userData.avatar,
      }).catch((err) => {
        console.log(`ошибка загрузки стартовых данных ${err}`);
      });
    });
  }, [] );

  // const [cards, getInitialCard] = React.useState([]);

  // React.useEffect(() => {
  //   api.getInitialCards().then((cardArray) => {
  //     getInitialCard(cardArray) {
  //       cardArray.array.forEach(element => {
  //         cards.append(    )
  //       });
  //     }
  //     }).catch((err) => {
  //       console.log(`ошибка загрузки стартовых данных ${err}`);
  //     });
  //   });
  // });

  return (
    <main className="content">
      <section className="profile">
        <div
          className="profile__avatar-contein"
          style={{ backgroundImage: `url(${userInfo.userAvatar})` }}
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
          <h1 className="profile__name">{userInfo.userName}</h1>
          <button
            onClick={handleEditProfileClick}
            className="profile__edit-button"
            type="button"
          />
          <p className="profile__sign">{userInfo.userDescription}</p>
        </div>
        <button
          onClick={handleAddPlaceClick}
          className="profile__add-button"
          type="button"
        />
      </section>
      <section aria-label="Список карточек">
        <ul className="cards-list" />
      </section>
    </main>
  );
}

export default Main;
