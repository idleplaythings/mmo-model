import Vector from "../util/Vector.mjs";

class Mobile {
  constructor(id, position = null) {
    this.id = id;
    this.position = position;
    this.nextPosition = null;
    this.nextPositionTime = null;
  }

  setPosition(position) {
    this.position = new Vector(position);
    return this;
  }

  getPosition() {
    return this.position;
  }

  serialize() {
    return {
      id: this.id,
      position: this.position,
      nextPosition: this.nextPosition,
      nextPositionTime: this.nextPositionTime,
    };
  }

  deserialize(data = {}) {
    this.id = data.id;
    this.position = data.position ? new Vector(data.position) : new Vector();
    this.nextPosition = data.nextPosition
      ? new Vector(data.nextPosition)
      : null;
    this.nextPositionTime = data.nextPositionTime;

    return this;
  }
}

export default Mobile;
