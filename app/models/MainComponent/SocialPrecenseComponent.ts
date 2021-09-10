import {ISocialPresence } from '../../interfaces/MainComponent/SocialPrecenseComponent';
import mongoose from 'mongoose';

const SocialPresenceComponent = new mongoose.Schema(
    {
        id:{ type: Number },
        pagetitle:{ type: String },
        image:{ type: String },
        title:{ type: String },
        description:{ type: String },   
        fblink: { type: String },
        youtubelink: { type: String },
        linkinlink: { type: String },
})

export default mongoose.model<ISocialPresence & mongoose.Document>('SocialPresenceComponent', SocialPresenceComponent)