export class UserInfo {
    constructor({nameSelector, infoSelector}) {
        this._profileName = document.querySelector(nameSelector);
        this._profileInfo = document.querySelector(infoSelector);
    }

    getUserInfo = () => {
        return {
            profileName: this._profileName.textContent,
            profileInfo: this._profileInfo.textContent,
        }
    }

    setUserInfo = (newName, newInfo) => {
        this._profileName.textContent = newName;
        this._profileInfo.textContent = newInfo;
    }

}