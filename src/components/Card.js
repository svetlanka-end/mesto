export class Card {
    constructor(nameCard, linkCard, template, handleCardClick, likeArr, userId, openPopupDelete, confirmationDelet, cardId, likeCard, deleteLikeButton) {
        this._templateSelector = template;
        this._name = nameCard;
        this._link = linkCard;
        this.handleCardClick = handleCardClick;
        this.likeArr = likeArr;
        this.userId = userId;
        this.openPopupDelete = openPopupDelete;
        this.confirmationDelet = confirmationDelet;
        this.cardId = cardId;
        this.likeCard = likeCard;
        this.deleteLikeButton = deleteLikeButton;
    }

    _getTemplate = () => {
        const cardElement = document
        .querySelector(this._templateSelector)
        .content
        .cloneNode(true);
    
        return cardElement;
    }
  
    _setDeleteCardEventListener = () => {
        const myId = '628398ed1ac027afa1393731';
        if (this.userId === myId) {
            const buttonDelete = document
                .querySelector('.delete-temlate')
                .content
                .cloneNode(true);
            this._mestoElement.querySelector('.grid__element').prepend(buttonDelete);
            this._mestoDelete = this._mestoElement.querySelector('.grid__delete');
            this._mestoDelete.addEventListener('click', event => {
                this.openPopupDelete();
                this.confirmationDelet(this.cardId, event);
            });
        }
    }

    _setLikeEventListener = () => {
        this._likeButton.addEventListener('click', () => {
            if (!this._likeButton.classList.contains('grid__button_active')) {
                this._likeButton.classList.add('grid__button_active');
                this.likeCard(this.cardId)
                    .then((res) => this.renewalQuantityLike(res));
            } else {
                this._likeButton.classList.remove('grid__button_active');
                this.deleteLikeButton(this.cardId)
                    .then((res) => this.renewalQuantityLike(res));
            }
        })
    }

    renewalQuantityLike(quantityLike) {
        this._likeCounter.textContent = quantityLike;
    }

    _setPhotoEventListener = () => {
        this._mestoPhoto.addEventListener('click', () => {
            this.handleCardClick(this._name, this._link);
        });
    }

    _displayQuantityLike() {
        this._likeCounter.textContent = this.likeArr;
    }

    _setEventListeners = () => {
        this._setPhotoEventListener();
        this._setLikeEventListener();
        this._setDeleteCardEventListener();
        this._displayQuantityLike();
    }

    createCard = () => {
        this._mestoElement = this._getTemplate();
        this._mestoElement.querySelector('.grid__name').textContent = this._name;
        this._mestoPhoto = this._mestoElement.querySelector('.grid__photo');
        this._mestoPhoto.src = this._link;
        this._mestoPhoto.alt = this._name;
        this._popupNamePhoto = document.querySelector('.popup__name-photo');

        
        this._likeButton = this._mestoElement.querySelector('.grid__like-button');
        this._popupPlacePhoto = document.querySelector('.popup_place_photo');
        this._photoPopup = document.querySelector('.popup__photo');
        this._likeCounter = this._mestoElement.querySelector('.grid__like-kolvo');
        this._gridElement = this._mestoElement.querySelector('.grid__element');

        this._setEventListeners();

        return this._mestoElement;
    }
}