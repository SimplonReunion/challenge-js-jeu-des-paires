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
        let set1 = this.random(['ane', 'chat', 'chien', 'lama', 'lapins', 'lionne', 'ours']);
        let set2 = this.random(['ane', 'chat', 'chien', 'lama', 'lapins', 'lionne', 'ours']);
        set1.forEach((e) => new Card(e).init())
        set2.forEach((e) => new Card(e).init())

    }

    public  random(imageArray: string[]): string[] {
        return _.shuffle(imageArray);
    }

    public compareCards() {
        let clickedCard = document.getElementsByClassName('hidden');
    }

    public end() {

    }
}

const game = new Game();
game.start();