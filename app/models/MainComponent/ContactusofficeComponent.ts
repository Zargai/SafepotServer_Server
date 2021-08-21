
import {IContactUsOffice } from '../../interfaces/MainComponent/ContactusofficeComponent';
import mongoose from 'mongoose';

const ContactusofficeComponent = new mongoose.Schema(
    {
        id:{ type: Number },
        image:{ type: String },
        title:{ type: String },
        description:{ type: String },    
})

export default mongoose.model<IContactUsOffice & mongoose.Document>('ContactusofficeComponent', ContactusofficeComponent)