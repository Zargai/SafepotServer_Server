import { Service, Inject } from 'typedi';
import { IContactUsOfficeInput, IContactUsOffice } from '../interfaces/MainComponent/ContactusofficeComponent';


@Service()
export default class ContactusofficeComponentService {
  constructor(
    @Inject('ContactusofficeComponentModel') private ContactusofficeComponentModel: Models.ContactusofficeComponentModel,
  ) { }
  //for adding data
  public async Add(InputDTO: IContactUsOfficeInput): Promise<{ Record: IContactUsOffice }> {
    const count = await this.ContactusofficeComponentModel.countDocuments();
    var id =1;
    if(count>0){
        const data1 = await this.ContactusofficeComponentModel.find().limit(1).sort({$natural:-1})
        console.log("data",data1[0].id)
        id=data1[0].id+1
      }
      const data ={
        "id":id,
        title:InputDTO.title || '',
        description:InputDTO.description || '',
      }
      console.log("dataaa",data)
       const Record = await this.ContactusofficeComponentModel.create({...data});
       console.log("dataaa",Record)
    if (!Record) { throw new Error('Error! Data Cannot be Stored'); }
    else { return { Record }; }

  }

  //to update 
  public async update(InputDTO: IContactUsOfficeInput): Promise<{ message: string, success: boolean }> {
    try {
      console.log("inputDTO", InputDTO)
      const id =InputDTO.id 
      const Record = await this.ContactusofficeComponentModel.updateOne({ "id": id }, { ...InputDTO })
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
 public async delete(InputDTO: IContactUsOfficeInput): Promise<{  success: boolean; }> {
    try {    
        const id =InputDTO.id
      const userRecord = (await this.ContactusofficeComponentModel.deleteOne({ "id": id }))
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
  public async getall(): Promise<{ Record: Array<IContactUsOffice>; }> {
    try {
      const Record = await this.ContactusofficeComponentModel.find()
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