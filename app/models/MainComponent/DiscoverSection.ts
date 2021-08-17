import {IDiscoverSection } from '../../interfaces/MainComponent/DiscoverSection';
import mongoose from 'mongoose';

const DiscoverSectionComponent = new mongoose.Schema(
    {
        id:{ type: Number },
        pagetitle:{ type: String },
        image:{ type: String },
        title:{ type: String },
        description:{ type: String },   
        pagedesctiption1:{ type: String },   
        pagedesctiption2:{ type: String },   
           
})

export default mongoose.model<IDiscoverSection & mongoose.Document>('DiscoverSectionComponent', DiscoverSectionComponent)