/**
 * Created by elliotbouvier on 12/27/16.
 * challenge-js-jeu-des-paires
 */

export class Card {

    protected static _increment = 0;

    private _name: string;
    private _layout: Element; //Type (dom) Element

    constructor(name: string) {
        this._name = name;
        this._layout = document.getElementById('layout');
        Card._increment += 1;
    }

    public init(): void {
        //Create the (dom) Element
        let cardDomElement = document.createElement("div");
        cardDomElement.innerHTML =
            `<div class="col-xs-3">
                <div class="noir" id="${this._name }${Card._increment}"></div>
                <img src="./img/${this._name}.jpg" id="${this._name}">
            </div>`;
        //Use insertBefore because "append" doesn't exist on the type Element 
        this._layout.insertBefore(cardDomElement,null);
        //bind the onclick event on this.click
        document.getElementById(this._name + Card._increment).onclick = this.click;
    }

    public show(card: any) {
        return card.className = ''
    }

    public hide(card: any): string {
        return card.className = 'noir'
    }

    public click(name: any): any {
        console.log(name);
    }
}