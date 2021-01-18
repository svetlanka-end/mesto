import '../pages/index.css';
import { FormValidator } from '../components/FormValidator.js';
import { Card } from '../components/Card.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { Section } from '../components/Section.js';
import { initialCards } from '../utils/initial-cards.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { UserInfo } from '../components/UserInfo.js';
import { validationOptions, templateDiv } from '../utils/constants.js';

const nameProfile = document.querySelector('.popup__input_type_name');
const infoProfile = document.querySelector('.popup__input_type_title');
const popupEdit = document.querySelector('.popup_profile_edit');
const editButton = document.querySelector('.profile__edit-button');
const popupAdd = document.querySelector('.popup_place_add');
const addPopupButton = document.querySelector('.profile__add-button');
const formAddNewCard = document.querySelector('.popup__form_place_add');
const formEditingName = document.querySelector('.popup__form-editing');
const savePopupEdit = popupEdit.querySelector('.popup__save');
const savePopupAdd = popupAdd.querySelector('.popup__save');

const popupImage = new PopupWithImage('.popup_place_photo');

function handleCardClick(name, link) {
    popupImage.open(name, link);
};

const cardSection = new Section({items: initialCards, 
    renderer: (value) => {
        const card = new Card(value.name, value.link, templateDiv, handleCardClick);
        return card.createCard();
    }}, '.grid');

cardSection.renderItems();

const getInfoProfile = new UserInfo({
    nameSelector: '.profile__first-name',
    infoSelector: '.profile__last-name'
});

const popupProfileEdit = new PopupWithForm('.popup_profile_edit', (event, {firstname, lastname}) => {
    event.preventDefault();
    getInfoProfile.setUserInfo(firstname, lastname);
});

const popupAddCard = new PopupWithForm('.popup_place_add', (event, {mesto, photo}) => {
    const card = new Card(mesto, photo, templateDiv, handleCardClick);
    cardSection.addItem(card.createCard());
});

popupProfileEdit.setEventListeners();
popupAddCard.setEventListeners();
popupImage.setEventListeners();


editButton.addEventListener('click', function() {
    popupProfileEdit.open();
    const info = getInfoProfile.getUserInfo();
    nameProfile.value = info.profileName;
    infoProfile.value = info.profileInfo;
    formEditingNameValidate.resetValidation();
    savePopupEdit.classList.remove('popup__save_disabled')
});

addPopupButton.addEventListener('click', function() {
    popupAddCard.open();
    formAddNewCardValidate.resetValidation();
    savePopupAdd.classList.add('popup__save_disabled');
});

const formEditingNameValidate = new FormValidator(validationOptions, formEditingName);
formEditingNameValidate.enableValidation();
const formAddNewCardValidate = new FormValidator(validationOptions, formAddNewCard);
formAddNewCardValidate.enableValidation();