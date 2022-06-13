import React from "react";

function PopupWithForm(props) {
  let popupContent = props.popupContent;
  const [onClose, handlePopupClose] = React.useState();

  function hendleClickCloseButton() {
    handlePopupClose(!onClose);
  }

  return (
    <div
      // className={`popup popup_type_${props.name}`}
      className={ onClose ? `popup popup_type_${props.name}` : `popup popup_type_${props.name} popup_visible`}
      id={`popup_type_${props.name}`}
    >
      <div className="popup__container popup__container_type_dialog">
        <h2 className="popup__header">{props.title}</h2>
        <form
          className={`form form_type_${props.name}`}
          id={`form_type_${props.name}`}
          name={`form_type_${props.name}`}
          action="/apply/"
          method="POST"
          noValidate
        >
          {popupContent}
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
