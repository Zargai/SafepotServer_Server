import { Service, Inject } from "typedi";
import {
  IPricingPlan,
  IPricingPlanInput,
} from "../interfaces/MainComponent/IpricingPlanadmin";

@Service()
export default class IPricingPlanComponentServices {
  constructor(
    @Inject("IPricingPlanComponentModel")
    private IPricingPlanComponentModel: Models.IPricingPlanComponentModel
  ) {}
  //for adding data
  public async Add(
    InputDTO: IPricingPlanInput
  ): Promise<{ Record: IPricingPlan }> {
    const Record = await this.IPricingPlanComponentModel.create({
      ...InputDTO,
    });
    console.log("dataaa", Record);
    if (!Record) {
      throw new Error("Error! Data Cannot be Stored");
    } else {
      return { Record };
    }
  }

  //to update
  public async update(
    InputDTO: IPricingPlanInput
  ): Promise<{ message: string; success: boolean }> {
    try {
      console.log("inputDTO", InputDTO);
      const { plane_name } = { ...InputDTO };
      const Record = await this.IPricingPlanComponentModel.updateOne(
        { plane_name: plane_name },
        { ...InputDTO }
      );
      if (Record.nModified <= 0) {
        return { message: "No Modification", success: false };
      }
      return { message: "Data Updated", success: true };
    } catch (e) {
      console.log(e);
      throw e;
    }
  }
  //getone
  public async get(
    InputDTO: IPricingPlanInput
  ): Promise<{ Record: IPricingPlan }> {
    try {
      const { plane_name } = { ...InputDTO };
      const Record = await this.IPricingPlanComponentModel.findOne({
        plane_name: plane_name,
      });
      if (!Record) {
        throw new Error("No data found!");
      }
      console.log("****data Found***");
      console.log(Record);
      return { Record };
    } catch (e) {
      console.log(e);
      throw e;
    }
  }

  //getalldata
  public async getall(): Promise<{ Record: Array<IPricingPlanInput> }> {
    try {
      const Record = await this.IPricingPlanComponentModel.find();
      if (!Record) {
        throw new Error("No data found!");
      }
      console.log("****data Found***");
      console.log(Record);
      return { Record };
    } catch (e) {
      console.log(e);
      throw e;
    }
  }
}
