const ESCAPE = "Escape";
const nameProfile = document.querySelector('.popup__input_type_name');
const infoProfile = document.querySelector('.popup__input_type_title');
const popupEdit = document.querySelector('.popup_profile_edit');
const editButton = document.querySelector('.profile__edit-button');
const popupAdd = document.querySelector('.popup_place_add');
const addPopupButton = document.querySelector('.profile__add-button');
const formAddNewCard = document.querySelector('.popup__form_place_add');
const formEditingName = document.querySelector('.popup__form-editing');
const validationOptions = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__save',
    inactiveButtonClass: 'popup__save_disabled',
    inputErrorClass: 'popup__input_type_error', 
    errorClass: 'popup__error_visible',
}

const templateDiv = '.grid-template';

export { ESCAPE, nameProfile, infoProfile, popupEdit,  editButton, popupAdd, addPopupButton, formAddNewCard, formEditingName, validationOptions, templateDiv};