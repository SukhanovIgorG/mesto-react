function ImagePopup() {
  return (
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
  )
}

export default ImagePopup
