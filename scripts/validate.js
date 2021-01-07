export class FormValidator {
  constructor(opt, fElement) {
    this.opt = opt;
    this.formElem = fElement;
  }

  _showError(form, input, errorMessage) {
    const error = form.querySelector(`#${input.id}-error`);
    error.textContent = errorMessage;
    input.classList.add('popup__input_type_error');
    error.classList.add('popup__input-error_active');
  }

  _hideError(form, input) {
    const error = form.querySelector(`#${input.id}-error`);
    error.textContent = '';
    input.classList.remove('popup__input_type_error');
    error.classList.remove('popup__input-error_active');
  }

  _checkValiditiy = (formElement, inputElement) => {
    if (!inputElement.validity.valid) {
      this._showError(formElement, inputElement, inputElement.validationMessage);
    } else {
      this._hideError(formElement, inputElement);
    }
  }

  _hasInvalidInput(inputList) {
    return inputList.some(function (inputElement) {
      return !inputElement.validity.valid;
    })
  }

  _toggleButtonState = (inputList, button) => {
    if (this._hasInvalidInput(inputList)) {
      button.classList.add('popup__button_disabled');
   } else {
      button.classList.remove('popup__button_disabled');
   }
  }

  _setEventListeners = (formElement, opt) => {
    const inputList = Array.from(formElement.querySelectorAll(opt.inputSelector));
    const button = formElement.querySelector(opt.submitButtonSelector);
    this._toggleButtonState(inputList, button);
    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkValiditiy(formElement, inputElement);
        this._toggleButtonState(inputList, button);
      });
    })
  }

  _buttonDisabled = (formElement, opt) => {
    const button = formElement.querySelector(opt.submitButtonSelector);
    button.classList.add('popup__button_disabled');
  }

  enableValidation() {
    const {opt, _buttonDisabled} = this;
    const formElement = this.formElem;
    formElement.addEventListener('submit', function (evt) {
      evt.preventDefault();
      _buttonDisabled(formElement, opt);
    });
    this._setEventListeners(formElement, opt);
  }

}