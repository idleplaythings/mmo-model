import Vector from "../../util/Vector";
import { getPositionInChunk } from "../../tile/Chunk.mjs";

const LOGWALL_X = [513, 514, 515];
const LOGWALL_Y = [524, 525, 526];

const LOGWALL_END_X_PLUS = [529];
const LOGWALL_END_X_MINUS = [527];
const LOGWALL_END_Y_PLUS = [528];
const LOGWALL_END_Y_MINUS = [530];

const LOGWALL_SINGLE_X = [539];

const LOGWALL_CROSS = [512];
const LOGWALL_CORNER_NE = [534];
const LOGWALL_CORNER_SE = [532];
const LOGWALL_CORNER_SW = [531];
const LOGWALL_CORNER_NW = [533];

const LOGWALL_CROSS_NSW = [536];
const LOGWALL_CROSS_NSE = [535];
const LOGWALL_CROSS_WES = [538];
const LOGWALL_CROSS_WEN = [537];

class LogWall {
  constructor({ position = { x: 0, y: 0, z: 0 } } = {}) {
    this.position = new Vector(position);
    this.typeId = 1;
  }

  createTiles(
    chunkPositionInBinaryChunk,
    binaryChunk,
    binaryChunkPosition,
    dynamicEntities,
    tile,
    chunkSize
  ) {
    /*
    console.log(
      "chunkPosition relative to binaryChunk",
      chunkPositionInBinaryChunk,
      getChunkPosition(this.position, chunkSize),
      "binaryChunkPosition",
      binaryChunkPosition
    );
    */

    const positionInChunk = getPositionInChunk(this.position, chunkSize);
    const height = this.getHeightWithGround(positionInChunk, binaryChunk);

    const tiles = this.chooseTile(
      dynamicEntities,
      height,
      binaryChunk,
      chunkSize,
      positionInChunk,
      tile
    );

    return tiles;
  }

  chooseTile(
    dynamicEntities,
    height,
    binaryChunk,
    chunkSize,
    positionInChunk,
    tile
  ) {
    const adjacency = this.getTileAdjacency(
      dynamicEntities,
      height,
      binaryChunk,
      positionInChunk
    );

    switch (adjacency) {
      case 0: {
        return this.handle0000(tile, positionInChunk, height, binaryChunk);
      }
      case 1:
        return this.handle0001(tile, positionInChunk, height, binaryChunk);
      case 2:
        return this.handle0010(tile, positionInChunk, height, binaryChunk);
      case 3:
        return this.handle0011(tile, positionInChunk, height, binaryChunk);
      case 4:
        return this.handle0100(tile, positionInChunk, height, binaryChunk);
      case 5:
        return this.handle0101(tile, positionInChunk, height, binaryChunk);
      case 6:
        return this.handle0110(tile, positionInChunk, height, binaryChunk);
      case 7:
        return this.handle0111(tile, positionInChunk, height, binaryChunk);
      case 8:
        return this.handle1000(tile, positionInChunk, height, binaryChunk);
      case 9:
        return this.handle1001(tile, positionInChunk, height, binaryChunk);
      case 10:
        return this.handle1010(tile, positionInChunk, height, binaryChunk);
      case 11:
        return this.handle1011(tile, positionInChunk, height, binaryChunk);
      case 12:
        return this.handle1100(tile, positionInChunk, height, binaryChunk);
      case 13:
        return this.handle1101(tile, positionInChunk, height, binaryChunk);
      case 14:
        return this.handle1110(tile, positionInChunk, height, binaryChunk);
      case 15:
        return this.handle1111(tile, positionInChunk, height, binaryChunk);
      default:
        console.log("adjacency missing", adjacency);
        return [];
    }
  }

  handle0110(tile, positionInChunk, height, binaryChunk) {
    return [
      this.setTilePosition(tile, positionInChunk, binaryChunk)
        .setSurfaceTexture(LOGWALL_X[0])
        .serialize(),
    ];
  }

  handle1001(tile, positionInChunk, height, binaryChunk) {
    return [
      this.setTilePosition(tile, positionInChunk, binaryChunk)
        .setSurfaceTexture(LOGWALL_Y[0])
        .serialize(),
    ];
  }

  handle1000(tile, positionInChunk, height, binaryChunk) {
    return [
      this.setTilePosition(tile, positionInChunk, binaryChunk)
        .setSurfaceTexture(LOGWALL_END_Y_MINUS[0])
        .serialize(),
    ];
  }

  handle0100(tile, positionInChunk, height, binaryChunk) {
    return [
      this.setTilePosition(tile, positionInChunk, binaryChunk)
        .setSurfaceTexture(LOGWALL_END_X_PLUS[0])
        .serialize(),
    ];
  }

  handle0001(tile, positionInChunk, height, binaryChunk) {
    return [
      this.setTilePosition(tile, positionInChunk, binaryChunk)
        .setSurfaceTexture(LOGWALL_END_Y_PLUS[0])
        .serialize(),
    ];
  }

