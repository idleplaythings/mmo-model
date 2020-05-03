import THREE from "three";
import Vector from "../util/Vector";

export const getChunkWorldPosition = (binaryChunkPosition, chunkPosition) =>
  new Vector(binaryChunkPosition).add(chunkPosition);

export const getChunkKey = (position) => position.x + ":" + position.y;

export const getPositionInChunk = (position, chunkSize) =>
  position.clone().sub(getChunkPosition(position, chunkSize));

export const getChunkPosition = (position, chunkSize) => {
  let x = null;
  let y = null;

  if (position.x < 0) {
    const mod = position.x % chunkSize;
    if (mod !== 0) {
      x = position.x - mod - chunkSize;
    } else {
      x = position.x;
    }
  } else {
    x = position.x - (position.x % chunkSize);
  }

  if (position.y < 0) {
    y = position.y - (position.y % chunkSize);
  } else {
    const mod = position.y % chunkSize;
    if (mod !== 0) {
      y = position.y + (chunkSize - mod);
    } else {
      y = position.y;
    }
  }
  return new THREE.Vector3(x, y, 0);
};

class Chunk {
  constructor(position, size) {
    this.position = new THREE.Vector3(position.x, position.y, 0);
    this.size = size;

    this.lastTouched = Date.now();
  }

  getLastTouched() {
    return this.lastTouched;
  }

  touch() {
    this.lastTouched = Date.now();
  }

  getPositionInChunk(position) {
    let y = this.position.y - position.y;
    let x = position.x - this.position.x;

    return new THREE.Vector3(x, y, 0);
  }

  contains(position) {
    const chunkPosition = this.getPositionInChunk(position);

    return (
      chunkPosition.y >= 0 &&
      chunkPosition.y < this.size &&
      chunkPosition.x >= 0 &&
      chunkPosition.x < this.size
    );
  }

  getNWCorner() {
    return this.position.clone();
  }

  getNECorner() {
    const position = this.position.clone();
    position.x += this.size;
    return position;
  }

  getSECorner() {
    const position = this.position.clone();
    position.x += this.size;
    position.y -= this.size;
    return position;
  }

  getSWCorner() {
    const position = this.position.clone();
    position.y -= this.size;
    return position;
  }
}

export default Chunk;
