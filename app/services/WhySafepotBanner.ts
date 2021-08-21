import { Service, Inject } from 'typedi';
import { IWhySafepotBanner, IWhySafepotBannerInput } from '../interfaces/MainComponent/WhySafepotBanner';


@Service()
export default class WhySafepotBannercomponentService {
  constructor(
    @Inject('WhySafepotBannercomponentModel') private WhySafepotBannercomponentModel: Models.WhySafepotBannercomponentModel,
  ) { }
  //for adding data
  public async Add(InputDTO: IWhySafepotBannerInput): Promise<{ Record: IWhySafepotBanner }> {

       const Record = await this.WhySafepotBannercomponentModel.create({...InputDTO});
       console.log("dataaa",Record)
    if (!Record) { throw new Error('Error! Data Cannot be Stored'); }
    else { return { Record }; }

  }

  //to update 
  public async update(InputDTO: IWhySafepotBannerInput): Promise<{ message: string, success: boolean }> {
    try {
      console.log("inputDTO", InputDTO)
      const Record = await this.WhySafepotBannercomponentModel.updateOne({ "_id": "6120f35f6b249908f879851d" },{ ...InputDTO })
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
  public async getall(): Promise<{ Record: Array<IWhySafepotBanner>; }> {
    try {
      const Record = await this.WhySafepotBannercomponentModel.find()
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