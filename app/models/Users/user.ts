import {IUser } from '../../interfaces/users/IUser';
import mongoose from 'mongoose';

const User = new mongoose.Schema(
    {
   
        email:{
            type: String,
            index: true,
            lowecase: true
        },
        password:{
            type: String
        },
       
}
,{
    timestamps: true
})

export default mongoose.model<IUser & mongoose.Document>('User', User)