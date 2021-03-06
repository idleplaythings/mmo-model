import Vector from "../../../util/Vector";
import { getPositionInChunk } from "../../../tile/Chunk.mjs";
import { prop } from "../../../tile/TileTypes.mjs";
import Prop from "../../Prop";
import HarvestableProp from "../../HarvestableProp";

export const ROCKS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

class Rock extends Prop {
  constructor({ position, visualType = null } = {}) {
    super(position);
    this.typeId = prop.ROCK;
    this.visualType = visualType;

    this.interactionStrategies.push(new HarvestableProp());
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
      this.visualType || ROCKS[Math.floor(Math.random() * ROCKS.length)];

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

export default Rock;
