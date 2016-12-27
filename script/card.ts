/**
 * Created by elliotbouvier on 12/27/16.
 * challenge-js-jeu-des-paires
 */

export class Card {

    private _name: string;

    constructor(name:string) {
        this._name = name;
    }

    public show() {
        let layout = document.getElementById('layout').innerHTML += `<img src="./img/${this._name}.jpg">`
    }

    public hide() {

    }

    public click() {

    }
}