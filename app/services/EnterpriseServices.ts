import { Service, Inject } from 'typedi';
import { IEnterpriseServices, IEnterpriseServicesInput } from '../interfaces/MainComponent/EnterpriseServices';


@Service()
export default class EnterpriseInfoComponentService {
  constructor(
    @Inject('EnterpriseServicesComponentModel') private EnterpriseServicesComponentModel: Models.EnterpriseServicesComponentModel,
  ) { }
  //for adding data
  public async Add(InputDTO: IEnterpriseServicesInput): Promise<{ Record: IEnterpriseServices }> {
    const count = await this.EnterpriseServicesComponentModel.countDocuments();
    var id =1;
    if(count>0){
        const data1 = await this.EnterpriseServicesComponentModel.find().limit(1).sort({$natural:-1})
        console.log("data",data1[0].id)
        id=data1[0].id+1
      }
      const data ={
        "id":id,
        image:InputDTO.image ||'',
        title:InputDTO.title ||'',
      }
      console.log("dataaa",data)
       const Record = await this.EnterpriseServicesComponentModel.create({...data});
       console.log("dataaa",Record)
    if (!Record) { throw new Error('Error! Data Cannot be Stored'); }
    else { return { Record }; }

  }

  //to update 
  public async update(InputDTO: IEnterpriseServicesInput): Promise<{ message: string, success: boolean }> {
    try {
        console.log("inputDTO", InputDTO)
        var id =InputDTO.id
         
        const Record = await this.EnterpriseServicesComponentModel.updateOne({ "id": id }, { ...InputDTO })
        if (Record.nModified <= 0) {
          return { message: "No Modification", success: false }
        }
        return { message: "Data Updated", success: true };
      } catch (e) {
        console.log(e);
        throw e;
      }
  }
 //for deletion
 public async delete(InputDTO: IEnterpriseServicesInput): Promise<{  success: boolean; }> {
    try {    
        const id =InputDTO.id
      const userRecord = (await this.EnterpriseServicesComponentModel.deleteOne({ "id": id }))
      console.log('delete user', userRecord)
      if(userRecord.deletedCount == 0){
        return { success: false}
      }
      return { success: true}
    } catch (e) {
      console.log('error', e)

    }
  }
  //getalldata
  public async getall(): Promise<{ Record: Array<IEnterpriseServices>; }> {
    try {
      const Record = await this.EnterpriseServicesComponentModel.find()
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