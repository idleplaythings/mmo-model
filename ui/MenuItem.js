class MenuItem {
  constructor(label, handler) {
    this.label = label;
    this.handler = handler;
  }

  execute(payload) {
    this.handler(payload);
  }
}

export default MenuItem;
