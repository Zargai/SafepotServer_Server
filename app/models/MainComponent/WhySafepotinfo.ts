import {IWhySafepotInfo } from '../../interfaces/MainComponent/WhySafepotinfo';
import mongoose from 'mongoose';

const WhySafepotinfoComponent = new mongoose.Schema(
    {
        id:{ type: Number },
        pagetitle:{ type: String },
        title:{ type: String },
        pagedescription:{ type: String },
        image:{ type: String },
        description:{ type: String },    
})

export default mongoose.model<IWhySafepotInfo & mongoose.Document>('WhySafepotinfoComponent', WhySafepotinfoComponent)