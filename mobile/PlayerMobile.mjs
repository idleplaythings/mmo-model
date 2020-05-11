import Mobile from "./Mobile.mjs";

class PlayerMobile extends Mobile {
  constructor(id, userId) {
    super(id, null);

    this.userId = userId;
  }

  serialize() {
    const data = super.serialize();
    return {
      ...data,
      userId: this.userId,
    };
  }

  deserialize(data = {}) {
    super.deserialize(data);
    this.userId = data.userId;

    return this;
  }
}

export default PlayerMobile;
