import { Popup } from './Popup.js';

export class PopupWithImage extends Popup {
    constructor(selector) {
        super(selector);
        this._popupName = this._popup.querySelector('.popup__name-photo');
        this._popupPhoto = this._popup.querySelector('.popup__photo');

    }

    open(name, link) {
        super.open();
        this._popupName.textContent = name;
        this._popupPhoto.src = link;
        this._popupPhoto.alt = name;
    }
} 