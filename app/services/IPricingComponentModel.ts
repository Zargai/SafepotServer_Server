import { Service, Inject } from 'typedi';
import { IPricing, IPricingInput } from '../interfaces/MainComponent/IPricing';


@Service()
export default class IPricingComponentModelServices {
    constructor(
        @Inject('IPricingComponentModel') private IPricingComponentModel: Models.IPricingComponentModel,
    ) { }
    //for adding data
    public async Add(InputDTO: IPricingInput): Promise<{ Record: IPricing }> {

        const Record = await this.IPricingComponentModel.create({ ...InputDTO });
        console.log("dataaa", Record)
        if (!Record) { throw new Error('Error! Data Cannot be Stored'); }
        else { return { Record }; }

    }

    //to update 
    public async update(InputDTO: IPricingInput): Promise<{ message: string, success: boolean }> {
        try {
            console.log("inputDTO", InputDTO)
            const { username } = { ...InputDTO }
            const Record = await this.IPricingComponentModel.updateOne({ "username": username }, { ...InputDTO })
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
    public async get(InputDTO: IPricingInput): Promise<{ Record: IPricing }> {
        try {
            const { username } = { ...InputDTO }
            const Record = await this.IPricingComponentModel.findOne({ "username": username })
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
    public async getall(): Promise<{ Record: Array<IPricingInput>; }> {
        try {
            const Record = await this.IPricingComponentModel.find()
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