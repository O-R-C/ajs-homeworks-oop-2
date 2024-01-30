import Bowman from "../Classes/Bowman";

describe("test class Bowman", () => {
  test("correct create", () => {
    const result = new Bowman("Bowman");

    expect(result).toEqual({
      level: 1,
      attack: 25,
      defence: 25,
      health: 100,
      _type: "Bowman",
      _name: "Bowman",
    });
  });

  test("get name", () => {
    const result = new Bowman("Bowman");

    expect(result.name).toBe("Bowman");
  });

  test("nice", () => {
    const result = new Bowman("Bowman", "Daemon");

    expect(result).toEqual({
      level: 1,
      attack: 25,
      defence: 25,
      health: 100,
      _type: "Daemon",
      _name: "Bowman",
    });
  });

  describe("method damage", () => {
    test("health = 100", () => {
      const character = new Bowman("Bowman", "Daemon");

      const damage = 50;
      const reference = 100 - damage * (1 - 25 / 100);

      character.damage(damage);

      expect(character.health).toBe(reference);
    });

    test("health = 0", () => {
      const character = new Bowman("Bowman", "Daemon");

      character.health = 0;

      expect(() => character.damage(10)).toThrow("ему уже все равно");
    });
  });

  describe("method levelUp", () => {
    describe("health > 0", () => {
      test("health 100", () => {
        const character = new Bowman("Bowman", "Daemon");

        character.levelUp();

        expect(character.health).toBe(100);
        expect(character.attack).toBe(25 * 1.2);
        expect(character.defence).toBe(25 * 1.2);
      });
    });

    test("health = 0", () => {
      const character = new Bowman("Bowman", "Daemon");

      character.health = 0;

      expect(() => character.levelUp()).toThrow(
        "нельзя повысить левел умершего"
      );
    });
  });
});
