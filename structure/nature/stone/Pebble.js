import Vector from "../../../util/Vector";
import { getPositionInChunk } from "../../../tile/Chunk.mjs";
import { prop } from "../../../tile/TileTypes.mjs";

export const PEBBLES = [
  16,
  17,
  18,
  19,
  20,
  21,
  22,
  23,
  24,
  25,
  26,
  27,
  28,
  29,
  30,
  31,
];

class Pebble {
  constructor({ position = { x: 0, y: 0, z: 0 }, visualType = null } = {}) {
    this.position = new Vector(position);
    this.typeId = prop.PEBBLE;
    this.visualType = visualType;
  }

  createTiles(
    chunkPositionInBinaryChunk,
    binaryChunk,
    binaryChunkPosition,
    dynamicEntities,
    tile,
    chunkSize
  ) {
    const visualType =
      this.visualType || PEBBLES[Math.floor(Math.random() * PEBBLES.length)];

    const positionInChunk = getPositionInChunk(this.position, chunkSize);
    const height = binaryChunk.getHeight(positionInChunk);

    const tiles = [
      tile
        .reset()
        .setPositionAndChunkPosition(
          {
            x: this.position.x,
            y: this.position.y,
            z: 0,
          },
          {
            x: positionInChunk.x,
            y: positionInChunk.y,
            z: height,
          }
        )
        .setSurfaceTexture(visualType)
        .serialize(),
    ];

    return tiles;
  }

  serialize() {
    return [
      this.typeId,
      this.position.x,
      this.position.y,
      this.position.z,
      this.visualType,
    ];
  }

  deserialize(data) {
    this.position = new Vector(data[1], data[2], data[3]);
    this.visualType = data[4];
    return this;
  }
}

export default Pebble;
