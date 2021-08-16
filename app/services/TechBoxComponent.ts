import { Service, Inject } from 'typedi';
import { ITechBox, ITechBoxInput } from '../interfaces/MainComponent/Techboxcomponent';


@Service()
export default class TechBoxComponentService {
  constructor(
    @Inject('TechBoxComponentModel') private TechBoxComponentModel: Models.TechBoxComponentModel,
  ) { }
  //for adding data
  public async Add(InputDTO: ITechBoxInput): Promise<{ Record: ITechBox }> {
    const count = await this.TechBoxComponentModel.countDocuments();
    var id =1;
    if(count>0){
        const data1 = await this.TechBoxComponentModel.find().limit(1).sort({$natural:-1})
        console.log("data",data1[0].id)
        id=data1[0].id+1
      }
      const data ={
        "id":id,
        title:InputDTO.title,
        image:InputDTO.image,
        description:InputDTO.description
      }
      console.log("dataaa",data)
       const Record = await this.TechBoxComponentModel.create({...data});
       console.log("dataaa",Record)
    if (!Record) { throw new Error('Error! Data Cannot be Stored'); }
    else { return { Record }; }

  }

  //to update 
  public async update(InputDTO: ITechBoxInput): Promise<{ message: string, success: boolean }> {
    try {
      console.log("inputDTO", InputDTO)
     const  id =InputDTO.id
      const Record = await this.TechBoxComponentModel.updateOne({ "id": id }, { ...InputDTO })
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
 public async delete(InputDTO: ITechBoxInput): Promise<{  success: boolean; }> {
    try {    
        const id =InputDTO.id
      const userRecord = (await this.TechBoxComponentModel.deleteOne({ "id": id }))
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
  public async getall(): Promise<{ Record: Array<ITechBox>; }> {
    try {
      const Record = await this.TechBoxComponentModel.find()
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