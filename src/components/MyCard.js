import { Card } from './Card.js';

export class MyCard extends Card {
    constructor(nameCard, linkCard, template, handleCardClick, like) {
        super(nameCard, linkCard, template, handleCardClick, like);
    }

    _setDeleteCardEventListener = () => {
        this._mestoDelete.addEventListener('click', event => {
        event.target.closest('.grid__element').remove();
      });
    }

    _setEventListeners() {
        super._setEventListeners();
        this._setDeleteCardEventListener();
}   
}