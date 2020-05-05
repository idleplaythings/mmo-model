const type = {
  WATER: 0,
  REGULAR: 1,
  WATER_DEEP: 2,
  SLOPE: 3,
};

const prop = {
  NONE: 0,
  CLUTTER: 1,
  STONE_SMALL: 2,
  STONE_LARGE: 3,
  STONE_2X2: 4,
  STONE_3X3: 5,
};

const visual = {
  UNDERWATER_DEEP: 0,
  UNDERWATER: 1,
  BEDROCK: 2,
  BEDROCK_SOIL: 3,
};

const slopeTypes = [
  type.SLOPE_SOUTH,
  type.SLOPE_WEST,
  type.SLOPE_EAST,
  type.SLOPE_NORTH,
  type.SLOPE_NORTHWEST,
  type.SLOPE_NORTHEAST,
  type.SLOPE_SOUTHWEST,
  type.SLOPE_SOUTHEAST,
  type.SLOPE_NORTHWEST_INVERTED,
  type.SLOPE_NORTHEAST_INVERTED,
  type.SLOPE_SOUTHWEST_INVERTED,
  type.SLOPE_SOUTHEAST_INVERTED,
];

export { type, prop, visual, slopeTypes };
