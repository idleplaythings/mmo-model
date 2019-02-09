import ndarray from "ndarray";
import TileBinarySet from "./TileBinarySet";

class WorldTileBinarySet extends TileBinarySet {
  constructor(tileList) {
    super(tileList);
  }

  translatePosition(position) {
    return {
      x: position.x,
      y: Math.abs(position.y)
    };
  }

  zoomToChunk(position, size) {
    position = this.translatePosition(position);

    return super.zoomToChunk(position, size);
  }

  zoomTo3(position) {
    position = this.translatePosition(position);

    return super.zoomTo3(position);
  }

  getHeight(position) {
    position = this.translatePosition(position);

    return super.getHeight(position);
  }

  getType(position) {
    position = this.translatePosition(position);

    return super.getType(position);
  }

  getProp(position) {
    position = this.translatePosition(position);

    return super.getProp(position);
  }

  getVisual(position) {
    position = this.translatePosition(position);

    return super.getVisual(position);
  }

  setHeight(position, h) {
    position = this.translatePosition(position);

    return super.setHeight(position, h);
  }

  setType(position, t) {
    position = this.translatePosition(position);

    return super.setType(position, t);
  }

  setProp(position, p) {
    position = this.translatePosition(position);

    return super.setProp(position, p);
  }

  setVisual(position, p) {
    position = this.translatePosition(position);

    return super.setVisual(position, p);
  }
}

export default WorldTileBinarySet;
