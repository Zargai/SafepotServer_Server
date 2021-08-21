import { Service, Inject } from 'typedi';
import { IEnterpriseInfo, IEnterpriseInfoInput } from '../interfaces/MainComponent/EnterpriseInfo';


@Service()
export default class EnterpriseInfoComponentService {
  constructor(
    @Inject('EnterpriseInfocomponentModel') private EnterpriseInfocomponentModel: Models.EnterpriseInfocomponentModel,
  ) { }
  //for adding data
  public async Add(InputDTO: IEnterpriseInfoInput): Promise<{ Record: IEnterpriseInfo }> {
    const count = await this.EnterpriseInfocomponentModel.countDocuments();
    var id =1;
    if(count>0){
        const data1 = await this.EnterpriseInfocomponentModel.find().limit(1).sort({$natural:-1})
        console.log("data",data1[0].id)
        id=data1[0].id+1
      }
      const data ={
        "id":id,
        image:InputDTO.image ||'',
        description:InputDTO.description ||'',
        pagetitle:InputDTO.pagetitle ||'',
      }
      console.log("dataaa",data)
       const Record = await this.EnterpriseInfocomponentModel.create({...data});
       console.log("dataaa",Record)
    if (!Record) { throw new Error('Error! Data Cannot be Stored'); }
    else { return { Record }; }

  }

  //to update 
  public async update(InputDTO: IEnterpriseInfoInput): Promise<{ message: string, success: boolean }> {
    try {
        console.log("inputDTO", InputDTO)
        var id ;
        if(InputDTO.pagetitle ){
           id =1;
        }
        else{
        id =InputDTO.id
         }
        const Record = await this.EnterpriseInfocomponentModel.updateOne({ "id": id }, { ...InputDTO })
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
 public async delete(InputDTO: IEnterpriseInfoInput): Promise<{  success: boolean; }> {
    try {    
        const id =InputDTO.id
      const userRecord = (await this.EnterpriseInfocomponentModel.deleteOne({ "id": id }))
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
  public async getall(): Promise<{ Record: Array<IEnterpriseInfo>; }> {
    try {
      const Record = await this.EnterpriseInfocomponentModel.find()
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