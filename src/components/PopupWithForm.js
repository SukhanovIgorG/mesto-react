function PopupWithForm({ isOpen, onClose, name, title, textButton, children }) {
  function hendleClickCloseButton() {
    onClose();
  }

  return (
    <div
      className={`popup popup_type_${name} ${isOpen && "popup_visible"}`}
      id={`popup_type_${name}`}
    >
      <div className="popup__container popup__container_type_dialog">
        <h2 className="popup__header">{title}</h2>
        <form
          className={`form form_type_${name}`}
          id={`form_type_${name}`}
          name={`form_type_${name}`}
          action="/apply/"
          method="POST"
          noValidate
        >
          {children}
          <button className="form__button form-profile-button" type="submit">
            {textButton}
          </button>
        </form>
        <button
          onClick={hendleClickCloseButton}
          className="popup__close-button"
          type="button"
        />
      </div>
    </div>
  );
}

export default PopupWithForm;
