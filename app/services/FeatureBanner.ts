import { Service, Inject } from 'typedi';
import { IFeatureBanner, IFeatureBannerInput } from '../interfaces/MainComponent/FeatureBanner';


@Service()
export default class FeatureBannercomponentService {
  constructor(
    @Inject('FeatureBannerComponentModel') private FeatureBannerComponentModel: Models.FeatureBannerComponentModel,
  ) { }
  //for adding data
  public async Add(InputDTO: IFeatureBannerInput): Promise<{ Record: IFeatureBanner }> {

       const Record = await this.FeatureBannerComponentModel.create({...InputDTO});
       console.log("dataaa",Record)
    if (!Record) { throw new Error('Error! Data Cannot be Stored'); }
    else { return { Record }; }

  }

  //to update 
  public async update(InputDTO: IFeatureBannerInput): Promise<{ message: string, success: boolean }> {
    try {
      console.log("inputDTO", InputDTO)
      const Record = await this.FeatureBannerComponentModel.updateOne({ "_id": "611b640e8fcb855e3880bfd7" },{ ...InputDTO })
      if (Record.nModified <= 0) {
        return { message: "No Modification", success: false }
      }
      return { message: "Data Updated", success: true };
    } catch (e) {
      console.log(e);
      throw e;
    }
  }

  //getalldata
  public async getall(): Promise<{ Record: Array<IFeatureBannerInput>; }> {
    try {
      const Record = await this.FeatureBannerComponentModel.find()
      if (!Record) {
        throw new Error('No data found!');
      }
      console.log('****data Found***');
      console.log(Record);
      return { Record };
    } catch (e) {
      console.log(e);
      throw e;
    }
  } 

}