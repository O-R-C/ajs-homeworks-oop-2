/** базовый класс персонажа */
export default class Character {
  /** @param {string} name - имя персонажа, должно быть строкой из 2-10 символов */
  constructor(name) {
    this.name = name;

    this.level = 1;
    this.health = 100;
    this.attack = 1;
    this.defence = 1;
  }

  set name(name) {
    if (typeof name !== "string") {
      throw new Error("имя должно быть строкой");
    }

    if (name.trim().length < 2) {
      throw new Error("длина имени должна быть больше двух символов");
    }

    if (name.trim().length > 10) {
      throw new Error("длина имени не может быть больше 10 символов");
    }

    this._name = name;
  }

  get name() {
    return this._name;
  }

  /** повышает уровень персонажа
   * level + 1
   * health = 100
   * attack & defence + 20%
   *
   * @throws {error} error - если здоровье <= 0
   */
  levelUp() {
    if (this.health <= 0) {
      throw new Error("нельзя повысить левел умершего");
    }

    const multi = 1.2;

    this.level += 1;
    this.health = 100;
    this.attack *= multi;
    this.defence *= multi;
  }
}
