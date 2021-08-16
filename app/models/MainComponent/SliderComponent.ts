import {ISliderComponent } from '../../interfaces/MainComponent/SliderComponent';
import mongoose from 'mongoose';

const slidercomponent = new mongoose.Schema(
    {
        id: { type: Number },
        title: { type: String },
        image1: { type: String },
        description: { type: String },
        image2: { type: String },
        title2: { type: String },
        image3: { type: String },
        title3: { type: String },
        image4: { type: String },
        title4: { type: String },
        image5: { type: String },
        title5: { type: String },   
})

export default mongoose.model<ISliderComponent & mongoose.Document>('slidercomponent', slidercomponent)