import { Popup } from './Popup.js';

export class PopupDelete extends Popup {
    constructor(selector, callbackPopupDelete) {
        super(selector);
        this._buttonСonfirmationDelete = this._popup.querySelector('.popup__save');
        this.callbackPopupDelete = callbackPopupDelete;
    }

    setDeleteCard(cardId, event) {
        this._buttonСonfirmationDelete.addEventListener('click', () => {
            this.callbackPopupDelete(cardId);
            this.close();
            event.target.closest('.grid__element').remove();
        })
    }
}