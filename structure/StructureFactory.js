import LogWall from "./wall/LogWall";

class StructureFactory {
  deserialize([typeId, ...rest]) {
    let structure = null;

    switch (typeId) {
      case 1:
        structure = new LogWall();
        break;
      default:
        console.error([typeId, ...rest]);
        throw new Error(`Unable to construct structure ${typeId}`);
    }

    return structure.deserialize([typeId, ...rest]);
  }
}

export default StructureFactory;
