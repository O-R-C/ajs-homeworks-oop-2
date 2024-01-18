import Character from "../Classes/Character";

describe("test class Character", () => {
  describe("correct name", () => {
    const names = ["Андрей", "Вовчик", "Денис", "Нагибатор", "Язь"];

    test.each(names)("%p", (name) => {
      const character = new Character(name);

      expect(character.name).toBe(name);
    });
  });

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
          "длина имени должна быть больше двух символов"
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

  test("correct create", () => {
    const result = new Character("Character");

    expect(result).toEqual({
      level: 1,
      health: 100,
      _name: "Character",
    });
  });
});
