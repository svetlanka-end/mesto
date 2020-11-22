let popup = document.querySelector('.popup');
let popupCloseButton = document.querySelector('.popup__close');
let editButton = document.querySelector('.profile__edit-button');
let firstName = document.querySelector('.profile__first-name');
let lastName = document.querySelector('.profile__last-name');
let form = document.querySelector('.popup__form');
let nameFieled = document.querySelector('.popup__input_type_name');
let lastFieles = document.querySelector('.popup__input_type_title');
let saveButton = document.querySelector('.popup__save');

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

function showPopup () {
    popup.classList.add('popup_opened');
    nameFieled.value = firstName.textContent;
    lastFieles.value = lastName.textContent;
}

function closePopup () {
    popup.classList.remove('popup_opened');
}

editButton.addEventListener('click', showPopup);
popupCloseButton.addEventListener('click', closePopup);

function submitForm (event) {
    event.preventDefault();
    firstName.textContent = nameFieled.value;
    lastName.textContent = lastFieles.value;
    closePopup();
}

form.addEventListener('submit', submitForm);

const mestoList = document.querySelector('.grid');
const mestoTemplate = document.querySelector('.grid-tamplate').content;

const popupPhoto = document.querySelector('.popup-photo');
const closePhoto = document.querySelector('.popup-photo__close')

function addMesto(item) {
    const mestoElement = mestoTemplate.cloneNode(true);
    
    mestoElement.querySelector('.grid__name').textContent = item.name;
    mestoElement.querySelector('.grid__photo').src = item.link;

    const mestoDelete = mestoElement.querySelector('.grid__delete');

    mestoDelete.addEventListener('click', event => {
        const mesto = event.target.closest('.grid__element');

        if (mesto) {
            mesto.remove()
        }
    });
    
    const likeButton = mestoElement.querySelector('.grid__like-button');

    likeButton.addEventListener('click', function() {
        likeButton.classList.toggle('grid__button_active');
    });

    const mestoPhoto = mestoElement.querySelector('.grid__photo');

    mestoPhoto.addEventListener('click', function() {
        popupPhoto.classList.add('popup-photo_active');
        const photo = document.querySelector('.popup-photo__photo');
        photo.src = item.link;
        const name = document.querySelector('.popup-photo__name');
        name.textContent = item.name;
    });

    mestoList.prepend(mestoElement);
} 

closePhoto.addEventListener('click', function() {
    popupPhoto.classList.remove('popup-photo_active');
});


initialCards.forEach(addMesto);

let popupAdd = document.querySelector('.popup-add');
let popupAddCloseButton = document.querySelector('.popup-add__close');
let addPopupButton = document.querySelector('.profile__add-button');

function showPopupAdd () {
    popupAdd.classList.add('popup-add_opened');
}

function closePopupAdd () {
    popupAdd.classList.remove('popup-add_opened');
    nameAdd.value = null;
    photoAdd.value = null;
}

addPopupButton.addEventListener('click', showPopupAdd);
popupAddCloseButton.addEventListener('click', closePopupAdd);

let formAdd = document.querySelector('.popup-add__form');
let nameAdd = document.querySelector('.popup-add__input_type_name');
let photoAdd = document.querySelector('.popup-add__input_type_photo');

function submitFormAdd (event) {
    event.preventDefault();
    
    let item = {
        name: nameAdd.value,
        link: photoAdd.value
    }

    addMesto(item);

    closePopupAdd();
}

formAdd.addEventListener('submit', submitFormAdd);