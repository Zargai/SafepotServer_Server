
import { IEnterpriseServices } from '../../interfaces/MainComponent/EnterpriseServices';
import mongoose from 'mongoose';

const EnterpriseServicesComponent = new mongoose.Schema(
    {
        image: { type: String },
        id: { type: Number },
        title: { type: String },

    })

export default mongoose.model<IEnterpriseServices & mongoose.Document>('EnterpriseServicesComponent', EnterpriseServicesComponent)