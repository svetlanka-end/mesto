export class UserInfo {
    constructor({nameSelector, infoSelector, avatarSelector}) {
        this._profileName = document.querySelector(nameSelector);
        this._profileInfo = document.querySelector(infoSelector);
        this._avatarSelector = document.querySelector(avatarSelector);
    }

    getUserInfo = () => {
        return {
            profileName: this._profileName.textContent,
            profileInfo: this._profileInfo.textContent,
        }
    }

    setUserInfo = (newName, newInfo, newLink) => {
        this._profileName.textContent = newName;
        this._profileInfo.textContent = newInfo;
        this._avatarSelector.src = newLink;
    }

}