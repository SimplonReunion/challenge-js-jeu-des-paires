/**
    * Created by elliotbouvier on 12/27/16.
    * challenge-js-jeu-des-paires
    */

import {Timer} from './timer';
import {Card} from './card';
import * as _ from 'lodash';
class Game {


    constructor() {
    }

    public start() {
        let timer = new Timer();
        let cardName = this.random(['ane', 'chat', 'chien', 'lama', 'lapins', 'lionne', 'ours']);
        console.log(cardName);
        console.log(cardName.forEach((e) => new Card(e).show()))

    }

    public  random(imageArray: string[]): string[]{
        return _.shuffle(imageArray);
    }

    public compareCards() {

    }

    public end() {

    }
}

let game = new Game();
game.start();