export class Card {
    constructor(nameCard, linkCard, template) {
        this._templateSelector = template;
        this._name = nameCard;
        this._link = linkCard;
    }

    _getTemplate = () => {
        const cardElement = document
        .querySelector(this._templateSelector)
        .content
        .cloneNode(true);
    
        return cardElement;
    }
  
    _handleDeleteCard = () => {
          this._mestoDelete.addEventListener('click', event => {
          event.target.closest('.grid__element').remove();
        });
    }

    _likeEventListenner = () => {
            this._likeButton.addEventListener('click', () => {
            this._likeButton.classList.toggle('grid__button_active');
        });
    }

    _photoEventListenner = () => {
        this._mestoPhoto.addEventListener('click', () => {
            this._showPopup();
        });
    }

    _showPopup = () => {
        document.querySelector('.popup__name-photo').textContent = this._name;
        document.querySelector('.popup__photo').src = this._link;
        document.querySelector('.popup__photo').alt = this._name;
        this._popupPlacePhoto.classList.add('popup_opened');
        document.addEventListener('keyup', this._closeEsc);
    }

    _closePopup = () => {
        this._popupPlacePhoto.classList.remove('popup_opened');
        document.removeEventListener('keyup', this._closeEsc);
    }

    _closeEventListenner = () => {
        document.querySelector('.popup__close_place_photo').addEventListener('click', () => {
            this._closePopup();
        });
    }

    _closeEsc = (evt) => {
        if (evt.key === "Escape") {
                this._closePopup();
        }
    }

    _setEventListeners = () => {
        this._photoEventListenner();
        this._likeEventListenner();
        this._handleDeleteCard();
        this._closeEventListenner();
    }

    createCard = () => {
        this._mestoElement = this._getTemplate();
        this._mestoElement.querySelector('.grid__name').textContent = this._name;
        this._mestoPhoto = this._mestoElement.querySelector('.grid__photo');
        this._mestoPhoto.src = this._link;

        this._mestoDelete = this._mestoElement.querySelector('.grid__delete');
        this._likeButton = this._mestoElement.querySelector('.grid__like-button');
        this._popupPlacePhoto = document.querySelector('.popup_place_photo');

        this._setEventListeners();

        return this._mestoElement;
    }
}