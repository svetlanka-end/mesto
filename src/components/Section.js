export class Section {
    constructor({renderer}, containerSelector) {
        this.renderer = renderer;

        this._container = document.querySelector(containerSelector);
    }

    renderItems = () => {
        fetch('https://mesto.nomoreparties.co/v1/cohort-19/cards', {
            headers: {
            authorization: 'a29b2060-5a9c-4cf9-ba7c-9a2b349e7a4f'
            }
        })
        .then(res => res.json())
        .then((result) => {
        result.forEach((item) => { 
            this.addItem(this.renderer(item));
            }
        )
        });

    }

    addItem = (element) => {
        this._container.prepend(element);
    }
}