import { Popup } from './Popup.js';

export class PopupDelete extends Popup {
    constructor(selector) {
        super(selector);
        this._buttonСonfirmationDelete = this._popup.querySelector('.popup__save');
    }

    deleteCard(func) {
        this._handleSubmitCallback = func;
    }
    
    setEventListeners() {
        this._buttonСonfirmationDelete.addEventListener('click', (evt) => {
          evt.preventDefault();
          this._handleSubmitCallback()
          this.close();
        });
    
        super.setEventListeners();
    }
}