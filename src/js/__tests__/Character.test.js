import Character from "../Classes/Character";

describe("test class Character", () => {
  describe("name not String", () => {
    const names = [123, true, null, [], { name: "Петр" }, undefined];

    test.each(names)("%p", (name) => {
      expect(() => new Character(name)).toThrow("имя должно быть строкой");
    });
  });

  describe("name length not valid", () => {
    describe("length < 2", () => {
      const names = ["   ", "z", "z              "];

      test.each(names)("%p", (name) => {
        expect(() => new Character(name)).toThrow(
          "длина имени должна быть больше одного символа"
        );
      });
    });

    describe("length > 10", () => {
      test("name '12345678901'", () => {
        expect(() => new Character("12345678901")).toThrow(
          "длина имени не может быть больше 10 символов"
        );
      });
    });
  });

  test("create without type", () => {
    expect(() => new Character("Test")).toThrow(
      "тип персонажа должен быть строкой"
    );
  });

  test("create without allowed type", () => {
    expect(() => new Character("Test", "")).toThrow(
      "тип персонажа не известен"
    );
  });

  describe("method damage", () => {
    test("health = 0", () => {
      const character = new Character("test", "Zombie");

      character.health = 0;

      expect(() => character.damage(10)).toThrow("ему уже все равно");
    });
  });

  describe("method levelUp", () => {
    test("health = 0", () => {
      const character = new Character("test", "Zombie");

      character.health = 0;

      expect(() => character.levelUp()).toThrow(
        "нельзя повысить левел умершего"
      );
    });
  });
});
