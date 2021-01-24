export class Api {
    constructor({baseUrl, headers}) {
        this.headers = headers;
        this.baseUrl = baseUrl;
        this.authorization = headers.authorization;
    }

    creatingСonstants() {}

    getProfileValues() {
        return fetch(`${this.baseUrl}/users/me`, {
          headers: {
            authorization: this.authorization
          }
        })
        .then(this._checkResponse)
          .catch((err) => {
            console.log(err);
          }); 
    }

    setUserInfo(newName, newInfo) {
        return fetch(`${this.baseUrl}/users/me`, {
          method: 'PATCH',
          headers: {
            authorization: this.authorization,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name: newName,
            about: newInfo
          })
        })
        .then(this._checkResponse)
        .catch((err) => {
            console.log(err);
          }); 
    }

    setNewCard(name, link) {
        return fetch(`${this.baseUrl}/cards`, {
          method: 'POST',
          headers: {
            authorization: this.authorization,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name: name,
            link: link
          })
        })
        .then(this._checkResponse)
        .catch((err) => {
            console.log(err);
          }); 
    }

    deleteCard(cardId) {
        return fetch(`${this.baseUrl}/cards/${cardId}`, {
            method: 'DELETE',
            headers: {
              authorization: this.authorization
            }
          })
          .catch((err) => {
            console.log(err);
          }); 
    }

    likeCard(cardId) {
        return fetch(`${this.baseUrl}/cards/likes/${cardId}`, {
            method: 'PUT',
            headers: {
              authorization: this.authorization
            }
          })
          .then(this._checkResponse)
          .then((result) => {
              return result.likes.length;
          })
          .catch((err) => {
            console.log(err);
          }); 
    }

    deleteLikeCard(cardId) {
        return fetch(`${this.baseUrl}/cards/likes/${cardId}`, {
            method: 'DELETE',
            headers: {
              authorization: this.authorization
            }
          })
          .then(this._checkResponse)
          .then((result) => {
              return result.likes.length;
          })
          .catch((err) => {
            console.log(err);
          }); 
    }

    submitNewAvatar(link) {
        return fetch(`${this.baseUrl}/users/me/avatar`, {
            method: 'PATCH',
            headers: {
              authorization: this.authorization,
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              avatar: link
            })
          })
          .then(this._checkResponse)
          .catch((err) => {
            console.log(err);
          }); 
    }

    getArrCard() {
      return fetch('https://mesto.nomoreparties.co/v1/cohort-19/cards', {
            headers: {
            authorization: 'a29b2060-5a9c-4cf9-ba7c-9a2b349e7a4f'
            }
        })
    }

    _checkResponse(res) {
      if (res.ok) {
          return res.json();
      }
      return Promise.reject(`Ошибка ${res.status}`);
  }

}