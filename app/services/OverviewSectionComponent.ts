import { Service, Inject } from 'typedi';
import { IOverviewSection, IOverviewSectionInput } from '../interfaces/MainComponent/IOverviewSectionComponent';


@Service()
export default class IOverviewComponentModelServices {
    constructor(
        @Inject('OverviewSectionComponentModel') private OverviewSectionComponentModel: Models.OverviewSectionComponentModel,
    ) { }
    //for adding data
    public async Add(InputDTO: IOverviewSectionInput): Promise<{ Record: IOverviewSection }> {
        console.log("InputDTO", InputDTO)
        const Record = await this.OverviewSectionComponentModel.create({ ...InputDTO });
        console.log("dataaa", Record)
        if (!Record) { throw new Error('Error! Data Cannot be Stored'); }
        else { return { Record }; }

    }

    //to update 
    public async update(InputDTO: IOverviewSectionInput): Promise<{ message: string, success: boolean }> {
        try {
            console.log("inputDTOupdate", InputDTO)
            const { id } = { ...InputDTO }
            console.log("id", id)
            const Record = await this.OverviewSectionComponentModel.updateOne({ "id": id }, { ...InputDTO })
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
    public async get(InputDTO: IOverviewSectionInput): Promise<{ Record: IOverviewSection }> {
        try {
            const { id } = { ...InputDTO }
            const Record = await this.OverviewSectionComponentModel.findOne({ "id": id })
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
    public async getall(): Promise<{ Record: Array<IOverviewSection>; }> {
        try {
            const Record = await this.OverviewSectionComponentModel.find()
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