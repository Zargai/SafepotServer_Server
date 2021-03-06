import { Document, Model } from "mongoose";
import mongoose from "mongoose";
import { IUser } from "../../interfaces/users/IUser";
import { ISliderComponent } from "../../interfaces/MainComponent/SliderComponent";
import { IHeader } from "../../interfaces/MainComponent/IHeader";
import { IUnit } from "../../interfaces/MainComponent/UnitsboxComponent";
import { IDataSecurity } from "../../interfaces/MainComponent/DataSecurityComponent";
import { ITechBox } from "../../interfaces/MainComponent/Techboxcomponent";
import {
  IBlogBox,
  IBlogBoxInput,
} from "../../interfaces/MainComponent/IBlogBoxComponent";
import { IProductBanner } from "../../interfaces/MainComponent/ProductBannerComponent";
import { IGetbackupbox } from "../../interfaces/MainComponent/GetBackupBoxComponent";
import { IPickProduct } from "../../interfaces/MainComponent/PickProductComponent";
import { IOurProduct } from "../../interfaces/MainComponent/OurProductComponent";
import { IAboutBanner } from "../../interfaces/MainComponent/AboutBannerComponent";
import { IWhoWeAre } from "../../interfaces/MainComponent/WhoWeAreComponent";
import { ISocialPresence } from "../../interfaces/MainComponent/SocialPrecenseComponent";
import { IAccessSection } from "../../interfaces/MainComponent/AccessSection";
import { IDiscoverSection } from "../../interfaces/MainComponent/DiscoverSection";
import { IFeatureBanner } from "../../interfaces/MainComponent/FeatureBanner";
import { IOrganizeSection } from "../../interfaces/MainComponent/OrganizeSection";
import { IProtectSection } from "../../interfaces/MainComponent/ProtectSection";
import { IContactUsBanner } from "../../interfaces/MainComponent/ContactBannerComponent";
import { IContactUscontact } from "../../interfaces/MainComponent/ContactOfficecontactcomponent";
import { IContactUsOffice } from "../../interfaces/MainComponent/ContactusofficeComponent";
import { IWhySafepotBanner } from "../../interfaces/MainComponent/WhySafepotBanner";
import { IWhySafepotInfo } from "../../interfaces/MainComponent/WhySafepotinfo";
import { IEnterpriseBanner } from "../../interfaces/MainComponent/EnterpriseBanner";
import { IEnterpriseInfo } from "../../interfaces/MainComponent/EnterpriseInfo";
import { IEnterpriseServices } from "../../interfaces/MainComponent/EnterpriseServices";
import { IEnterpriseBusiness } from "../../interfaces/MainComponent/Enterprisebusiness";
import { IBannerC } from "../../interfaces/MainComponent/IBannerC";
import { IPricing } from "../../interfaces/MainComponent/IPricing";
import { IOverviewSection } from "../../interfaces/MainComponent/IOverviewSectionComponent";
import { IBlogsection } from "../../interfaces/MainComponent/IBlogsectionComponent";
import { IPricingPlan } from "../../interfaces/MainComponent/IpricingPlanadmin";

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
    export type SocialPrecenseComponentModel = Model<
      ISocialPresence & Document
    >;
    export type AccessSectionComponentModel = Model<IAccessSection & Document>;
    export type DiscoverSectionComponentModel = Model<
      IDiscoverSection & Document
    >;
    export type FeatureBannerComponentModel = Model<IFeatureBanner & Document>;
    export type OrganizeSectionComponentModel = Model<
      IOrganizeSection & Document
    >;
    export type ProtectSectionComponentModel = Model<
      IProtectSection & Document
    >;
    //contact us
    export type ContactBannerComponentModel = Model<
      IContactUsBanner & Document
    >;
    export type ContactOfficecontactcomponentModel = Model<
      IContactUscontact & Document
    >;
    export type ContactusofficeComponentModel = Model<
      IContactUsOffice & Document
    >;
    //why Safepot
    export type WhySafepotBannercomponentModel = Model<
      IWhySafepotBanner & Document
    >;
    export type WhySafepotInfoComponentModel = Model<
      IWhySafepotInfo & Document
    >;
    //Enterprise
    export type EnterpriseBannercomponentModel = Model<
      IEnterpriseBanner & Document
    >;
    export type EnterprisebusinessComponentModel = Model<
      IEnterpriseBusiness & Document
    >;
    export type EnterpriseInfocomponentModel = Model<
      IEnterpriseInfo & Document
    >;
    export type EnterpriseServicesComponentModel = Model<
      IEnterpriseServices & Document
    >;
    //IBANNERC
    export type IBannerCComponentModel = Model<IBannerC & Document>;
    //IPricing
    export type IPricingComponentModel = Model<IPricing & Document>;
    //overviewsection
    export type OverviewSectionComponentModel = Model<
      IOverviewSection & Document
    >;
    //BlogComponent Model

    export type IBlogsectionComponentModel = Model<IBlogsection & Document>;
    export type IPricingPlanComponentModel = Model<IPricingPlan & Document>;
  }
  export type ObjectId = mongoose.Schema.Types.ObjectId;
}
