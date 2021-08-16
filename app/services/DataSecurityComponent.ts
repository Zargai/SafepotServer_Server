import { Service, Inject } from 'typedi';
import { IDataSecurity, IDataSecurityInput } from '../interfaces/MainComponent/DataSecurityComponent';


@Service()
export default class DataSecuritycomponentService {
  constructor(
    @Inject('DataSecurityComponentModel') private DatasecuritycomponentModel: Models.DataSecurityComponentModel,
  ) { }
  //for adding data
  public async Add(InputDTO: IDataSecurityInput): Promise<{ Record: IDataSecurity }> {

       const Record = await this.DatasecuritycomponentModel.create({...InputDTO});
       console.log("dataaa",Record)
    if (!Record) { throw new Error('Error! Data Cannot be Stored'); }
    else { return { Record }; }

  }

  //to update 
  public async update(InputDTO: IDataSecurityInput): Promise<{ message: string, success: boolean }> {
    try {
      console.log("inputDTO", InputDTO)
      const Record = await this.DatasecuritycomponentModel.updateOne({ "_id": "6117e6339d72e454849c34dd" },{ ...InputDTO })
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
  public async getall(): Promise<{ Record: Array<IDataSecurityInput>; }> {
    try {
      const Record = await this.DatasecuritycomponentModel.find()
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