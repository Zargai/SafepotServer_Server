import { Service, Inject } from 'typedi';
import { IContactUscontact, IContactUscontactInput } from '../interfaces/MainComponent/ContactOfficecontactcomponent';


@Service()
export default class ContactOfficecontactcomponentService {
  constructor(
    @Inject('ContactOfficecontactcomponentModel') private ContactOfficecontactcomponentModel: Models.ContactOfficecontactcomponentModel,
  ) { }
  //for adding data
  public async Add(InputDTO: IContactUscontactInput): Promise<{ Record: IContactUscontact }> {
    const count = await this.ContactOfficecontactcomponentModel.countDocuments();
    var id =1;
    if(count>0){
        const data1 = await this.ContactOfficecontactcomponentModel.find().limit(1).sort({$natural:-1})
        console.log("data",data1[0].id)
        id=data1[0].id+1
      }
      const data ={
        "id":id,
        title:InputDTO.title || '',
        image:InputDTO.image || '',
        description:InputDTO.description || '',
        email:InputDTO.email || '',
        number:InputDTO.number || '',
      }
      console.log("dataaa",data)
       const Record = await this.ContactOfficecontactcomponentModel.create({...data});
       console.log("dataaa",Record)
    if (!Record) { throw new Error('Error! Data Cannot be Stored'); }
    else { return { Record }; }

  }

  //to update 
  public async update(InputDTO: IContactUscontactInput): Promise<{ message: string, success: boolean }> {
    try {
      console.log("inputDTOcontact", InputDTO)
      const id =InputDTO.id
       
      const Record = await this.ContactOfficecontactcomponentModel.updateOne({ "id": id }, { ...InputDTO })
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
 public async delete(InputDTO: IContactUscontactInput): Promise<{  success: boolean; }> {
    try {    
        const id =InputDTO.id
      const userRecord = (await this.ContactOfficecontactcomponentModel.deleteOne({ "id": id }))
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
  public async getall(): Promise<{ Record: Array<IContactUscontact>; }> {
    try {
      const Record = await this.ContactOfficecontactcomponentModel.find()
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