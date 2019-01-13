class TileBinarySet {
  constructor(tileList) {
    this.tileList = tileList;
    this.size = tileList.shape[0];
    this.currentView = this.tileList;
  }

  zoomTo3(position) {
    this.currentView = this.tileList
      .hi(position.x - 1, position.y - 1)
      .lo(this.size - position.x - 2, this.size - position.y - 2);

    console.log(this.currentView.shape);
  }

  resetZoom() {
    this.currentView = this.tileList;
  }

  getHeight(position) {
    this.currentView.get(position.x, position.y, 0);
  }

  getType(position) {
    this.currentView.get(position.x, position.y, 1);
  }

  getProp(position) {
    this.currentView.set(position.x, position.y, 2);
  }

  setHeight(position, h) {
    this.currentView.get(position.x, position.y, 0, h);
  }

  setType(position, t) {
    this.currentView.get(position.x, position.y, 1, t);
  }

  setProp(position, p) {
    this.currentView.get(position.x, position.y, 2, p);
  }
}

export default TileBinarySet;
