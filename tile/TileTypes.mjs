const type = {
  WATER: 0,
  REGULAR: 1,
  WATER_DEEP: 2,
  SLOPE: 3,
};

const prop = {
  NONE: 0,
  DEFAULT_REMOVED: 1,
  BOULDER: 50,
  BOULDER_SECONDARY: 51,
  ROCK: 52,
  PEBBLE: 53,
  LEAVES: 100,
};

const visual = {
  UNDERWATER_DEEP: 0,
  UNDERWATER: 1,
  BEDROCK: 2,
  BEDROCK_SOIL: 3,
};

const biome = {
  NO_BIOME: 0,
  WATER_DEEP: 1,
  WATE: 2,
  BEDROCK: 3,
  BEDROCK_SOIL: 4,
  MOUNTAIN: 5,
};

const movementEffect = {
  difficult: [prop.ROCK],
  impassable: [prop.BOULDER, prop.BOULDER_SECONDARY],
};

export { type, prop, visual, biome, movementEffect };
