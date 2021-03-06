import ItemClass from "../entity/ItemClass";

export default [
  async () => await new ItemClass("Bows").save(),
  async () => await new ItemClass("Claws").save(),
  async () => await new ItemClass("Daggers").save(),
  async () => await new ItemClass("Fishing Rods").save(),
  async () => await new ItemClass("One Hand Axes").save(),
  async () => await new ItemClass("One Hand Maces").save(),
  async () => await new ItemClass("One Hand Swords").save(),
  async () => await new ItemClass("Sceptres").save(),
  async () => await new ItemClass("Staves").save(),
  async () => await new ItemClass("Thrusting One Hand Swords").save(),
  async () => await new ItemClass("Two Hand Axes").save(),
  async () => await new ItemClass("Two Hand Maces").save(),
  async () => await new ItemClass("Two Hand Swords").save(),
  async () => await new ItemClass("Wands").save(),
  async () => await new ItemClass("Body Armours").save(),
  async () => await new ItemClass("Boots").save(),
  async () => await new ItemClass("Gloves").save(),
  async () => await new ItemClass("Helmets").save(),
  async () => await new ItemClass("Quivers").save(),
  async () => await new ItemClass("Shields").save(),
  async () => await new ItemClass("Amulets").save(),
  async () => await new ItemClass("Rings").save(),
  async () => await new ItemClass("Belts").save(),
  async () => await new ItemClass("Life Flasks").save(),
  async () => await new ItemClass("Mana Flasks").save(),
  async () => await new ItemClass("Hybrid Flasks").save(),
  async () => await new ItemClass("Utility Flasks").save(),
  async () => await new ItemClass("Critical Utility Flasks").save(),
  async () => await new ItemClass("Jewel").save(),
  async () => await new ItemClass("Abyss Jewel").save(),
  async () => await new ItemClass("Active Skill Gems").save(),
  async () => await new ItemClass("Support Skill Gems").save(),
  async () => await new ItemClass("Stackable Currency").save(),
  async () => await new ItemClass("Delve Socketable Currency").save(),
  async () => await new ItemClass("Divination Card").save(),
  async () => await new ItemClass("Incubator").save(),
  async () => await new ItemClass("Maps").save(),
  async () => await new ItemClass("Map Fragments").save(),
  async () => await new ItemClass("Leaguestones").save(),
  async () => await new ItemClass("Quest Items").save(),
  async () => await new ItemClass("Labyrinth Item").save(),
  async () => await new ItemClass("Labyrinth Trinket").save(),
  async () => await new ItemClass("Pantheon Soul").save(),
  async () => await new ItemClass("Piece").save(),
  async () => await new ItemClass("Incursion Item").save(),
];
