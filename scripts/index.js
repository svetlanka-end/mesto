const popup = document.querySelector('.popup');
const popupCloseButton = document.querySelector('.popup__close');
const editButton = document.querySelector('.profile__edit-button');
const firstName = document.querySelector('.profile__first-name');
const lastName = document.querySelector('.profile__last-name');
const form = document.querySelector('.popup__form');
const nameFieled = document.querySelector('.popup__input_type_name');
const lastFieles = document.querySelector('.popup__input_type_title');
const saveButton = document.querySelector('.popup__save');

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

function showPopup (popupAll) {
    popupAll.classList.add('popup_opened');
}

function closePopup (popupAll) {
    popupAll.classList.remove('popup_opened');
}

editButton.addEventListener('click', function() {
    showPopup(popup);
    nameFieled.value = firstName.textContent;
    lastFieles.value = lastName.textContent;
});

popupCloseButton.addEventListener('click', function() {
    closePopup(popup);
});

function submitForm (event) {
    event.preventDefault();
    firstName.textContent = nameFieled.value;
    lastName.textContent = lastFieles.value;
    closePopup(popup);
}

form.addEventListener('submit', submitForm);

const mestoList = document.querySelector('.grid');
const mestoTemplate = document.querySelector('.grid-tamplate').content;

const popupPhoto = document.querySelector('.popup-photo');
const closePhoto = document.querySelector('.popup-photo__close')

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
        const photo = document.querySelector('.popup-photo__photo');
        photo.src = link;
        const name = document.querySelector('.popup-photo__name');
        name.textContent = name;
    });

    return mestoElement;
} 

function addCard(container, cardElement) {
    container.prepend(cardElement);
}

initialCards.forEach((value) => addCard(mestoList, createCard(value.name, value.link)));

closePhoto.addEventListener('click', function() {
    closePopup(popupPhoto);
    formAdd.reset();
});

const popupAdd = document.querySelector('.popup-add');
const popupAddCloseButton = document.querySelector('.popup-add__close');
const addPopupButton = document.querySelector('.profile__add-button');

addPopupButton.addEventListener('click', function() {
    showPopup(popupAdd);
});

popupAddCloseButton.addEventListener('click', function() {
    closePopup(popupAdd);
    formAdd.reset();
});

const formAdd = document.querySelector('.popup-add__form');
const nameAdd = document.querySelector('.popup-add__input_type_name');
const photoAdd = document.querySelector('.popup-add__input_type_photo');

function submitFormAdd (event) {
    event.preventDefault();

    let item = {
        name: nameAdd.value,
        link: photoAdd.value
    }

    addCard(mestoList, createCard(item.name, item.link));
    closePopup(popupAdd);
    formAdd.reset();
}

formAdd.addEventListener('submit', submitFormAdd);