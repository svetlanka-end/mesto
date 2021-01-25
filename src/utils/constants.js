const ESCAPE = "Escape";
const validationOptions = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__save',
    inactiveButtonClass: 'popup__save_disabled',
    inputErrorClass: 'popup__input_type_error', 
    errorClass: 'popup__error_visible',
}

const selectorPopupInputTypeName = '.popup__input_type_name';
const selectorPopupInputTypeTitle = '.popup__input_type_title';
const selectorPopupProfileEdit = '.popup_profile_edit';
const selectorPopupAddCard = '.popup_place_add';
const selectorProfileEditButton = '.profile__edit-button';
const selectorProfileAddButton = '.profile__add-button';
const selectorPopupAddCardForm = '.popup__form_place_add';
const selectorPopupEditForm = '.popup__form-editing';
const selectorPopupSaveButton = '.popup__save';
const selectorPopupNewAvatarForm = '.popup__form_place_new-avatar';
const selectorPopupNewAvatarContainer = '.profile__avatar-container';

const templateDiv = '.grid-template';

export { ESCAPE, validationOptions, templateDiv, selectorPopupInputTypeName, selectorPopupInputTypeTitle, selectorPopupProfileEdit,
    selectorProfileEditButton, selectorProfileAddButton, selectorPopupAddCardForm, selectorPopupEditForm, 
    selectorPopupSaveButton, selectorPopupNewAvatarForm, selectorPopupNewAvatarContainer, selectorPopupAddCard};