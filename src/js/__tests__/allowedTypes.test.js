import Bowman from "../Classes/Bowman";
import Daemon from "../Classes/Daemon";
import Magician from "../Classes/Magician";
import Swordsman from "../Classes/Swordsman";
import Undead from "../Classes/Undead";
import Zombie from "../Classes/Zombie";

const team = [Bowman, Swordsman, Magician, Daemon, Undead, Zombie];

describe("check characters", () => {
  const allowedTypes = [
    "Bowman",
    "Swordsman",
    "Magician",
    "Daemon",
    "Undead",
    "Zombie",
  ];

  describe("to type", () => {
    test.each(allowedTypes)("%p", (type) => {
      const character = team.find((character) => character.name === type);

      expect(new character("test").type).toBe(type);
    });
  });

  describe("to allowedType", () => {
    test.each(allowedTypes)("%p", (type) => {
      const character = team.find((character) => character.name === type);

      expect(allowedTypes.includes(new character("test").type)).toBeTruthy();
    });
  });

  describe("to string", () => {
    test.each(team)("%p", (character) => {
      expect(typeof new character("test").type).toBe("string");
    });
  });
});
