
import {IContactUscontact } from '../../interfaces/MainComponent/ContactOfficecontactcomponent';
import mongoose from 'mongoose';

const ContactOfficecontactcomponent = new mongoose.Schema(
    {
        id:{ type: Number },
        image:{ type: String },
        title:{ type: String },
        description:{ type: String },    
        email:{ type: String },    
        number:{ type: String },       
})

export default mongoose.model<IContactUscontact & mongoose.Document>('ContactOfficecontactcomponent', ContactOfficecontactcomponent)