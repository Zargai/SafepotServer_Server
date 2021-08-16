import { Service, Inject } from 'typedi';
import { IBlogBoxInput, IBlogBox } from '../interfaces/MainComponent/IBlogBoxComponent';


@Service()
export default class UnitBoxcomponentService {
  constructor(
    @Inject('BlogboxComponentModel') private BlogboxComponentModel: Models.BlogBoxComponentModel,
  ) { }
  //for adding data
  public async Add(InputDTO: IBlogBoxInput): Promise<{ Record: IBlogBox }> {
    const count = await this.BlogboxComponentModel.countDocuments();
    var id =1;
    if(count>0){
        const data1 = await this.BlogboxComponentModel.find().limit(1).sort({$natural:-1})
        console.log("data",data1[0].id)
        id=data1[0].id+1
      }
      const data ={
        "id":id,
        title:InputDTO.title || '',
        image:InputDTO.image || '',
        description:InputDTO.description || '',
        pagetitle:InputDTO.pagetitle || ''
      }
      console.log("dataaa",data)
       const Record = await this.BlogboxComponentModel.create({...data});
       console.log("dataaa",Record)
    if (!Record) { throw new Error('Error! Data Cannot be Stored'); }
    else { return { Record }; }

  }

  //to update 
  public async update(InputDTO: IBlogBoxInput): Promise<{ message: string, success: boolean }> {
    try {
      console.log("inputDTO", InputDTO)
      var id ;
      if(InputDTO.pagetitle){
         id =1;
      }else{
      id =InputDTO.id
       }
      const Record = await this.BlogboxComponentModel.updateOne({ "id": id }, { ...InputDTO })
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
 public async delete(InputDTO: IBlogBoxInput): Promise<{  success: boolean; }> {
    try {    
        const id =InputDTO.id
      const userRecord = (await this.BlogboxComponentModel.deleteOne({ "id": id }))
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
  public async getall(): Promise<{ Record: Array<IBlogBoxInput>; }> {
    try {
      const Record = await this.BlogboxComponentModel.find()
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