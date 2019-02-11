import ndarray from "ndarray";

class TileBinarySet {
  constructor(tileList) {
    this.tileList = tileList;
    this.size = tileList.shape[0];
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

  resetZoom() {
    this.currentView = this.tileList;
  }

  typeEquals(position, type) {
    return this.getType(position) === type;
  }

  getHeight(position) {
    return this.currentView.get(position.x, position.y, 0);
  }

  getType(position) {
    return this.currentView.get(position.x, position.y, 1);
  }

  getProp(position) {
    return this.currentView.get(position.x, position.y, 2);
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
        4
      ])
    );
  }

  getData() {
    return this.currentView.data;
  }
}

export default TileBinarySet;
