class Mobile {
  constructor(id, position = null) {
    this.id = id;
    this.position = position;
    this.nextPosition = null;
    this.nextPositionTime = null;
  }

  setPosition(position) {
    this.position = position;
    return this;
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
    this.position = data.position;
    this.nextPosition = data.nextPosition;
    this.nextPositionTime = data.nextPositionTime;

    return this;
  }
}

export default Mobile;
