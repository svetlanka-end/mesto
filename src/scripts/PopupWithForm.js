import { Popup } from './Popup.js';

export class PopupWithForm extends Popup {
    constructor(selector, submitCallback) {
        super(selector);
        this._popupForm = this._popup.querySelector('.popup__form');
        this.submitCallback = submitCallback;
    }

    _getInputValues() {
        const inputList = this._popupForm.getElementsByClassName('popup__input');
        const result = {}

        for (let item of inputList) {
            result[item.name] = item.value;
        }

        return result;
    }

    setEventListeners() {
        super.setEventListeners();
        this._popupForm.addEventListener('submit', (event) => {
            this.submitCallback(event, this._getInputValues());
            this.close();
        })
    }

    close() {
        this._popupForm.reset();
        super.close();
    }
} 