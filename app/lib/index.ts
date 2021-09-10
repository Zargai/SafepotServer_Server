import expressLoader from './express';
import mongooseLoader from './mongoose';
import injector from './injector'

export default async ({ expressApp }) => {

  const mongoConnection = await mongooseLoader()

  const userModel =
    { name: 'userModel', model: require('../models/Users/user').default, };
  const HeaderModel =
    { name: 'headercomponentModel', model: require('../models/MainComponent/Header').default, };
  const slidercomponentModel =
    { name: 'slidercomponentModel', model: require('../models/MainComponent/SliderComponent').default, };
  const unitboxcomponentModel =
    { name: 'unitboxcomponentModel', model: require('../models/MainComponent/UnitBoxComponent').default, };

  const DataSecurityComponentModel =
    { name: 'DataSecurityComponentModel', model: require('../models/MainComponent/DataSecurityComponent').default, };

  const TechBoxComponentModel =
    { name: 'TechBoxComponentModel', model: require('../models/MainComponent/TechBoxComponent').default, };

  const BlogboxComponentModel =
    { name: 'BlogboxComponentModel', model: require('../models/MainComponent/BlogBoxComponent').default, };

  const ProductBannerComponentModel =
    { name: 'ProductBannerComponentModel', model: require('../models/MainComponent/IProductBannerComponent').default, };

  const GetbackupboxComponentModel =
    { name: 'GetbackupboxComponentModel', model: require('../models/MainComponent/GetbackupboxComponent').default, };

  const OurProductComponentModel =
    { name: 'OurProductComponentModel', model: require('../models/MainComponent/OurProductComponent').default, };

  const PickProductComponentModel =
    { name: 'PickProductComponentModel', model: require('../models/MainComponent/PickProductComponent').default, };

  const AboutBannerComponentModel =
    { name: 'AboutBannerComponentModel', model: require('../models/MainComponent/AboutBannerCompOnent').default, };

  const WhoWeAreComponentModel =
    { name: 'WhoWeAreComponentModel', model: require('../models/MainComponent/WhoWeAreComponent').default, };

  const SocialPrecenseComponentModel =
    { name: 'SocialPrecenseComponentModel', model: require('../models/MainComponent/SocialPrecenseComponent').default, };
  const AccessSectionComponentModel =
    { name: 'AccessSectionComponentModel', model: require('../models/MainComponent/AccessSection').default, };
  const DiscoverSectionComponentModel =
    { name: 'DiscoverSectionComponentModel', model: require('../models/MainComponent/DiscoverSection').default, };
  const FeatureBannerComponentModel =
    { name: 'FeatureBannerComponentModel', model: require('../models/MainComponent/FeatureBanner').default, };
  const OrganizeSectionComponentModel =
    { name: 'OrganizeSectionComponentModel', model: require('../models/MainComponent/OrganizeSection').default, };
  const ProtectSectionComponentModel =
    { name: 'ProtectSectionComponentModel', model: require('../models/MainComponent/ProtectSection').default, };
  //Contact Us
  const ContactBannerComponentModel =
    { name: 'ContactBannerComponentModel', model: require('../models/MainComponent/ContactBannerComponent').default, };
  const ContactOfficecontactcomponentModel =
    { name: 'ContactOfficecontactcomponentModel', model: require('../models/MainComponent/ContactOfficecontactcomponent').default, };
  const ContactusofficeComponentModel =
    { name: 'ContactusofficeComponentModel', model: require('../models/MainComponent/ContactusofficeComponent').default, };
  //why Safepot
  const WhySafepotBannercomponentModel =
    { name: 'WhySafepotBannercomponentModel', model: require('../models/MainComponent/WhySafepotBanner').default, };
  const WhySafepotInfoComponentModel =
    { name: 'WhySafepotInfoComponentModel', model: require('../models/MainComponent/WhySafepotinfo').default, };
    //Enterprise
    const EnterpriseBannercomponentModel =
    { name: 'EnterpriseBannercomponentModel', model: require('../models/MainComponent/EnterpriseBanner').default, };
  const EnterprisebusinessComponentModel =
    { name: 'EnterprisebusinessComponentModel', model: require('../models/MainComponent/Enterprisebusiness').default, };
    const EnterpriseInfocomponentModel =
    { name: 'EnterpriseInfocomponentModel', model: require('../models/MainComponent/EnterpriseInfo').default, };
  const EnterpriseServicesComponentModel =
    { name: 'EnterpriseServicesComponentModel', model: require('../models/MainComponent/EnterpriseServices').default, };
   //IBannerC
  const IBannerCComponentModel =
    { name: 'IBannerCComponentModel', model: require('../models/MainComponent/IBannerC').default, };

  //IBannerC
  const IPricingComponentModel =
    { name: 'IPricingComponentModel', model: require('../models/MainComponent/IPricing').default, };
  //overview section
  const OverviewSectionComponentModel =
    { name: 'OverviewSectionComponentModel', model: require('../models/MainComponent/IOverviewSectionComponent').default, };


  const { agenda } = await injector({
    mongoConnection,
    models: [
      userModel, slidercomponentModel, HeaderModel, unitboxcomponentModel,
      DataSecurityComponentModel, TechBoxComponentModel, BlogboxComponentModel, ProductBannerComponentModel,
      GetbackupboxComponentModel, OurProductComponentModel, PickProductComponentModel, AboutBannerComponentModel
      , WhoWeAreComponentModel, SocialPrecenseComponentModel, AccessSectionComponentModel, DiscoverSectionComponentModel,
      FeatureBannerComponentModel, OrganizeSectionComponentModel, ProtectSectionComponentModel, ContactBannerComponentModel,
      ContactOfficecontactcomponentModel, ContactusofficeComponentModel, WhySafepotBannercomponentModel,
      WhySafepotInfoComponentModel,EnterpriseServicesComponentModel,EnterpriseInfocomponentModel,EnterpriseBannercomponentModel,
      EnterprisebusinessComponentModel, IBannerCComponentModel, IPricingComponentModel, OverviewSectionComponentModel
    ]
  });

  await expressLoader({ app: expressApp });
  console.log('Express ready to go!!');

};