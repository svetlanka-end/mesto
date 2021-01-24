import { FormValidator } from './FormValidator';

export class FormEditingNameValidate extends FormValidator {
    constructor(opt, element, savePopupAdd) {
        super(opt, element);
        this._savePopupAdd = savePopupAdd
    }

    doButtonDisalead() {
        this._savePopupAdd.classList.remove('popup__save_disabled');
    }
}