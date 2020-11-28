const showError = (form, input, errorMessage) => {
    const error = form.querySelector(`#${input.id}-error`);
    error.textContent = errorMessage;
    input.classList.add('popup__input_type_error');
    error.classList.add('popup__input-error_active');
};

const hideError = (form, input) => {
    const error = form.querySelector(`#${input.id}-error`);
    error.textContent = '';
    input.classList.remove('popup__input_type_error');
    error.classList.remove('popup__input-error_active');
};

const checkValiditiy = (formElement, inputElement) => {
    if (!inputElement.validity.valid) {
        showError(formElement, inputElement, inputElement.validationMessage);
    } else {
        hideError(formElement, inputElement);
    }
  };

function hasInvalidInput(inputList) {
    return inputList.some(function (inputElement) {
      return !inputElement.validity.valid;
    })
  }

function toggleButtonState(inputList, button) {
    if (hasInvalidInput(inputList)) {
        button.classList.add('popup__button_disabled');
   } else {
        button.classList.remove('popup__button_disabled');
   } 
}

const setEventListeners = (formElement, opt) => {
    const inputList = Array.from(formElement.querySelectorAll(opt.inputSelector));
    const button = formElement.querySelector(opt.submitButtonSelector);
    toggleButtonState(inputList, button);
    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', function () {
        checkValiditiy(formElement, inputElement);
        toggleButtonState(inputList, button);
      });
    })
};

function buttonDisabled(formElement, opt) {
    const button = formElement.querySelector(opt.submitButtonSelector);
    button.classList.add('popup__button_disabled');
}

const enableValidation = (opt) => {
    const formList = Array.from(document.querySelectorAll(opt.formSelector));
    formList.forEach((formElement) => {
      formElement.addEventListener('submit', function (evt) {
        evt.preventDefault();
        buttonDisabled(formElement, opt);
      });
      formList.forEach((fieldSet) => {
      setEventListeners(fieldSet, opt);
      }); 
    });
};

enableValidation({
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__save',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
}); 


