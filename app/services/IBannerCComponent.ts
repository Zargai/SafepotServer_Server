import { Service, Inject } from 'typedi';
import { IBannerC, IBannerCInput } from '../interfaces/MainComponent/IBannerC';


@Service()
export default class IBannerCComponentServices {
    constructor(
        @Inject('IBannerCComponentModel') private IBannerCComponentModel: Models.IBannerCComponentModel,
    ) { }
    //for adding data
    public async Add(InputDTO: IBannerCInput): Promise<{ Record: IBannerC }> {

        const Record = await this.IBannerCComponentModel.create({ ...InputDTO });
        console.log("dataaa", Record)
        if (!Record) { throw new Error('Error! Data Cannot be Stored'); }
        else { return { Record }; }

    }

    //to update 
    public async update(InputDTO: IBannerCInput): Promise<{ message: string, success: boolean }> {
        try {
            console.log("inputDTO", InputDTO)
            const {id} = {...InputDTO}
            const Record = await this.IBannerCComponentModel.updateOne({ "id": id }, { ...InputDTO })
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
    public async get(InputDTO: IBannerCInput): Promise<{ Record: IBannerC }> {
        try {
            const { id } = { ...InputDTO }
            const Record = await this.IBannerCComponentModel.findOne({"id": id})
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
    public async getall(): Promise<{ Record: Array<IBannerCInput>; }> {
        try {
            const Record = await this.IBannerCComponentModel.find()
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