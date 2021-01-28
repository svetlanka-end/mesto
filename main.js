(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function t(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var n=function(){function n(e,o,r){var i=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),t(this,"_getTemplate",(function(){return document.querySelector(i._templateSelector).content.cloneNode(!0)})),t(this,"_setDeleteCardEventListener",(function(){"628398ed1ac027afa1393731"===i.userId&&(i._mestoDeleteButton.classList.add("grid__delete_opened"),i._mestoDeleteButton.addEventListener("click",(function(e){i.openPopupDelete(),i.confirmationDelet((function(){i.setApiDelete(i.cardId).then((function(){e.target.closest(".grid__element").remove()})).catch((function(e){console.log(e)}))}))})))})),t(this,"_setLikeEventListener",(function(){i._likeButton.addEventListener("click",(function(){i._likeButton.classList.contains("grid__button_active")?i.deleteLikeButton(i.cardId).then((function(e){i.renewalQuantityLike(e),i._likeButton.classList.remove("grid__button_active")})).catch((function(e){console.log(e)})):i.likeCard(i.cardId).then((function(e){i.renewalQuantityLike(e),i._likeButton.classList.add("grid__button_active")})).catch((function(e){console.log(e)}))}))})),t(this,"_setPhotoEventListener",(function(){i._mestoPhoto.addEventListener("click",(function(){i.handleCardClick(i._name,i._link)}))})),t(this,"_setEventListeners",(function(){i._setPhotoEventListener(),i._setLikeEventListener(),i._setDeleteCardEventListener(),i._displayQuantityLike(),i._stateLikeButton()})),t(this,"createCard",(function(){return i._mestoElement=i._getTemplate(),i._mestoElement.querySelector(".grid__name").textContent=i._name,i._mestoPhoto=i._mestoElement.querySelector(".grid__photo"),i._mestoPhoto.src=i._link,i._mestoPhoto.alt=i._name,i._popupNamePhoto=document.querySelector(".popup__name-photo"),i._mestoDeleteButton=i._mestoElement.querySelector(".grid__delete"),i._likeButton=i._mestoElement.querySelector(".grid__like-button"),i._popupPlacePhoto=document.querySelector(".popup_place_photo"),i._photoPopup=document.querySelector(".popup__photo"),i._likeCounter=i._mestoElement.querySelector(".grid__like-kolvo"),i._gridElement=i._mestoElement.querySelector(".grid__element"),i._setEventListeners(),i._mestoElement})),this._templateSelector=o,this._name=e.name,this._link=e.link,this.handleCardClick=r.handleCardClick,this.likeArr=e.likes,this.userId=e.owner._id,this.openPopupDelete=r.openPopupDelete,this.confirmationDelet=r.confirmationDelet,this.cardId=e._id,this.likeCard=r.likeButton,this.deleteLikeButton=r.deleteLikeButton,this.setApiDelete=r.setApiDelete}var o,r;return o=n,(r=[{key:"_stateLikeButton",value:function(){var e=this;this.likeArr.forEach((function(t){"628398ed1ac027afa1393731"===t._id&&e._likeButton.classList.add("grid__button_active")}))}},{key:"renewalQuantityLike",value:function(e){this._likeCounter.textContent=e}},{key:"_displayQuantityLike",value:function(){this._likeCounter.textContent=this.likeArr.length}}])&&e(o.prototype,r),n}(),o={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__save",inactiveButtonClass:"popup__save_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"},r=".popup_profile_edit",i=".popup_place_add",a=".popup__save";function c(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var u=function(){function e(t){var n,o,r=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),o=function(e){"Escape"===e.key&&r.close()},(n="_handleEscClose")in this?Object.defineProperty(this,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):this[n]=o,this._popup=document.querySelector(t),this._closeButton=this._popup.querySelector(".popup__close"),this._popupBackground=this._popup.querySelector(".popup__popup-close")}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keyup",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keyup",this._handleEscClose)}},{key:"setEventListeners",value:function(){var e=this;this._closeButton.addEventListener("click",(function(){e.close()})),this._popupBackground.addEventListener("click",(function(){e.close()}))}}])&&c(t.prototype,n),e}();function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function f(e,t,n){return(f="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var o=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=_(e)););return e}(e,t);if(o){var r=Object.getOwnPropertyDescriptor(o,t);return r.get?r.get.call(n):r.value}})(e,t,n||e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function h(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function _(e){return(_=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var d=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(a,e);var t,n,o,r,i=(o=a,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=_(o);if(r){var n=_(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return h(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._buttonСonfirmationDelete=t._popup.querySelector(".popup__save"),t}return t=a,(n=[{key:"deleteCard",value:function(e){this._handleSubmitCallback=e}},{key:"setEventListeners",value:function(){var e=this;this._buttonСonfirmationDelete.addEventListener("click",(function(t){t.preventDefault(),e._handleSubmitCallback(),e.close()})),f(_(a.prototype),"setEventListeners",this).call(this)}}])&&s(t.prototype,n),a}(u);function y(e){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function v(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function b(e,t,n){return(b="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var o=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=E(e)););return e}(e,t);if(o){var r=Object.getOwnPropertyDescriptor(o,t);return r.get?r.get.call(n):r.value}})(e,t,n||e)}function g(e,t){return(g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function k(e,t){return!t||"object"!==y(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function E(e){return(E=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var S=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&g(e,t)}(a,e);var t,n,o,r,i=(o=a,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=E(o);if(r){var n=E(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return k(this,e)});function a(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e))._popupForm=n._popup.querySelector(".popup__form"),n.submitCallback=t,n}return t=a,(n=[{key:"_getInputValues",value:function(){var e,t={},n=function(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return m(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?m(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var o=0,r=function(){};return{s:r,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,c=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return a=e.done,e},e:function(e){c=!0,i=e},f:function(){try{a||null==n.return||n.return()}finally{if(c)throw i}}}}(this._popupForm.getElementsByClassName("popup__input"));try{for(n.s();!(e=n.n()).done;){var o=e.value;t[o.name]=o.value}}catch(e){n.e(e)}finally{n.f()}return t}},{key:"setEventListeners",value:function(){var e=this;b(E(a.prototype),"setEventListeners",this).call(this),this._popupForm.addEventListener("submit",(function(t){e.submitCallback(t,e._getInputValues())}))}},{key:"close",value:function(){this._popupForm.reset(),b(E(a.prototype),"close",this).call(this)}}])&&v(t.prototype,n),a}(u);function C(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function w(e){return(w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function L(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function P(e,t,n){return(P="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var o=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=q(e)););return e}(e,t);if(o){var r=Object.getOwnPropertyDescriptor(o,t);return r.get?r.get.call(n):r.value}})(e,t,n||e)}function O(e,t){return(O=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function j(e,t){return!t||"object"!==w(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function q(e){return(q=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var B=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&O(e,t)}(a,e);var t,n,o,r,i=(o=a,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=q(o);if(r){var n=q(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return j(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._popupName=t._popup.querySelector(".popup__name-photo"),t._popupPhoto=t._popup.querySelector(".popup__photo"),t}return t=a,(n=[{key:"open",value:function(e,t){P(q(a.prototype),"open",this).call(this),this._popupName.textContent=e,this._popupPhoto.src=t,this._popupPhoto.alt=e}}])&&L(t.prototype,n),a}(u);function D(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function R(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var I=function(){function e(t){var n=t.baseUrl,o=t.headers;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.headers=o,this.baseUrl=n,this.authorization=o.authorization}var t,n;return t=e,(n=[{key:"creatingСonstants",value:function(){}},{key:"getProfileValues",value:function(){return fetch("".concat(this.baseUrl,"/users/me"),{headers:{authorization:this.authorization}}).then(this._checkResponse).catch((function(e){console.log(e)}))}},{key:"setUserInfo",value:function(e,t){return fetch("".concat(this.baseUrl,"/users/me"),{method:"PATCH",headers:{authorization:this.authorization,"Content-Type":"application/json"},body:JSON.stringify({name:e,about:t})}).then(this._checkResponse).catch((function(e){console.log(e)}))}},{key:"setNewCard",value:function(e,t){return fetch("".concat(this.baseUrl,"/cards"),{method:"POST",headers:{authorization:this.authorization,"Content-Type":"application/json"},body:JSON.stringify({name:e,link:t})}).then(this._checkResponse).catch((function(e){console.log(e)}))}},{key:"deleteCard",value:function(e){return fetch("".concat(this.baseUrl,"/cards/").concat(e),{method:"DELETE",headers:{authorization:this.authorization}}).catch((function(e){console.log(e)}))}},{key:"likeCard",value:function(e){return fetch("".concat(this.baseUrl,"/cards/likes/").concat(e),{method:"PUT",headers:{authorization:this.authorization}}).then(this._checkResponse).then((function(e){return e.likes.length})).catch((function(e){console.log(e)}))}},{key:"deleteLikeCard",value:function(e){return fetch("".concat(this.baseUrl,"/cards/likes/").concat(e),{method:"DELETE",headers:{authorization:this.authorization}}).then(this._checkResponse).then((function(e){return e.likes.length})).catch((function(e){console.log(e)}))}},{key:"submitNewAvatar",value:function(e){return fetch("".concat(this.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:{authorization:this.authorization,"Content-Type":"application/json"},body:JSON.stringify({avatar:e})}).then(this._checkResponse).catch((function(e){console.log(e)}))}},{key:"getArrCard",value:function(){return fetch("https://mesto.nomoreparties.co/v1/cohort-19/cards",{headers:{authorization:"a29b2060-5a9c-4cf9-ba7c-9a2b349e7a4f"}})}},{key:"_checkResponse",value:function(e){return e.ok?e.json():Promise.reject("Ошибка ".concat(e.status))}}])&&R(t.prototype,n),e}();function T(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function x(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var A=function(){function e(t,n){var o=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),x(this,"_checkValiditiy",(function(e){e.validity.valid?o._hideError(e):o._showError(e,e.validationMessage)})),x(this,"toggleButtonState",(function(){o._hasInvalidInput()?(o._buttonElement.classList.add(o._inactiveButtonClass),o._buttonElement.classList.disabled=!0):(o._buttonElement.classList.remove(o._inactiveButtonClass),o._buttonElement.classList.disabled=!1)})),x(this,"_setEventListeners",(function(){o._inputList=Array.from(o.formElement.querySelectorAll(o._inputSelector)),o._buttonElement=o.formElement.querySelector(o._submitButtonSelector),o._inputList.forEach((function(e){e.addEventListener("input",(function(){o._checkValiditiy(e),o.toggleButtonState()}))}))})),this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._inactiveButtonClass=t.inactiveButtonClass,this._errorClass=t.errorClass,this._inputErrorClass=t.inputErrorClass,this.formElement=n}var t,n;return t=e,(n=[{key:"_showError",value:function(e,t){var n=this.formElement.querySelector("#".concat(e.id,"-error"));n.textContent=t,e.classList.add(this._inputErrorClass),n.classList.add(this._errorClass)}},{key:"_hideError",value:function(e){var t=this.formElement.querySelector("#".concat(e.id,"-error"));t.textContent="",e.classList.remove(this._inputErrorClass),t.classList.remove(this._errorClass)}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"_clearErrors",value:function(){var e=this;Array.from(this.formElement.querySelectorAll(".".concat(this._errorClass))).forEach((function(t){return t.classList.remove(e._errorClass)})),this._inputList.forEach((function(t){return t.classList.remove(e._inputErrorClass)}))}},{key:"resetValidation",value:function(){this._clearErrors(),this.toggleButtonState()}},{key:"enableValidation",value:function(){this.formElement.addEventListener("submit",(function(e){e.preventDefault()})),this._setEventListeners()}}])&&T(t.prototype,n),e}(),U=document.querySelector(".popup__input_type_name"),z=document.querySelector(".popup__input_type_title"),N=document.querySelector(r),V=document.querySelector(".profile__edit-button"),Q=document.querySelector(i),F=document.querySelector(".profile__add-button"),J=document.querySelector(".popup__form_place_add"),H=document.querySelector(".popup__form-editing"),M=N.querySelector(a),$=Q.querySelector(a),G=document.querySelector(".popup__form_place_new-avatar"),K=document.querySelector(".profile__avatar-container"),W=G.querySelector(a),X={handleCardClick:function(e,t){Z.open(e,t)},openPopupDelete:function(){ae.open()},confirmationDelet:function(e){ae.deleteCard(e)},likeButton:function(e){return ee.likeCard(e)},deleteLikeButton:function(e){return ee.deleteLikeCard(e)},setApiDelete:function(e){return ee.deleteCard(e)}};function Y(e){return new n(e,".grid-template",X).createCard()}var Z=new B(".popup_place_photo"),ee=new I({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-19",headers:{authorization:"a29b2060-5a9c-4cf9-ba7c-9a2b349e7a4f","Content-Type":"application/json"}});ee.getProfileValues().then((function(e){ne.setUserInfo(e.name,e.about,e.avatar)})).catch((function(e){console.log(e)}));var te=new function e(t,n){var o=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),C(this,"renderItems",(function(e){e.forEach((function(e){o.addItem(o.renderer(e))}))})),C(this,"addItem",(function(e){o._container.prepend(e)})),this.renderer=t,this._container=document.querySelector(n)}(Y,".grid");ee.getArrCard().then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).then((function(e){te.renderItems(e)})).catch((function(e){console.log(e)}));var ne=new function e(t){var n=this,o=t.nameSelector,r=t.infoSelector,i=t.avatarSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),D(this,"getUserInfo",(function(){return{profileName:n._profileName.textContent,profileInfo:n._profileInfo.textContent}})),D(this,"setUserInfo",(function(e,t,o){n._profileName.textContent=e,n._profileInfo.textContent=t,n._avatarSelector.src=o})),this._profileName=document.querySelector(o),this._profileInfo=document.querySelector(r),this._avatarSelector=document.querySelector(i)}({nameSelector:".profile__first-name",infoSelector:".profile__last-name",avatarSelector:".profile__avatar"}),oe=new S(r,(function(e,t){var n=t.firstname,o=t.lastname;e.preventDefault(),M.textContent="Сохранение...",ee.setUserInfo(n,o).then((function(e){ne.setUserInfo(e.name,e.about,e.avatar),oe.close(),M.textContent="Сохранить"})).catch((function(e){console.log(e)}))})),re=new S(i,(function(e,t){var n=t.mesto,o=t.photo;e.preventDefault(),$.textContent="Создание...",ee.setNewCard(n,o,$).then((function(e){var t=Y(e);te.addItem(t),$.textContent="Сохранить",re.close()})).catch((function(e){console.log(e)}))})),ie=new S(".popup_new-avatar",(function(e,t){var n=t.avatar;e.preventDefault(),W.textContent="Сохранение...",ee.submitNewAvatar(n).then((function(e){ne.setUserInfo(e.name,e.about,e.avatar),ie.close(),W.textContent="Сохранить"})).catch((function(e){console.log(e)}))})),ae=new d(".popup_delete");oe.setEventListeners(),re.setEventListeners(),Z.setEventListeners(),ie.setEventListeners(),ae.setEventListeners(),V.addEventListener("click",(function(){oe.open();var e=ne.getUserInfo();U.value=e.profileName,z.value=e.profileInfo,ce.resetValidation(),ce.toggleButtonState()})),F.addEventListener("click",(function(){re.open(),ue.resetValidation(),ue.toggleButtonState()})),K.addEventListener("click",(function(){ie.open(),le.toggleButtonState()}));var ce=new A(o,H);ce.enableValidation();var ue=new A(o,J);ue.enableValidation();var le=new A(o,G);le.enableValidation()})();