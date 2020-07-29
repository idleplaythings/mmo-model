import Vector from "../util/Vector.mjs";

class Prop {
  constructor({ position = { x: 0, y: 0, z: 0 } } = {}) {
    this.position = new Vector(position);
    this.interactionStrategies = [];
  }

  getMenuItems(mobileActionService, tile) {
    return this.interactionStrategies
      .map((strategy) => strategy.getMenuItems(mobileActionService, tile, this))
      .reduce((total, current) => [...total, ...current], []);
  }

  onInteraction() {
    this.interactionStrategies.forEach((strategy) => strategy());
  }
}

export default Prop;
