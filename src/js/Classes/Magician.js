import Character from "./Character";

/** игровой класс персонажа @extends Character*/
export default class Magician extends Character {
  /** @param {string} name - имя персонажа, должно быть строкой из 2-10 символов */
  constructor(name) {
    super(name);

    this.type = "Magician";
    this.attack = 10;
    this.defence = 40;
  }
}
