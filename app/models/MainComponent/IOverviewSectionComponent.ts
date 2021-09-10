import { IOverviewSection } from '../../interfaces/MainComponent/IOverviewSectionComponent';
import mongoose from 'mongoose';

const OverviewSectionComponent = new mongoose.Schema(
    {
        id: { type: Number },
        section_title: { type: String },
        section_discription: { type: String },
        image1: { type: String },
        image2: { type: String },
        image3: { type: String },
        image4: { type: String },
        image5: { type: String },
        image6: { type: String },
        image7: { type: String },
        image8: { type: String },
        image9: { type: String },
        image10: { type: String },
        heading1: { type: String },
        heading2: { type: String },
        heading3: { type: String },
        heading4: { type: String },
        heading5: { type: String },
        heading6: { type: String },
        heading7: { type: String },
        heading8: { type: String },
        heading9: { type: String },
        heading10: { type: String },
        description1: { type: String },
        description2: { type: String },
        description3: { type: String },
        description4: { type: String },
        description5: { type: String },
        description6: { type: String },
        description7: { type: String },
        description8: { type: String },
        description9: { type: String },
        description10: { type: String },
    })

export default mongoose.model<IOverviewSection & mongoose.Document>('IOverviewSection', OverviewSectionComponent)