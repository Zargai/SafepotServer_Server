import { Service, Inject } from 'typedi';
import { IBlogsection, IBlogsectionInput } from '../interfaces/MainComponent/IBlogsectionComponent';


@Service()
export default class IBlogsectionComponentServices {
    constructor(
        @Inject('IBlogsectionComponentModel') private IBlogsectionComponentModel: Models.IBlogsectionComponentModel,
    ) { }
    //for adding data
    public async Add(InputDTO: IBlogsectionInput): Promise<{ Record: IBlogsection }> {
        console.log("InputDTO", InputDTO)
        const Record = await this.IBlogsectionComponentModel.create({ ...InputDTO });
        console.log("dataaa", Record)
        if (!Record) { throw new Error('Error! Data Cannot be Stored'); }
        else { return { Record }; }

    }

    //to update 
    public async update(InputDTO: IBlogsectionInput): Promise<{ message: string, success: boolean }> {
        try {
            console.log("inputDTOupdate", InputDTO)
            const { id } = { ...InputDTO }
            console.log("id", id)
            const Record = await this.IBlogsectionComponentModel.updateOne({ "id": id }, { ...InputDTO })
            if (Record.nModified <= 0) {
                return { message: "No Modification", success: false }
            }
            return { message: "Data Updated", success: true };
        } catch (e) {
            console.log(e);
            throw e;
        }
    }
    //getone
    public async get(InputDTO: IBlogsectionInput): Promise<{ Record: IBlogsection }> {
        try {
            const { id } = { ...InputDTO }
            const Record = await this.IBlogsectionComponentModel.findOne({ "id": id })
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

    //getalldata
    public async getall(): Promise<{ Record: Array<IBlogsection>; }> {
        try {
            const Record = await this.IBlogsectionComponentModel.find()
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