  handle0010(tile, positionInChunk, height, binaryChunk) {
    return [
      this.setTilePosition(tile, positionInChunk, binaryChunk)
        .setSurfaceTexture(LOGWALL_END_X_MINUS[0])
        .serialize(),
    ];
  }

  handle1011(tile, positionInChunk, height, binaryChunk) {
    return [
      this.setTilePosition(tile, positionInChunk, binaryChunk)
        .setSurfaceTexture(LOGWALL_CROSS_NSE[0])
        .serialize(),
    ];
  }

  handle1101(tile, positionInChunk, height, binaryChunk) {
    return [
      this.setTilePosition(tile, positionInChunk, binaryChunk)
        .setSurfaceTexture(LOGWALL_CROSS_NSW[0])
        .serialize(),
    ];
  }

  handle0101(tile, positionInChunk, height, binaryChunk) {
    return [
      this.setTilePosition(tile, positionInChunk, binaryChunk)
        .setSurfaceTexture(LOGWALL_CORNER_NE[0])
        .serialize(),
    ];
  }

  handle0111(tile, positionInChunk, height, binaryChunk) {
    return [
      this.setTilePosition(tile, positionInChunk, binaryChunk)
        .setSurfaceTexture(LOGWALL_CROSS_WES[0])
        .serialize(),
    ];
  }

  handle0011(tile, positionInChunk, height, binaryChunk) {
    return [
      this.setTilePosition(tile, positionInChunk, binaryChunk)
        .setSurfaceTexture(LOGWALL_CORNER_NW[0])
        .serialize(),
    ];
  }

  handle1100(tile, positionInChunk, height, binaryChunk) {
    return [
      this.setTilePosition(tile, positionInChunk, binaryChunk)
        .setSurfaceTexture(LOGWALL_CORNER_SE[0])
        .serialize(),
    ];
  }

  handle1010(tile, positionInChunk, height, binaryChunk) {
    return [
      this.setTilePosition(tile, positionInChunk, binaryChunk)
        .setSurfaceTexture(LOGWALL_CORNER_SW[0])
        .serialize(),
    ];
  }

  handle1110(tile, positionInChunk, height, binaryChunk) {
    return [
      this.setTilePosition(tile, positionInChunk, binaryChunk)
        .setSurfaceTexture(LOGWALL_CROSS_WEN[0])
        .serialize(),
    ];
  }

  handle0000(tile, positionInChunk, height, binaryChunk) {
    return [
      this.setTilePosition(tile, positionInChunk, binaryChunk)
        .setSurfaceTexture(LOGWALL_SINGLE_X[0])
        .serialize(),
    ];
  }

  handle1111(tile, positionInChunk, height, binaryChunk) {
    return [
      this.setTilePosition(tile, positionInChunk, binaryChunk)
        .setSurfaceTexture(LOGWALL_CROSS[0])
        .serialize(),
    ];
  }

  getHeightWithGround(positionInChunk, binaryChunk) {
    const height = binaryChunk.getHeight(positionInChunk);
    return height + this.position.z;
  }

  getTileAdjacency(dynamicEntities, height, binaryChunk, positionInChunk) {
    let binary = "";

    const steps = [
      { x: 0, y: 1 },
      { x: -1, y: 0 },
      { x: 1, y: 0 },
      { x: 0, y: -1 },
    ];

    steps.forEach(({ x, y }) => {
      const same = dynamicEntities
        .getByTypeAndPosition(this.typeId, {
          x: this.position.x + x,
          y: this.position.y + y,
        })
        .filter((other) => {
          const otherHeight = binaryChunk.getHeight({
            x: positionInChunk.x + x,
            y: positionInChunk.y + y,
          });

          return otherHeight + other.position.z === height;
        });

      if (same.length > 0) {
        binary += "1";
      } else {
        binary += "0";
      }
    });

    return parseInt(binary, 2);
  }

  setOffsetTilePosition(tile, offset, positionInChunk, baseHeight) {
    tile.reset();
    /*
    const positionInChunk = new Vector(position.x, position.y, position.z).sub(
      getChunkPosition(position, chunkSize)
    );

    const height = binaryChunk.getHeight(positionInChunk);

    const z = height <= baseHeight ? baseHeight - height : position.z;
   */

    tile.setPositionAndChunkPosition(
      {
        x: this.position.x + offset.x,
        y: this.position.y + offset.y,
        z: baseHeight,
      },
      {
        x: positionInChunk.x + offset.x,
        y: positionInChunk.y + offset.y,
        z: baseHeight,
      }
    );

    return tile;
  }

  setTilePosition(tile, positionInChunk, binaryChunk) {
    tile.reset();
    const height = binaryChunk.getHeight(positionInChunk);

    tile.setPositionAndChunkPosition(
      {
        x: this.position.x,
        y: this.position.y,
        z: this.position.z + height,
      },
      {
        x: positionInChunk.x,
        y: positionInChunk.y,
        z: this.position.z + height,
      }
    );

    return tile;
  }

  serialize() {
    return [this.typeId, this.position.x, this.position.y, this.position.z];
  }

  deserialize(data) {
    this.position = new Vector(data[1], data[2], data[3]);
    return this;
  }
}

export default LogWall;
