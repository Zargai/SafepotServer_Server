
import { IEnterpriseInfo } from '../../interfaces/MainComponent/EnterpriseInfo';
import mongoose from 'mongoose';

const EnterpriseInfoComponent = new mongoose.Schema(
    {
        image: { type: String },
        description: { type: String },
        id: { type: Number },
        pagetitle: { type: String },

    })

export default mongoose.model<IEnterpriseInfo & mongoose.Document>('EnterpriseInfoComponent', EnterpriseInfoComponent)