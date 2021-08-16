import {IDataSecurity,IDataSecurityInput } from '../../interfaces/MainComponent/DataSecurityComponent';
import mongoose from 'mongoose';

const DataSecurityComponent = new mongoose.Schema(
    {
        id:{ type: Number },
        image:{ type: String },
        title:{ type: String },
        description:{ type: String },    
})

export default mongoose.model<IDataSecurity & mongoose.Document>('DataSecurity', DataSecurityComponent)