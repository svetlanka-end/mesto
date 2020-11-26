const popupEdit = document.querySelector('.popup_place_edit');
const popupCloseButton = document.querySelector('.popup__close');
const editButton = document.querySelector('.profile__edit-button');
const firstName = document.querySelector('.profile__first-name');
const lastName = document.querySelector('.profile__last-name');
const form = document.querySelector('.popup__form');
const nameFieled = document.querySelector('.popup__input_type_name');
const lastFieles = document.querySelector('.popup__input_type_title');

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

function showPopup (popup) {
    popup.classList.add('popup_opened');
}

function closePopup (popup) {
    popup.classList.remove('popup_opened');
}

editButton.addEventListener('click', function() {
    showPopup(popupEdit);
    nameFieled.value = firstName.textContent;
    lastFieles.value = lastName.textContent;
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
 * создание и добавление карточек
 */

const mestoList = document.querySelector('.grid');
const mestoTemplate = document.querySelector('.grid-tamplate').content;
const popupPhoto = document.querySelector('.popup_place_photo');
const closePhoto = document.querySelector('.popup__close_place_photo')

function createCard(name, link) {
    const mestoElement = mestoTemplate.cloneNode(true);
    
    mestoElement.querySelector('.grid__name').textContent = name;
    mestoElement.querySelector('.grid__photo').src = link;

    const mestoDelete = mestoElement.querySelector('.grid__delete');
    mestoDelete.addEventListener('click', event => {
        event.target.closest('.grid__element').remove()
    });
    
    const likeButton = mestoElement.querySelector('.grid__like-button');
    likeButton.addEventListener('click', function() {
        likeButton.classList.toggle('grid__button_active');
    });

    const mestoPhoto = mestoElement.querySelector('.grid__photo');
    mestoPhoto.addEventListener('click', function() {
        showPopup(popupPhoto);
        const photo = document.querySelector('.popup__photo');
        photo.src = link;
        const namePhoto = document.querySelector('.popup__name-photo');
        namePhoto.textContent = name;
    });

    return mestoElement;
} 

function addCard(container, cardElement) {
    container.prepend(cardElement);
}

initialCards.forEach((value) => addCard(mestoList, createCard(value.name, value.link)));

/**
 * попап фото
 */

closePhoto.addEventListener('click', function() {
    closePopup(popupPhoto);
});

const popupAdd = document.querySelector('.popup_place_add');
const popupAddCloseButton = document.querySelector('.popup__close_place_add');
const addPopupButton = document.querySelector('.profile__add-button');

addPopupButton.addEventListener('click', function() {
    showPopup(popupAdd);
    formAdd.reset();
});

popupAddCloseButton.addEventListener('click', function() {
    closePopup(popupAdd);
});

/**
 * форма отправления новой карточки
 */

const formAdd = document.querySelector('.popup__form_place_add');
const nameAdd = document.querySelector('.popup__input_type_name-add');
const photoAdd = document.querySelector('.popup__input_type_photo-add');

function submitFormAdd (event) {
    event.preventDefault();

    const item = {
        name: nameAdd.value,
        link: photoAdd.value
    }

    addCard(mestoList, createCard(item.name, item.link));
    closePopup(popupAdd);
    formAdd.reset();
}

formAdd.addEventListener('submit', submitFormAdd);

const close = document.querySelectorAll('.popup__close');
const popup = document.querySelectorAll('.popup');