import { Service, Inject } from 'typedi';
import { IEnterpriseBanner, IEnterpriseBannerInput } from '../interfaces/MainComponent/EnterpriseBanner';


@Service()
export default class EnterpriseBannercomponentService {
  constructor(
    @Inject('EnterpriseBannercomponentModel') private EnterpriseBannercomponentModel: Models.EnterpriseBannercomponentModel,
  ) { }
  //for adding data
  public async Add(InputDTO: IEnterpriseBannerInput): Promise<{ Record: IEnterpriseBanner }> {

       const Record = await this.EnterpriseBannercomponentModel.create({...InputDTO});
       console.log("dataaa",Record)
    if (!Record) { throw new Error('Error! Data Cannot be Stored'); }
    else { return { Record }; }

  }

  //to update 
  public async update(InputDTO: IEnterpriseBannerInput): Promise<{ message: string, success: boolean }> {
    try {
      console.log("inputDTObanner", InputDTO)
      const Record = await this.EnterpriseBannercomponentModel.updateOne({ "_id": "6121081901796624840955ba" },{ ...InputDTO })
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
  public async getall(): Promise<{ Record: Array<IEnterpriseBanner>; }> {
    try {
      const Record = await this.EnterpriseBannercomponentModel.find()
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