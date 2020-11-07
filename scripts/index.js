let popup = document.querySelector('.popup');
let popupCloseButton = document.querySelector('.popup__close');
let editButton = document.querySelector('.profile__edit-buttom');
let firstName = document.querySelector('.profile__first-name');
let lastName = document.querySelector('.profile__last-name');
let form = document.querySelector('.popup__form');
let nameFieled = document.querySelector('.popup__input_type_name');
let lastFieles = document.querySelector('.popup__input_type_title');

function showPopup () {
    popup.classList.add('popup_opened');
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
}

form.addEventListener('submit', submitForm);

