import { Service, Inject } from 'typedi';
import { IGetbackupbox, IGetbackupboxInput } from '../interfaces/MainComponent/GetBackupBoxComponent';


@Service()
export default class GetbackupboxComponentService {
  constructor(
    @Inject('GetbackupboxComponentModel') private GetbackupboxComponentModel: Models.GetbackupboxComponentModel,
  ) { }
  //for adding data
  public async Add(InputDTO: IGetbackupboxInput): Promise<{ Record: IGetbackupbox }> {

       const Record = await this.GetbackupboxComponentModel.create({...InputDTO});
       console.log("dataaa",Record)
    if (!Record) { throw new Error('Error! Data Cannot be Stored'); }
    else { return { Record }; }

  }

  //to update 
  public async update(InputDTO: IGetbackupboxInput): Promise<{ message: string, success: boolean }> {
    try {
      console.log("inputDTO", InputDTO)
      const Record = await this.GetbackupboxComponentModel.updateOne({ "_id": "611a44187f94704ef0aa56a0" },{ ...InputDTO })
      console.log("Record", Record)
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
  public async getall(): Promise<{ Record: Array<IGetbackupboxInput>; }> {
    try {
      const Record = await this.GetbackupboxComponentModel.find()
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