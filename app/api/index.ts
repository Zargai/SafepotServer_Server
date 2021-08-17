import { Router } from 'express';
import auth from './routes/auth';
import slidercomponent from './routes/MainComponent/slidercomponent ';
import Headercomponent from './routes/MainComponent/header';
import Unitboxcomponent from './routes/MainComponent/Unitboxcomponent';
import datasecuritycomponent from './routes/MainComponent/DataSecurityComponent';
import TechBoxComponent from './routes/MainComponent/TechBoxComponent';
import BlogboxComponent from './routes/MainComponent/BlogboxComponent';
import ProductBannerComponent from './routes/MainComponent/ProductBannerComponent';
import GetbackupboxComponent from './routes/MainComponent/GetbackupboxComponent';
import OurProductComponent from './routes/MainComponent/OurProductComponent';
import PickProductcomponent from './routes/MainComponent/PickProductComponent';
import AboutBannerComponent from './routes/MainComponent/AboutBannerComponent';
import WhoWeAreCompnent from './routes/MainComponent/WhoWeAreCompnent';
import SocialPrecenseComponent from './routes/MainComponent/SocialPrecenseComponent';
import Featuresbanner from './routes/MainComponent/FeatureBanner';
import Discoversection from './routes/MainComponent/DiscoverSection';
import Organizesection from './routes/MainComponent/OrganizeSection';
import Accesssection from './routes/MainComponent/AccessSection';
import Protectsection from './routes/MainComponent/ProtectSection';



// guaranteed to get dependencies
export default () => {
	const app = Router();
	auth(app);
	slidercomponent(app);
	Headercomponent(app);
	Unitboxcomponent(app)
	datasecuritycomponent(app)
	TechBoxComponent(app)
	BlogboxComponent(app)
	ProductBannerComponent(app)
	GetbackupboxComponent(app)
	OurProductComponent(app)
	PickProductcomponent(app)
	AboutBannerComponent(app)
	WhoWeAreCompnent(app)
	SocialPrecenseComponent(app)
	Featuresbanner(app)
	Discoversection(app)
	Organizesection(app)
	Accesssection(app)
	Protectsection(app)
	
	return app
}