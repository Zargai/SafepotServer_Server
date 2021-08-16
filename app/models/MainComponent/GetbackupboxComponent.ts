import {IGetbackupbox } from '../../interfaces/MainComponent/GetBackupBoxComponent';
import mongoose from 'mongoose';

const GetbackupboxComponent = new mongoose.Schema(
    {
        title:{ type: String },
        trialday:{ type: String },
        price:{ type: String },
        Cellphone:{ type: String }
         
})

export default mongoose.model<IGetbackupbox & mongoose.Document>('GetbackupboxComponent', GetbackupboxComponent)