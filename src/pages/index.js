import '../pages/index.css';
import { FormValidator } from '../components/FormValidator.js';
import { Card } from '../components/Card.js';
import { PopupDelete } from '../components/PopupDelete.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { Section } from '../components/Section.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { UserInfo } from '../components/UserInfo.js';
import { Api } from '../components/Api.js';
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
const formNewAvatar = document.querySelector('.popup__form_place_new-avatar');
const profileAvatar = document.querySelector('.profile__avatar-container');
const newAvatarSave = formNewAvatar.querySelector('.popup__save');

const profilAvatar = document.querySelector('.profile__avatar');
const profilName = document.querySelector('.profile__first-name');
const profilInfo = document.querySelector('.profile__last-name');

function likeButton(cardId) {
    return api.likeCard(cardId);
}

function deleteLikeButton(cardId) {
    return api.deleteLikeCard(cardId);
}

export function confirmationDelet(cardId, event) {
    popupDelete.setDeleteCard(cardId, event);
}

export function openPopupDelete() {
    popupDelete.open()
}

const popupImage = new PopupWithImage('.popup_place_photo');

export function handleCardClick(name, link) {
    popupImage.open(name, link);
};

const api = new Api({
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-19',
    headers: {
      authorization: 'a29b2060-5a9c-4cf9-ba7c-9a2b349e7a4f',
      'Content-Type': 'application/json'
    }
});

api.getProfileValues()
    .then((result) => {
       profilName.textContent = result.name;
       profilInfo.textContent = result.about;
       profilAvatar.src = result.avatar;
     });

export const cardSection = new Section({ 
    renderer: (value) => {
        const card = new Card(value.name, value.link, templateDiv, handleCardClick, value.likes.length, value.owner._id, openPopupDelete, confirmationDelet, value._id, likeButton, deleteLikeButton);
        return card.createCard();
    }}, '.grid');

cardSection.renderItems();

const getInfoProfile = new UserInfo({
    nameSelector: '.profile__first-name',
    infoSelector: '.profile__last-name'
});

const popupProfileEdit = new PopupWithForm('.popup_profile_edit', (event, {firstname, lastname}) => {
    event.preventDefault();
    savePopupEdit.textContent = 'Сохранение...';
    api.setUserInfo(firstname, lastname)
        .then((result) => {
            profilName.textContent = result.name;
            profilInfo.textContent = result.about;
            profilAvatar.src = result.avatar;
            popupProfileEdit.close();
            savePopupEdit.textContent = 'Сохранить';
          });
});

const popupAddCard = new PopupWithForm('.popup_place_add', (event, {mesto, photo}) => {
    event.preventDefault();
    savePopupAdd.textContent = 'Сохранение...';
    api.setNewCard(mesto, photo, savePopupAdd)
        .then((result) => {
            const card = new Card(result.name, result.link, templateDiv, handleCardClick, result.likes.length,
                result.owner._id, openPopupDelete, confirmationDelet, result._id, likeButton, deleteLikeButton);
            cardSection.addItem(card.createCard());
            savePopupAdd.textContent = 'Сохранить';
            popupAddCard.close();
        })
});

const popupNewAvatar = new PopupWithForm('.popup_new-avatar', (event, {avatar}) => {
    event.preventDefault();
    newAvatarSave.textContent = 'Сохранение...';
    api.submitNewAvatar(avatar, newAvatarSave);
    document.querySelector('.profile__avatar').src = avatar;
})

const popupDelete = new PopupDelete('.popup_delete', (cardId) => {
    api.deleteCard(cardId);
});

popupProfileEdit.setEventListeners();
popupAddCard.setEventListeners();
popupImage.setEventListeners();
popupNewAvatar.setEventListeners();
popupDelete.setEventListeners();


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

profileAvatar.addEventListener('click', function() {
    popupNewAvatar.open();
    newAvatarSave.classList.add('popup__save_disabled');
});

const formEditingNameValidate = new FormValidator(validationOptions, formEditingName);
formEditingNameValidate.enableValidation();
const formAddNewCardValidate = new FormValidator(validationOptions, formAddNewCard);
formAddNewCardValidate.enableValidation();
const formNewAvatarValidate = new FormValidator(validationOptions, formNewAvatar);
formNewAvatarValidate.enableValidation();