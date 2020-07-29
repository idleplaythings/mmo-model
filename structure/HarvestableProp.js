import MenuItem from "../ui/MenuItem";
import MoveToMobileAction from "../../game/mobile/mobileActions/MoveToMobileAction";
import WorkPropMobileAction from "../../game/mobile/mobileActions/WorkPropMobileAction";

class HarvestableProp {
  getMenuItems(mobileActionService, tile, prop) {
    return [
      new MenuItem("Harvest stone", () => {
        mobileActionService.addActionToSelectedMobiles(
          new MoveToMobileAction(tile)
        );
        mobileActionService.queueActionToSelectedMobiles(
          new WorkPropMobileAction(tile, prop.typeId)
        );
      }),
    ];
  }
}

export default HarvestableProp;
