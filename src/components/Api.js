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
        .then(res => {
            if (res.ok) {
              return res.json();
            } else {
            return Promise.reject(`Ошибка: ${res.status}`)
        }})
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
        .then((res) => {
            if (res.ok) {
                return res.json();
            } else return Promise.reject(`Ошибка: ${res.status}`);
        })
        .catch((err) => {
            console.log(err);
          }); 
    }

    setNewCard(name, link, savePopupAdd) {
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
        .then((res) => {
            if (res.ok) {
                return res.json();
            } else return Promise.reject(`Ошибка: ${res.status}`);
        })
        .catch((err) => {
            console.log(err);
          }); 
    }

    deleteCard(cardId) {
        fetch(`${this.baseUrl}/cards/${cardId}`, {
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
          .then(res => {
            if (res.ok) {
              return res.json();
            } else {
                return Promise.reject(`Ошибка: ${res.status}`);
            }
          })
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
          .then(res => {
            if (res.ok) {
              return res.json();
            } else {
                return Promise.reject(`Ошибка: ${res.status}`);
            }
          })
          .then((result) => {
              return result.likes.length;
          })
          .catch((err) => {
            console.log(err);
          }); 
    }

    submitNewAvatar(link, newAvatarSave) {
        fetch(`${this.baseUrl}/users/me/avatar`, {
            method: 'PATCH',
            headers: {
              authorization: this.authorization,
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              avatar: link
            })
          })
          .then(res => {
            if (res.ok) {
                newAvatarSave.textContent = 'Сохранить';
            } else {
                return Promise.reject(`Ошибка: ${res.status}`);
            }
          })
          .catch((err) => {
            console.log(err);
          }); 
    }

}