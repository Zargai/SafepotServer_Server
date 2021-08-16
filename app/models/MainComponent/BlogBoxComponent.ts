import {IBlogBox,IBlogBoxInput } from '../../interfaces/MainComponent/IBlogBoxComponent';
import mongoose from 'mongoose';

const BlogboxComponent = new mongoose.Schema(
    {
        id:{ type: Number },
        pagetitle:{ type: String },
        image:{ type: String },
        title:{ type: String },
        description:{ type: String },    
})

export default mongoose.model<IBlogBox & mongoose.Document>('BlogboxComponent', BlogboxComponent)