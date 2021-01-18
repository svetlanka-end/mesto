export class FormValidator {
  constructor(opt, element) {
    this._inputSelector = opt.inputSelector;
    this._submitButtonSelector = opt.submitButtonSelector;
    this._inactiveButtonClass = opt.inactiveButtonClass;
    this._errorClass = opt.errorClass;
    this._inputErrorClass = opt.inputErrorClass;
    this.formElement = element;
  }

    _showError(input, errorMessage) {
      const error = this.formElement.querySelector(`#${input.id}-error`);
      error.textContent = errorMessage;
      input.classList.add(this._inputErrorClass);
      error.classList.add(this._errorClass);
    }

    _hideError(input) {
      const error = this.formElement.querySelector(`#${input.id}-error`);
      error.textContent = '';
      input.classList.remove(this._inputErrorClass);
      error.classList.remove(this._errorClass);
    }

  _checkValiditiy = (inputElement) => {
    if (!inputElement.validity.valid) {
      this._showError(inputElement, inputElement.validationMessage);
    } else {
      this._hideError(inputElement);
    }
  }

  _hasInvalidInput() {
    return this._inputList.some(function (inputElement) {
      return !inputElement.validity.valid;
    })
  }

  _toggleButtonState = () => {
    if (this._hasInvalidInput()) {
      this._buttonElement.classList.add(this._inactiveButtonClass);
      this._buttonElement.classList.disabled = true;
   } else {
      this._buttonElement.classList.remove(this._inactiveButtonClass);
      this._buttonElement.classList.disabled = false;
   }
  }

  _setEventListeners = () => {
    this._inputList = Array.from(this.formElement.querySelectorAll(this._inputSelector));
    this._buttonElement = this.formElement.querySelector(this._submitButtonSelector);
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkValiditiy(inputElement);
        this._toggleButtonState();
      });
    })
  }

  _clearErrors() {
    const errorElements = Array.from(this.formElement.querySelectorAll(`.${this._errorClass}`));
    errorElements.forEach(errorItem => errorItem.classList.remove(this._errorClass));
    this._inputList.forEach(inputItem => inputItem.classList.remove(this._inputErrorClass));
  }

  resetValidation (){
    this._clearErrors();
    this._toggleButtonState();
  }

  enableValidation() {
    this.formElement.addEventListener('submit', function (evt) {
      evt.preventDefault();
    });
    this._setEventListeners();
  }

}