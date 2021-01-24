import { FormValidator } from './FormValidator';

export class FormNewAvatarValidate extends FormValidator {
    constructor(opt, element, savePopupAdd) {
        super(opt, element);
        this._savePopupAdd = savePopupAdd
    }

    doButtonDisalead() {
        this._savePopupAdd.classList.add('popup__save_disabled');
    }
}