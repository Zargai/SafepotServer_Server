import {IUnit,IUnitInput } from '../../interfaces/MainComponent/UnitsboxComponent';
import mongoose from 'mongoose';

const UnitsboxComponent = new mongoose.Schema(
    {
        id:{ type: Number },
        image:{ type: String },
        title:{ type: String },
        description:{ type: String },    
})

export default mongoose.model<IUnit & mongoose.Document>('UnitsboxComponent', UnitsboxComponent)