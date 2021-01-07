import { FormValidator } from './validate.js'
import { Card } from './Card.js'

const popupEdit = document.querySelector('.popup_place_edit');
const popupCloseButton = document.querySelector('.popup__close');
const editButton = document.querySelector('.profile__edit-button');
const firstName = document.querySelector('.profile__first-name');
const lastName = document.querySelector('.profile__last-name');
const form = document.querySelector('.popup__form');
const nameFieled = document.querySelector('.popup__input_type_name');
const lastFieles = document.querySelector('.popup__input_type_title');
const mestoList = document.querySelector('.grid');
const popupAdd = document.querySelector('.popup_place_add');
const popupAddCloseButton = document.querySelector('.popup__close_place_add');
const addPopupButton = document.querySelector('.profile__add-button');
const formAdd = document.querySelector('.popup__form_place_add');
const nameAdd = document.querySelector('.popup__input_type_name-add');
const photoAdd = document.querySelector('.popup__input_type_photo-add');
const popupBackground = document.querySelectorAll('.popup__popup-close');
const popupArray = document.querySelectorAll('.popup');
const formOne = document.querySelector('.popup__form1');
const validationOptions = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__save',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
}

const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
]; 

function closeEsc(evt) {
    if (evt.key === "Escape") {
        popupArray.forEach((item) => {
            closePopup(item);
        })
    }
}

function showPopup (popup) {
    popup.classList.add('popup_opened');
    document.addEventListener('keydown', closeEsc);
}

function closePopup (popup) {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', closeEsc);
}

function resetError(popup) {
    popup.querySelectorAll('.input-error').forEach((item) => {
        item.textContent = '';
    })
    popup.querySelectorAll('.popup__input').forEach((item) => {
        item.classList.remove('popup__input_type_error');
    })
}

editButton.addEventListener('click', function() {
    showPopup(popupEdit);
    nameFieled.value = firstName.textContent;
    lastFieles.value = lastName.textContent;
    resetError(popupEdit);
});

popupCloseButton.addEventListener('click', function() {
    closePopup(popupEdit);
});

function submitForm (event) {
    event.preventDefault();
    firstName.textContent = nameFieled.value;
    lastName.textContent = lastFieles.value;
    closePopup(popupEdit);
}

form.addEventListener('submit', submitForm);

/**
 *  добавление карточек
 */

function addCard(container, cardElement) {
    container.prepend(cardElement);
}



addPopupButton.addEventListener('click', function() {
    showPopup(popupAdd);
    formAdd.reset();
    resetError(popupAdd);
    popupAdd.querySelector('.popup__save').classList.add('popup__button_disabled');
});

popupAddCloseButton.addEventListener('click', function() {
    closePopup(popupAdd);
});

/**
 * форма отправления новой карточки
 */

function submitFormAdd (event) {
    event.preventDefault();

    const item = {
        name: nameAdd.value,
        link: photoAdd.value
    }

    addCard(mestoList, add(item.name, item.link));

    closePopup(popupAdd);
    formAdd.reset();
}

function add(name, link) {
    const card = new Card(name, link, '.grid-tamplate');
    return card.createCard();
}



formAdd.addEventListener('submit', submitFormAdd);

popupBackground.forEach((item) => {
    item.addEventListener('click', () => {
        popupArray.forEach((item) => {
            closePopup(item);
        })
    })
})

initialCards.forEach((value) => addCard(mestoList, add(value.name, value.link, '.grid-tamplate')));

const form1 = new FormValidator(validationOptions, formOne);
form1.enableValidation();
const form2 = new FormValidator(validationOptions, formAdd);
form2.enableValidation();