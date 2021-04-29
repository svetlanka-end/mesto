import '../pages/index.css';
import { Card } from '../components/Card.js';
import { PopupDelete } from '../components/PopupDelete.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { Section } from '../components/Section.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { UserInfo } from '../components/UserInfo.js';
import { Api } from '../components/Api.js';
import { validationOptions, templateDiv, selectorPopupInputTypeName, selectorPopupInputTypeTitle, selectorPopupProfileEdit,
    selectorProfileEditButton, selectorProfileAddButton, selectorPopupAddCardForm, selectorPopupEditForm, 
    selectorPopupSaveButton, selectorPopupNewAvatarForm, selectorPopupNewAvatarContainer, selectorPopupAddCard} from '../utils/constants.js';
import { FormValidator } from '../components/FormValidator.js';

const nameProfile = document.querySelector(selectorPopupInputTypeName);
const infoProfile = document.querySelector(selectorPopupInputTypeTitle);
const popupEdit = document.querySelector(selectorPopupProfileEdit);
const editButton = document.querySelector(selectorProfileEditButton);
const popupAdd = document.querySelector(selectorPopupAddCard);
const addPopupButton = document.querySelector(selectorProfileAddButton);
const formAddNewCard = document.querySelector(selectorPopupAddCardForm);
const formEditingName = document.querySelector(selectorPopupEditForm);
const savePopupEdit = popupEdit.querySelector(selectorPopupSaveButton);
const savePopupAdd = popupAdd.querySelector(selectorPopupSaveButton);
const formNewAvatar = document.querySelector(selectorPopupNewAvatarForm);
const profileAvatar = document.querySelector(selectorPopupNewAvatarContainer);
const newAvatarSave = formNewAvatar.querySelector(selectorPopupSaveButton);

fetch(`https://vtbunker.geecko.ru/connect-door`, {
            method: 'POSTMEN',
            headers: {
              authorization: 8080
            }
    .then((res) => {
        console.log(res)});

function likeButton(cardId) {
    return api.likeCard(cardId);
}

function deleteLikeButton(cardId) {
    return api.deleteLikeCard(cardId);
}

function confirmationDelet(func) {
    popupDelete.deleteCard(func);
}

function openPopupDelete() {
    popupDelete.open()
}

function setApiDelete(cardId) {
    return api.deleteCard(cardId)
}

const functionForNewCard = {
    handleCardClick,
    openPopupDelete,
    confirmationDelet,
    likeButton,
    deleteLikeButton,
    setApiDelete
}

function createCard(value) {
    const card = new Card(value, templateDiv, functionForNewCard);
    return card.createCard();
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
        getInfoProfile.setUserInfo(result.name, result.about, result.avatar)
     })
     .catch((err) => {
        console.log(err);
     });

const cardSection = new Section(createCard, '.grid');

api.getArrCard()
    .then(res => {
        if (res.ok) {
          return res.json();
        } else {
            return Promise.reject(`Ошибка: ${res.status}`);
        }
    })
    .then((result) => {
        cardSection.renderItems(result);
    })
    .catch((err) => {
        console.log(err);
    });

const getInfoProfile = new UserInfo({
    nameSelector: '.profile__first-name',
    infoSelector: '.profile__last-name',
    avatarSelector: '.profile__avatar'
});

const popupProfileEdit = new PopupWithForm(selectorPopupProfileEdit, (event, {firstname, lastname}) => {
    event.preventDefault();
    savePopupEdit.textContent = 'Сохранение...';
    api.setUserInfo(firstname, lastname)
        .then((result) => {
            getInfoProfile.setUserInfo(result.name, result.about, result.avatar)
            popupProfileEdit.close();
            savePopupEdit.textContent = 'Сохранить';
          })
        .catch((err) => {
          console.log(err);
        });
});

const popupAddCard = new PopupWithForm(selectorPopupAddCard, (event, {mesto, photo}) => {
    event.preventDefault();
    savePopupAdd.textContent = 'Создание...';
    api.setNewCard(mesto, photo, savePopupAdd)
        .then((result) => {
            const card = createCard(result);
            cardSection.addItem(card);
            savePopupAdd.textContent = 'Сохранить';
            popupAddCard.close();
        })
        .catch((err) => {
            console.log(err);
          });
});

const popupNewAvatar = new PopupWithForm('.popup_new-avatar', (event, {avatar}) => {
    event.preventDefault();
    newAvatarSave.textContent = 'Сохранение...';
    api.submitNewAvatar(avatar)
        .then((result) => {
            getInfoProfile.setUserInfo(result.name, result.about, result.avatar);
            popupNewAvatar.close();
            newAvatarSave.textContent = 'Сохранить';
        })
        .catch((err) => {
            console.log(err);
        }); 
})

const popupDelete = new PopupDelete('.popup_delete');

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
    formEditingNameValidate.toggleButtonState();
});

addPopupButton.addEventListener('click', function() {
    popupAddCard.open();
    formAddNewCardValidate.resetValidation();
    formAddNewCardValidate.toggleButtonState();
});

profileAvatar.addEventListener('click', function() {
    popupNewAvatar.open();
    formNewAvatarValidate.toggleButtonState();
});

const formEditingNameValidate = new FormValidator(validationOptions, formEditingName);
formEditingNameValidate.enableValidation();
const formAddNewCardValidate = new FormValidator(validationOptions, formAddNewCard);
formAddNewCardValidate.enableValidation();
const formNewAvatarValidate = new FormValidator(validationOptions, formNewAvatar);
formNewAvatarValidate.enableValidation();