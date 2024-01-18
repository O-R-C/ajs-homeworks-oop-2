/** базовый класс персонажа */
export default class Character {
  /** @param {string} name - имя персонажа, должно быть строкой из 2-10 символов */
  constructor(name) {
    this.name = name;

    this.level = 1;
    this.health = 100;
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
}
