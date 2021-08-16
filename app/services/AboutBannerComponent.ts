import { Service, Inject } from 'typedi';
import { IAboutBanner, IAboutBannereInput } from '../interfaces/MainComponent/AboutBannerComponent';


@Service()
export default class AboutBannercomponentService {
  constructor(
    @Inject('AboutBannerComponentModel') private AboutBannerComponentModel: Models.AboutBannerComponentModel,
  ) { }
  //for adding data
  public async Add(InputDTO: IAboutBannereInput): Promise<{ Record: IAboutBanner }> {

       const Record = await this.AboutBannerComponentModel.create({...InputDTO});
       console.log("dataaa",Record)
    if (!Record) { throw new Error('Error! Data Cannot be Stored'); }
    else { return { Record }; }

  }

  //to update 
  public async update(InputDTO: IAboutBannereInput): Promise<{ message: string, success: boolean }> {
    try {
      console.log("inputDTO", InputDTO)
      const Record = await this.AboutBannerComponentModel.updateOne({ "_id": "611a534baa592704dc908be3" },{ ...InputDTO })
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
  public async getall(): Promise<{ Record: Array<IAboutBannereInput>; }> {
    try {
      const Record = await this.AboutBannerComponentModel.find()
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