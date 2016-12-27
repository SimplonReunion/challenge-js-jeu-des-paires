/**
 * Created by elliotbouvier on 12/27/16.
 * challenge-js-jeu-des-paires
 */

export class Card {

    protected static _increment = 0;

    private _name: string;
    private _layout: any;

    constructor(name: string) {
        this._name = name;
        this._layout = document.getElementById('layout');
        Card._increment += 1;
    }

    public init(): void {
        let card =
            `<div class="col-xs-3">
                <div class="noir" id="${this._name }${Card._increment}"></div>
                <img src="./img/${this._name}.jpg" id="${this._name}">
            </div>`;
        this._layout.append(card);
        //document.getElementById(this._name + Card._increment).onclick = this.click;
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