import { FormValidator } from './FormValidator';

export class FormAddNewCardValidate extends FormValidator {
    constructor(opt, element, savePopupAdd) {
        super(opt, element);
        this._savePopupAdd = savePopupAdd
    }

    doButtonDisalead() {
        this._savePopupAdd.classList.add('popup__save_disabled');
    }
}