import Character from "./Character";

/** игровой класс персонажа @extends Character*/
export default class Undead extends Character {
  /** @param {string} name - имя персонажа, должно быть строкой из 2-10 символов */
  constructor(name, type = "Undead") {
    super(name, type);

    this.attack = 25;
    this.defence = 25;
  }
}
