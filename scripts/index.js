import { FormValidator } from './FormValidator.js'
import { Card } from './Card.js'

const popupEdit = document.querySelector('.popup_profile_edit');
const popupEditCloseButton = document.querySelector('.popup__close_place_edit');
const editButton = document.querySelector('.profile__edit-button');
const firstName = document.querySelector('.profile__first-name');
const lastName = document.querySelector('.profile__last-name');
const form = document.querySelector('.popup__form');
const nameField = document.querySelector('.popup__input_type_name');
const lastFieles = document.querySelector('.popup__input_type_title');
const mestoList = document.querySelector('.grid');
const popupAdd = document.querySelector('.popup_place_add');
const popupAddCloseButton = document.querySelector('.popup__close_place_add');
const popupPhotoCloseButton = document.querySelector('.popup__close_place_photo');
const addPopupButton = document.querySelector('.profile__add-button');
const formAddNewCard = document.querySelector('.popup__form_place_add');
const nameAdd = document.querySelector('.popup__input_type_name-add');
const photoAdd = document.querySelector('.popup__input_type_photo-add');
const popupBackground = document.querySelectorAll('.popup__popup-close');
const popupArray = document.querySelectorAll('.popup');
const formEditingName = document.querySelector('.popup__form-editing');
const validationOptions = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__save',
    inactiveButtonClass: 'popup__save_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible',
    inputErrorClassActive: 'popup__input-error_active'
}
const ESCAPE = "Escape";
const popupInput = ".popup__input";
const popupInputError = "popup__input_type_error";
const templateDiv = '.grid-template';
const popupPhoto = document.querySelector('.popup_place_photo');

function closeEsc(evt) {
    if (evt.key === ESCAPE) {
        popupArray.forEach((item) => {
            closePopup(item);
        })
    }
}

function showPopup (popup) {
    popup.classList.add('popup_opened');
    document.addEventListener('keyup', closeEsc);
}

function closePopup (popup) {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keyup', closeEsc);
}

function resetError(popup) {
    popup.querySelectorAll('.input-error').forEach((item) => {
        item.textContent = '';
    })
    popup.querySelectorAll(popupInput).forEach((item) => {
        item.classList.remove(popupInputError);
    })
}

editButton.addEventListener('click', function() {
    showPopup(popupEdit);
    nameField.value = firstName.textContent;
    lastFieles.value = lastName.textContent;
    resetError(popupEdit);
    popupEdit.querySelector('.popup__save').classList.remove('popup__save_disabled')
});

popupEditCloseButton.addEventListener('click', function() {
    closePopup(popupEdit);
});

popupPhotoCloseButton.addEventListener('click', function() {
    closePopup(popupPhoto);
});

function submitProfileFormHandler (event) {
    event.preventDefault();
    firstName.textContent = nameField.value;
    lastName.textContent = lastFieles.value;
    closePopup(popupEdit);
}

form.addEventListener('submit', submitProfileFormHandler);

/**
 *  добавление карточек
 */

function addCard(container, cardElement) {
    container.prepend(cardElement);
}



addPopupButton.addEventListener('click', function() {
    showPopup(popupAdd);
    formAddNewCard.reset();
    resetError(popupAdd);
    popupAdd.querySelector('.popup__save').classList.add('popup__save_disabled');
});

popupAddCloseButton.addEventListener('click', function() {
    closePopup(popupAdd);
});

/**
 * форма отправления новой карточки
 */

function submitFormAdd (event) {
    event.preventDefault();

    addCard(mestoList, createNewCard(nameAdd.value, photoAdd.value, templateDiv));

    closePopup(popupAdd);
    formAddNewCard.reset();
}

function createNewCard(name, link, template) {
    const card = new Card(name, link, template);
    return card.createCard();
}



formAddNewCard.addEventListener('submit', submitFormAdd);

popupBackground.forEach((item) => {
    item.addEventListener('click', () => {
        popupArray.forEach((item) => {
            closePopup(item);
        })
    })
})

initialCards.forEach((value) => addCard(mestoList, createNewCard(value.name, value.link, templateDiv)));

const formEditingNameValidate = new FormValidator(validationOptions, formEditingName);
formEditingNameValidate.enableValidation();
const formAddNewCardValidate = new FormValidator(validationOptions, formAddNewCard);
formAddNewCardValidate.enableValidation();