export class Card {
    constructor(nameCard, linkCard, template, handleCardClick) {
        this._templateSelector = template;
        this._name = nameCard;
        this._link = linkCard;
        this.handleCardClick = handleCardClick;
    }

    _getTemplate = () => {
        const cardElement = document
        .querySelector(this._templateSelector)
        .content
        .cloneNode(true);
    
        return cardElement;
    }
  
    _setDeleteCardEventListener = () => {
          this._mestoDelete.addEventListener('click', event => {
          event.target.closest('.grid__element').remove();
        });
    }

    _setLikeEventListener = () => {
            this._likeButton.addEventListener('click', () => {
            this._likeButton.classList.toggle('grid__button_active');
        });
    }

    _setPhotoEventListener = () => {
        this._mestoPhoto.addEventListener('click', () => {
            this.handleCardClick(this._name, this._link);
        });
    }

    _setEventListeners = () => {
        this._setPhotoEventListener();
        this._setLikeEventListener();
        this._setDeleteCardEventListener();
    }

    createCard = () => {
        this._mestoElement = this._getTemplate();
        this._mestoElement.querySelector('.grid__name').textContent = this._name;
        this._mestoPhoto = this._mestoElement.querySelector('.grid__photo');
        this._mestoPhoto.src = this._link;
        this._mestoPhoto.alt = this._name;
        this._popupNamePhoto = document.querySelector('.popup__name-photo');

        this._mestoDelete = this._mestoElement.querySelector('.grid__delete');
        this._likeButton = this._mestoElement.querySelector('.grid__like-button');
        this._popupPlacePhoto = document.querySelector('.popup_place_photo');
        this._photoPopup = document.querySelector('.popup__photo');

        this._setEventListeners();

        return this._mestoElement;
    }
}