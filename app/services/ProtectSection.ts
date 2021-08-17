import { Service, Inject } from 'typedi';
import { IProtectSection, IProtectSectionInput } from '../interfaces/MainComponent/ProtectSection';


@Service()
export default class ProtectSectioncomponentService {
  constructor(
    @Inject('ProtectSectionComponentModel') private ProtectSectionComponentModel: Models.ProtectSectionComponentModel,
  ) { }
  //for adding data
  public async Add(InputDTO: IProtectSectionInput): Promise<{ Record: IProtectSection }> {
    const count = await this.ProtectSectionComponentModel.countDocuments();
    var id =1;
    if(count>0){
        const data1 = await this.ProtectSectionComponentModel.find().limit(1).sort({$natural:-1})
        console.log("data",data1[0].id)
        id=data1[0].id+1
      }
      const data ={
        "id":id,
        title:InputDTO.title ||'',
        image:InputDTO.image ||'',
        description:InputDTO.description ||'',
        pagetitle: InputDTO.pagetitle ||''
      }
      console.log("dataaa",data)
       const Record = await this.ProtectSectionComponentModel.create({...data});
       console.log("dataaa",Record)
    if (!Record) { throw new Error('Error! Data Cannot be Stored'); }
    else { return { Record }; }

  }

  //to update 
  public async update(InputDTO: IProtectSectionInput): Promise<{ message: string, success: boolean }> {
    try {
      console.log("inputDTO", InputDTO)
     const  id =InputDTO.id
      const Record = await this.ProtectSectionComponentModel.updateOne({ "id": id }, { ...InputDTO })
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
 public async delete(InputDTO: IProtectSectionInput): Promise<{  success: boolean; }> {
    try {    
        const id =InputDTO.id
      const userRecord = (await this.ProtectSectionComponentModel.deleteOne({ "id": id }))
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
  public async getall(): Promise<{ Record: Array<IProtectSectionInput>; }> {
    try {
      const Record = await this.ProtectSectionComponentModel.find()
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