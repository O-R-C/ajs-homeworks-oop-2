import Character from "./Character";

/** игровой класс персонажа @extends Character*/
export default class Undead extends Character {
  /** @param {string} name - имя персонажа, должно быть строкой из 2-10 символов */
  constructor(name) {
    super(name);

    this.type = "Undead";
    this.attack = 25;
    this.defence = 25;
  }
}
