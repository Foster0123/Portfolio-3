// Front End Frameworks
import NgLogo from './../../assets/images/skills/angular.png';
import ReactLogo from './../../assets/images/skills/react.png';
import VueLogo from './../../assets/images/skills/vue.png';

// State Management Libraries
import ReduxLogo from './../../assets/images/skills/redux.png';

// Stylesheets/Markup Languages
import PugLogo from './../../assets/images/skills/pug.png';
import SassLogo from './../../assets/images/skills/sass.png';
import StylusLogo from './../../assets/images/skills/stylus.png';

// Programming Languages
import JSLogo from './../../assets/images/skills/javascript.png';
import TSLogo from './../../assets/images/skills/typescript.png';
import RubyLogo from './../../assets/images/skills/ruby.png';

//  Back End Frameworks
import ActixLogo from './../../assets/images/skills/actix.png';
import NodeLogo from './../../assets/images/skills/node.png';
import ExpressLogo from './../../assets/images/skills/express.png';

// Full Stack Frameworks

import RORLogo from './../../assets/images/skills/rubyonrails.png'

// SQL Databases
import MyLogo from './../../assets/images/skills/mysql.png';
import PGLogo from './../../assets/images/skills/postgresql.png';
import MariaDBLogo from './../../assets/images/skills/mariadb.png';

//  NoSQL Databases
import RedisLogo from './../../assets/images/skills/redis.png';
import MongoLogo from './../../assets/images/skills/mongodb.png';

// Project Images
import AuthlyLogo from './../../assets/images/projects/authly/authly-logo.png'
import AuthlyBg from './../../assets/images/projects/authly/authly-bg.jpeg'

import BlazeLogo from './../../assets/images/projects/blaze/blaze-logo.png'
import BlazeBg from './../../assets/images/projects/blaze/blaze-bg.jpeg'

import FluidLogo from './../../assets/images/projects/fluid/fluid-logo.png'
import FluidBg from './../../assets/images/projects/fluid/fluid-bg.jpeg'

import OasisLogo from './../../assets/images/projects/oasis/Oasis.svg'

export const upcoming : Array<Object> = [
    {
		name: "Oasis",
		details: "E Commerce Application",
		bgImage: `${FluidBg}`,
		logoImage: `${OasisLogo}`,
		github: "https://github.com/Foster0123/Fluid",
		live: "#",
		accent: "yellow",
		status: "Ongoing",
		tech: [
			`${VueLogo}`,
			`${RORLogo}`,
			`${StylusLogo}`,
			`${MariaDBLogo}`,
			`${RubyLogo}`,
			`${TSLogo}`,
		],
		skills: [
			'Vue', 'Ruby On Rails', 'Stylus', 
			'MariaDB','Ruby', 'TypeScript'
		],
		features: [
			"Create account",
			"Manage Products",
			"Secure Payment Gateway",
			"Multiple Accounts",
			"Fully Responsive",
			"Dark Mode",
		],
	},
]