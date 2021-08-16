import { Document, Model } from 'mongoose';
import mongoose from 'mongoose'
import { IUser } from '../../interfaces/users/IUser';
import { ISliderComponent } from '../../interfaces/MainComponent/SliderComponent'; 
import { IHeader } from '../../interfaces/MainComponent/IHeader';
import { IUnit } from '../../interfaces/MainComponent/UnitsboxComponent';
import { IDataSecurity } from '../../interfaces/MainComponent/DataSecurityComponent';
import { ITechBox } from '../../interfaces/MainComponent/Techboxcomponent';
import { IBlogBox } from '../../interfaces/MainComponent/IBlogBoxComponent';
import { IProductBanner } from '../../interfaces/MainComponent/ProductBannerComponent';
import { IGetbackupbox } from '../../interfaces/MainComponent/GetBackupBoxComponent';
import { IPickProduct } from '../../interfaces/MainComponent/PickProductComponent';
import { IOurProduct } from '../../interfaces/MainComponent/OurProductComponent';
import { IAboutBanner } from '../../interfaces/MainComponent/AboutBannerComponent';
import { IWhoWeAre } from '../../interfaces/MainComponent/WhoWeAreComponent';
import { ISocialPresence } from '../../interfaces/MainComponent/SocialPrecenseComponent';



declare global {

  namespace Models {
    export type UserModel = Model<IUser & Document>;
    export type slidercomponentModel = Model<ISliderComponent & Document>;
    export type HeadercomponentModel = Model<IHeader & Document>;
    export type UnitsboxComponentModel = Model<IUnit & Document>;
    export type DataSecurityComponentModel = Model<IDataSecurity & Document>;
    export type TechBoxComponentModel = Model<ITechBox & Document>;
    export type BlogBoxComponentModel = Model<IBlogBox & Document>;
    export type ProductBannerComponentModel = Model<IProductBanner & Document>;
    export type GetbackupboxComponentModel = Model<IGetbackupbox & Document>;
    export type OurProductComponentModel = Model<IOurProduct & Document>;
    export type PickProductComponentModel = Model<IPickProduct & Document>;
    export type AboutBannerComponentModel = Model<IAboutBanner & Document>;
    export type WhoWeAreComponentModel = Model<IWhoWeAre & Document>;
    export type SocialPrecenseComponentModel = Model<ISocialPresence & Document>;

  }
  export type ObjectId = mongoose.Schema.Types.ObjectId;
}

