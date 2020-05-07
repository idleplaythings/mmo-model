import ndarray from "ndarray";

class TileBinarySet {
  constructor(tileList, position = { x: 0, y: 0 }) {
    this.position = position;
    this.tileList = tileList;
    this.size = tileList ? tileList.shape[0] : 0;
    this.currentView = this.tileList;
  }

  zoomToChunk(position, size) {
    this.currentView = this.tileList
      .hi(position.x + size + 2, position.y + size + 2)
      .lo(position.x, position.y);
  }

  zoomTo3(position) {
    this.currentView = this.tileList
      .hi(position.x + 2, position.y + 2)
      .lo(position.x - 1, position.y - 1);
  }

  getPositionIn(position) {
    // console.log(position, this.position);
    let y = this.position.y - position.y;
    let x = position.x - this.position.x;

    return { x, y, z: 0 };
  }

  contains(position) {
    const chunkPosition = this.getPositionIn(position);

    /*
    console.log(
      `chunkPosition for ${position.x},${position.y} is ${chunkPosition.x},${
        chunkPosition.y
      }`
    );

    console.log(
      "contains: ",
      chunkPosition.y >= 0 &&
        chunkPosition.y < this.size &&
        chunkPosition.x >= 0 &&
        chunkPosition.x < this.size
    );
    */

    return (
      chunkPosition.y >= 0 &&
      chunkPosition.y < this.size &&
      chunkPosition.x >= 0 &&
      chunkPosition.x < this.size
    );
  }

  resetZoom() {
    this.currentView = this.tileList;
  }

  typeEquals(position, type) {
    return this.getType(position) === type;
  }

  getHeightByWorldPosition(position) {
    if (!this.contains(position)) {
      throw new Error(
        `Binary set does not contain position ${position.x}, ${position.y}`
      );
    }
    position = this.getPositionIn(position);
    return this.getHeight(position);
  }

  getHeight(position) {
    return this.currentView.get(position.x, position.y, 0);
  }

  getTypeByWorldPosition(position) {
    if (!this.contains(position)) {
      throw new Error(
        `Binary set does not contain position ${position.x}, ${position.y}`
      );
    }
    position = this.getPositionIn(position);
    return this.getType(position);
  }

  getType(position) {
    return this.currentView.get(position.x, position.y, 1);
  }

  getPropByWorldPosition(position) {
    if (!this.contains(position)) {
      throw new Error(
        `Binary set does not contain position ${position.x}, ${position.y}`
      );
    }
    position = this.getPositionIn(position);
    return this.getProp(position);
  }

  getProp(position) {
    return this.currentView.get(position.x, position.y, 2);
  }

  getVisualByWorldPosition(position) {
    if (!this.contains(position)) {
      throw new Error(
        `Binary set does not contain position ${position.x}, ${position.y}`
      );
    }
    position = this.getPositionIn(position);
    return this.getVisual(position);
  }

  getVisual(position) {
    return this.currentView.get(position.x, position.y, 3);
  }

  setHeight(position, h) {
    this.currentView.set(position.x, position.y, 0, h);
  }

  setType(position, t) {
    this.currentView.set(position.x, position.y, 1, t);
  }

  setProp(position, p) {
    this.currentView.set(position.x, position.y, 2, p);
  }

  setVisual(position, p) {
    this.currentView.set(position.x, position.y, 3, p);
  }

  cloneEmpty() {
    return new TileBinarySet(
      ndarray(new Int8Array(this.size * this.size * 4), [
        this.size,
        this.size,
        4,
      ])
    );
  }

  getData() {
    return this.currentView.data;
  }

  serialize() {
    return {
      position: this.position,
      data: this.getData(),
      size: this.size,
    };
  }

  deserialize(data) {
    this.position = data.position || { x: 0, y: 0 };
    this.size = data.size;
    this.tileList = ndarray(new Uint8Array(data.data), [
      this.size,
      this.size,
      4,
    ]);
    this.currentView = this.tileList;

    return this;
  }
}

export default TileBinarySet;
