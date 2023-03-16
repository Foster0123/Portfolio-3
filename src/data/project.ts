import PugLogo from './../assets/images/skills/pug.png';
import SassLogo from './../assets/images/skills/sass.png';
import NodeLogo from './../assets/images/skills/node.png';
import ExpressLogo from './../assets/images/skills/express.png';
import PGLogo from './../assets/images/skills/postgresql.png';
import JSLogo from './../assets/images/skills/javascript.png';
import ReduxLogo from './../assets/images/skills/redux.png';
import ReactLogo from './../assets/images/skills/react.png';
import TSLogo from './../assets/images/skills/typescript.png';
import RedisLogo from './../assets/images/skills/redis.png';
import NgLogo from './../assets/images/skills/angular.png';
import ActixLogo from './../assets/images/skills/actix.png';
import MyLogo from './../assets/images/skills/mysql.png';

import AuthlyLogo from './../assets/images/projects/authly/authly-logo.png'
import AuthlyBg from './../assets/images/projects/authly/authly-bg.jpeg'

import BlazeLogo from './../assets/images/projects/blaze/blaze-logo.png'
import BlazeBg from './../assets/images/projects/blaze/blaze-bg.jpeg'

import FluidLogo from './../assets/images/projects/fluid/fluid-logo.png'
import FluidBg from './../assets/images/projects/fluid/fluid-bg.jpeg'

const project = [
	{
		name: "Authly",
		details: "User Authentication Application",
		bgImage: `${AuthlyBg}`,
		logoImage: `${AuthlyLogo}`,
		github: "https://github.com/Foster0123/Authly",
		live: "#",
		accent: "navy",
		status: "Completed",
		tech: [
			`${PugLogo}`,
			`${SassLogo}`,
			`${NodeLogo}`,
			`${ExpressLogo}`,
			`${PGLogo}`,
			`${JSLogo}`
		],
		skills: [
			'Pug', 'Sass', "NodeJS", 
			'ExpressJS', 'PostgreSQL', 
			'JavaScript'
		],
		features: [
			"Create account",
			"Update account details",
			"Delete account",
			"Logout of account",
			"Upload profile picture",
			"Reset Forgotten Password",
		],
	},
	{
		name: "Blaze",
		details: "Todo Application",
		bgImage: `${BlazeBg}`,
		logoImage: `${BlazeLogo}`,
		github: "https://github.com/Foster0123/Blaze",
		live: "#",
		accent: "orangered",
		status: "Ongoing",
		tech: [
			`${ReactLogo}`,
			`${ReduxLogo}`,
			`${NodeLogo}`,
			`${ExpressLogo}`,
			`${RedisLogo}`,
			`${MyLogo}`,
			`${TSLogo}`,
		],
		skills: [
			'React','Redux', "NodeJS", 
			'ExpressJS', 'Redis', 'MySQL', 
			'TypeScript'
		],
		features: [
			"Create account",
			"Update account details",
			"Delete account",
			"Logout of account",
			"Upload profile picture",
			"Reset Forgotten Password",
		],
	},
	{
		name: "Fluid",
		details: "Chat Application",
		bgImage: `${FluidBg}`,
		logoImage: `${FluidLogo}`,
		github: "https://github.com/Foster0123/Fluid",
		live: "#",
		accent: "lightblue",
		status: "Ongoing",
		tech: [
			`${NgLogo}`,
			`${ActixLogo}`,
			`${SassLogo}`,
			`${RedisLogo}`,
			`${PGLogo}`,
			`${TSLogo}`,
		],
		skills: [
			'Angular', 'Actix Web', 'SCSS', 
			'Redis','PostgreSQL', 'TypeScript'
		],
		features: [
			"Create account",
			"Update account details",
			"Delete account",
			"Logout of account",
			"Upload profile picture",
			"Reset Forgotten Password",
		],
	},
];
export { project };