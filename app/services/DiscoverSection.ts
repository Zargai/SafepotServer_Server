import { Service, Inject } from 'typedi';
import { IDiscoverSection, IDiscoverSectionInput } from '../interfaces/MainComponent/DiscoverSection';


@Service()
export default class DiscoverSectioncomponentService {
  constructor(
    @Inject('DiscoverSectionComponentModel') private DiscoverSectionComponentModel: Models.DiscoverSectionComponentModel,
  ) { }
  //for adding data
  public async Add(InputDTO: IDiscoverSectionInput): Promise<{ Record: IDiscoverSection }> {
    const count = await this.DiscoverSectionComponentModel.countDocuments();
    var id =1;
    if(count>0){
        const data1 = await this.DiscoverSectionComponentModel.find().limit(1).sort({$natural:-1})
        console.log("data",data1[0].id)
        id=data1[0].id+1
      }
      const data ={
        "id":id,
        title:InputDTO.title||'' ,
        image:InputDTO.image ||'',
        description:InputDTO.description ||'',
        pagetitle: InputDTO.pagetitle ||'',
        pagedesctiption1:InputDTO.pagedesctiption1 || '',
        pagedesctiption2:InputDTO.pagedesctiption1 || '',
      }
      console.log("dataaa",data)
       const Record = await this.DiscoverSectionComponentModel.create({...data});
       console.log("dataaa",Record)
    if (!Record) { throw new Error('Error! Data Cannot be Stored'); }
    else { return { Record }; }

  }

  //to update 
  public async update(InputDTO: IDiscoverSectionInput): Promise<{ message: string, success: boolean }> {
    try {
      console.log("inputDTO", InputDTO)
      var id ;
      if(InputDTO.pagetitle || InputDTO.pagedesctiption1 || InputDTO.pagedesctiption2){
         id =1;
      }else{
      id =InputDTO.id
       }
      const Record = await this.DiscoverSectionComponentModel.updateOne({ "id": id }, { ...InputDTO })
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
 public async delete(InputDTO: IDiscoverSectionInput): Promise<{  success: boolean; }> {
    try {    
        const id =InputDTO.id
      const userRecord = (await this.DiscoverSectionComponentModel.deleteOne({ "id": id }))
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
  public async getall(): Promise<{ Record: Array<IDiscoverSection>; }> {
    try {
      const Record = await this.DiscoverSectionComponentModel.find()
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