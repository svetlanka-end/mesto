import { FormValidator } from './FormValidator.js';
import { Card } from './Card.js';
import { PopupWithForm } from './PopupWithForm.js';
import { Section } from './Section.js';
import { initialCards } from './initial-cards.js';
import { PopupWithImage } from './PopupWithImage.js';
import { UserInfo } from './UserInfo.js';
import { nameProfile, infoProfile, popupEdit,
        editButton, popupAdd, addPopupButton, formAddNewCard,
        formEditingName, validationOptions, templateDiv } from './constants.js';


const PopupImage = new PopupWithImage('.popup_place_photo');

function handleCardClick(name, link) {
    PopupImage.open(name, link);
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
PopupImage.setEventListeners();


editButton.addEventListener('click', function() {
    popupProfileEdit.open();
    const info = getInfoProfile.getUserInfo();
    nameProfile.value = info.profileName;
    infoProfile.value = info.profileInfo;
    formEditingNameValidate.resetValidation();
    popupEdit.querySelector('.popup__save').classList.remove('popup__save_disabled')
});

addPopupButton.addEventListener('click', function() {
    popupAddCard.open();
    formAddNewCardValidate.resetValidation();
    popupAdd.querySelector('.popup__save').classList.add('popup__save_disabled');
});

const formEditingNameValidate = new FormValidator(validationOptions, formEditingName);
formEditingNameValidate.enableValidation();
const formAddNewCardValidate = new FormValidator(validationOptions, formAddNewCard);
formAddNewCardValidate.enableValidation();