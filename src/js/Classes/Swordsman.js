import Character from "./Character";

/** игровой класс персонажа @extends Character*/
export default class Swordsman extends Character {
  /** @param {string} name - имя персонажа, должно быть строкой из 2-10 символов */
  constructor(name) {
    super(name);

    this.type = "Swordsman";
    this.attack = 40;
    this.defence = 10;
  }
}
