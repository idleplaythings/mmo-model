import LogWall from "./wall/LogWall";
import Boulder from "./nature/stone/Boulder";
import Rock from "./nature/stone/Rock";
import Pebble from "./nature/stone/Pebble";

class StructureFactory {
  deserialize([typeId, ...rest]) {
    let structure = null;

    switch (typeId) {
      case 1:
        structure = new LogWall();
        break;
      case 50:
        structure = new Boulder();
        break;
      case 52:
        structure = new Rock();
        break;
      case 53:
        structure = new Pebble();
        break;
      default:
        return null;
    }

    return structure.deserialize([typeId, ...rest]);
  }
}

export default StructureFactory;
