import Vector from "../../../util/Vector";
import { getPositionInChunk } from "../../../tile/Chunk.mjs";
import { prop } from "../../../tile/TileTypes.mjs";

export const BOULDERS = [256, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266];

class Boulder {
  constructor({ position = { x: 0, y: 0, z: 0 }, visualType = null } = {}) {
    this.position = new Vector(position);
    this.typeId = prop.BOULDER;
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
      this.visualType || BOULDERS[Math.floor(Math.random() * BOULDERS.length)];

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
        .setScale(2)
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

export default Boulder;
