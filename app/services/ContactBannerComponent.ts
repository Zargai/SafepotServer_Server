import { Service, Inject } from 'typedi';
import { IContactUsBanner, IContactUsBannerInput } from '../interfaces/MainComponent/ContactBannerComponent';


@Service()
export default class ContactBannerComponentService {
  constructor(
    @Inject('ContactBannerComponentModel') private ContactBannerComponentModel: Models.ContactBannerComponentModel,
  ) { }
  //for adding data
  public async Add(InputDTO: IContactUsBannerInput): Promise<{ Record: IContactUsBanner }> {

       const Record = await this.ContactBannerComponentModel.create({...InputDTO});
       console.log("dataaa",Record)
    if (!Record) { throw new Error('Error! Data Cannot be Stored'); }
    else { return { Record }; }

  }

  //to update 
  public async update(InputDTO: IContactUsBannerInput): Promise<{ message: string, success: boolean }> {
    try {
      console.log("inputDTO", InputDTO)
      const Record = await this.ContactBannerComponentModel.updateOne({ "_id": "6120eb4f7ac1ea35201cbd78" },{ ...InputDTO })
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
  public async getall(): Promise<{ Record: Array<IContactUsBanner>; }> {
    try {
      const Record = await this.ContactBannerComponentModel.find()
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