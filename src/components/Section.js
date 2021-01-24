export class Section {
    constructor(renderer, containerSelector) {
        this.renderer = renderer;
        this._container = document.querySelector(containerSelector);
    }

    renderItems = (items) => {
        items.forEach((item) => {
            this.addItem(this.renderer(item)); 
        } 
        ) 

    }

    addItem = (element) => {
        this._container.prepend(element);
    }
}