export class Card {
    constructor(value, template, functionForNewCard) {
        this._templateSelector = template;
        this._name = value.name;
        this._link = value.link;
        this.handleCardClick = functionForNewCard.handleCardClick;
        this.likeArr = value.likes.length;
        this.userId = value.owner._id;
        this.openPopupDelete = functionForNewCard.openPopupDelete;
        this.confirmationDelet = functionForNewCard.confirmationDelet;
        this.cardId = value._id;
        this.likeCard = functionForNewCard.likeButton;
        this.deleteLikeButton = functionForNewCard.deleteLikeButton;
        this.setApiDelete = functionForNewCard.setApiDelete;
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
            this._mestoDeleteButton.classList.add('grid__delete_opened')
            this._mestoDeleteButton.addEventListener('click', event => {
                this.openPopupDelete();

                this.confirmationDelet(() => {
                    this.setApiDelete(this.cardId)
                        .then(() => {
                            event.target.closest('.grid__element').remove();
                        })
                        .catch((err) => {
                            console.log(err);
                        });
                })
            })
        }
    }

    _setLikeEventListener = () => {
        this._likeButton.addEventListener('click', () => {
            if (!this._likeButton.classList.contains('grid__button_active')) {
                this._likeButton.classList.add('grid__button_active');
                this.likeCard(this.cardId)
                    .then((res) => this.renewalQuantityLike(res))
                    .catch((err) => {
                        console.log(err);
                      });
            } else {
                this._likeButton.classList.remove('grid__button_active');
                this.deleteLikeButton(this.cardId)
                    .then((res) => this.renewalQuantityLike(res))
                    .catch((err) => {
                        console.log(err);
                      });
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
        this._mestoDeleteButton = this._mestoElement.querySelector('.grid__delete');

        
        this._likeButton = this._mestoElement.querySelector('.grid__like-button');
        this._popupPlacePhoto = document.querySelector('.popup_place_photo');
        this._photoPopup = document.querySelector('.popup__photo');
        this._likeCounter = this._mestoElement.querySelector('.grid__like-kolvo');
        this._gridElement = this._mestoElement.querySelector('.grid__element');

        this._setEventListeners();

        return this._mestoElement;
    }
}