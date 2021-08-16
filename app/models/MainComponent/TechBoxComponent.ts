import {ITechBox,ITechBoxInput } from '../../interfaces/MainComponent/Techboxcomponent';
import mongoose from 'mongoose';

const TechboxComponent = new mongoose.Schema(
    {
        id:{ type: Number },
        image:{ type: String },
        title:{ type: String },
        description:{ type: String },    
})

export default mongoose.model<ITechBox & mongoose.Document>('TechboxComponent', TechboxComponent)