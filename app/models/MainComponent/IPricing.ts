
import { IPricing } from '../../interfaces/MainComponent/IPricing';
import mongoose from 'mongoose';

const IPricing = new mongoose.Schema(
    {
        username: { type: String },
        plane_name: { type: String },
        monthly_price: { type: String },
        yearly_price: { type: String },
        description: { type: String },
    })

export default mongoose.model<IPricing & mongoose.Document>('IPricing', IPricing)