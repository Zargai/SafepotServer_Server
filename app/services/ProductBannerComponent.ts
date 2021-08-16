import { Service, Inject } from 'typedi';
import { IProductBanner, IProductBannerInput } from '../interfaces/MainComponent/ProductBannerComponent';


@Service()
export default class ProductBannercomponentService {
  constructor(
    @Inject('ProductBannerComponentModel') private ProductBannerComponentModel: Models.ProductBannerComponentModel,
  ) { }
  //for adding data
  public async Add(InputDTO: IProductBannerInput): Promise<{ Record: IProductBanner }> {

       const Record = await this.ProductBannerComponentModel.create({...InputDTO});
       console.log("dataaa",Record)
    if (!Record) { throw new Error('Error! Data Cannot be Stored'); }
    else { return { Record }; }

  }

  //to update 
  public async update(InputDTO: IProductBannerInput): Promise<{ message: string, success: boolean }> {
    try {
      console.log("inputDTO", InputDTO)
      const Record = await this.ProductBannerComponentModel.updateOne({ "_id": "611a201a6c5b401de45ff9df" },{ ...InputDTO })
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
  public async getall(): Promise<{ Record: Array<IProductBannerInput>; }> {
    try {
      const Record = await this.ProductBannerComponentModel.find()
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