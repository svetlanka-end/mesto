export class FormValidator {
  constructor(opt, element) {
    this.opt = opt;
    this.formElement = element;
    this._inactiveButtonClass = opt.inactiveButtonClass;
    this._errorClass = opt.errorClass;
    this._inputErrorClass = opt.inputErrorClassActive;
  }

  _showError(input, errorMessage) {
    const error = this.formElement.querySelector(`#${input.id}-error`);
    error.textContent = errorMessage;
    input.classList.add(this._errorClass);
    error.classList.add(this._inputErrorClass);
  }

  _hideError(input) {
    const error = this.formElement.querySelector(`#${input.id}-error`);
    error.textContent = '';
    input.classList.remove(this._errorClass);
    error.classList.remove(this._inputErrorClass);
  }

  _checkValiditiy = (inputElement) => {
    if (!inputElement.validity.valid) {
      this._showError(inputElement, inputElement.validationMessage);
    } else {
      this._hideError(inputElement);
    }
  }

  _hasInvalidInput(inputList) {
    return inputList.some(function (inputElement) {
      return !inputElement.validity.valid;
    })
  }

  _toggleButtonState = (inputList, button) => {
    if (this._hasInvalidInput(inputList)) {
      button.classList.add(this._inactiveButtonClass);
      button.classList.disabled = true;
   } else {
      button.classList.remove(this._inactiveButtonClass);
      button.classList.disabled = false;
   }
  }

  _setEventListeners = () => {
    const inputList = Array.from(this.formElement.querySelectorAll(this.opt.inputSelector));
    const button = this.formElement.querySelector(this.opt.submitButtonSelector);
    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkValiditiy(inputElement);
        this._toggleButtonState(inputList, button);
      });
    })
  }

  enableValidation() {
    this.formElement.addEventListener('submit', function (evt) {
      evt.preventDefault();
    });
    this._setEventListeners();
  }

}