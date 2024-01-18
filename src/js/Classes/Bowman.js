import Character from "./Character";

/** игровой класс персонажа @extends Character*/
export default class Bowman extends Character {
  /** @param {string} name - имя персонажа, должно быть строкой из 2-10 символов */
  constructor(name) {
    super(name);

    this.type = "Bowman";
    this.attack = 25;
    this.defence = 25;
  }
}
