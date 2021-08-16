import { Service, Inject } from 'typedi';
import { IHeader, IHeaderInput } from '../interfaces/MainComponent/IHeader';

@Service()
export default class HeadercomponentService {
  constructor(
    @Inject('headercomponentModel') private Headercomponent: Models.HeadercomponentModel,
  ) { }

  //for adding data
  public async Add(InputDTO: IHeaderInput): Promise<{ Record: IHeader }> {
    console.log("inputDTO",InputDTO)
    const Record = await this.Headercomponent.create({ ...InputDTO });
    if (!Record) { throw new Error('Error! Data Cannot be Stored'); }
    else { return { Record }; }
   }

  //to update 
  public async update(InputDTO: IHeaderInput): Promise<{ message: string, success: boolean }> {
    try {
      console.log("inputDTO", InputDTO)
      const Record = await this.Headercomponent.updateOne({ "_id": "6114e73e7a279527c86dd5b9"},{...InputDTO})
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
  public async getall(): Promise<{ Record: Array<IHeader>; }> {
    try {
      const Record = await this.Headercomponent.find({ "_id": "6114e73e7a279527c86dd5b9"})
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