// Front End Frameworks
import NgLogo from './../../assets/images/skills/angular.png';
import ReactLogo from './../../assets/images/skills/react.png';
import VueLogo from './../../assets/images/skills/vue.png';
import SvelteLogo from './../../assets/images/skills/svelte.png';

// Style End Frameworks

import SpectreCSSLogo from './../../assets/images/skills/spectrecss.png'
import BSLogo from './../../assets/images/skills/bootstrap.png'

//  Back End Frameworks
import ActixLogo from './../../assets/images/skills/actix.png';
import NodeLogo from './../../assets/images/skills/node.png';
import ExpressLogo from './../../assets/images/skills/express.png';
import NestJSLogo from './../../assets/images/skills/nestjs.png';
import AdonisJSLogo from './../../assets/images/skills/adonis.png';
import DenoLogo from './../../assets/images/skills/deno.png';
import FlaskLogo from './../../assets/images/skills/flask.png'

// Full Stack Frameworks

import RORLogo from './../../assets/images/skills/rubyonrails.png'
import DjangoLogo from './../../assets/images/skills/django.png'
import LaravelLogo from './../../assets/images/skills/laravel.png'
import SpringBootLogo from './../../assets/images/skills/springboot.png'


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
import JavaLogo from './../../assets/images/skills/java.png';
import PerlLogo from './../../assets/images/skills/perl.png';
import PythonLogo from './../../assets/images/skills/python.png';
import CLogo from './../../assets/images/skills/c.png';
import CSLogo from './../../assets/images/skills/cs.png';
import CPPLogo from './../../assets/images/skills/cpp.png';
import RustLogo from './../../assets/images/skills/rust.png';
import GoLogo from './../../assets/images/skills/golang.png';
import PHPLogo from './../../assets/images/skills/php.png';
import LuaLogo from './../../assets/images/skills/lua.png';

// SQL Databases
import MyLogo from './../../assets/images/skills/mysql.png';
import PGLogo from './../../assets/images/skills/postgresql.png';
import MariaDBLogo from './../../assets/images/skills/mariadb.png';

//  NoSQL Databases
import RedisLogo from './../../assets/images/skills/redis.png';
import MongoLogo from './../../assets/images/skills/mongodb.png';

// Version Control System

import GitLogo from './../../assets/images/skills/git.png'
import GitHubLogo from './../../assets/images/skills/github.png'

// Additionals

import DSLogo from './../../assets/images/skills/datastructure.png'
import AlgorithmLogo from './../../assets/images/skills/algorithm.png'

export const frontEnd: Array<Object> = [
    { name: 'Angular', imgSrc: NgLogo, tag: 'frontend', imgAlt: 'Angular Logo', accent: 'darkred' },
    { name: 'React', imgSrc: ReactLogo, tag: 'frontend', imgAlt: 'React Logo', accent: 'steelblue' },
    { name: 'Vue', imgSrc: VueLogo, tag: 'frontend', imgAlt: 'Vue Logo', accent: 'darkgreen' },
    { name: 'Svelte', imgSrc: SvelteLogo, tag: 'frontend', imgAlt: 'Svelte Logo', accent: 'orangered' }
]
export const backEnd: Array<Object> = [
    { name: 'NestJS', imgSrc: NestJSLogo, tag: 'backend', imgAlt: 'NestJS Logo', accent: '#DF2F28' },
    { name: 'AdonisJS', imgSrc: AdonisJSLogo, tag: 'backend', imgAlt: 'AdonisJS Logo', accent: 'indigo' },
    { name: 'ExpressJS', imgSrc: ExpressLogo, tag: 'backend', imgAlt: 'AdonisJS Logo', accent: 'gray' },
    { name: 'NodeJS', imgSrc: NodeLogo, tag: 'backend', imgAlt: 'AdonisJS Logo', accent: 'green' },
    { name: 'Deno', imgSrc: DenoLogo, tag: 'backend', imgAlt: 'AdonisJS Logo', accent: 'white' },
    { name: 'Flask', imgSrc: FlaskLogo, tag: 'backend', imgAlt: 'AdonisJS Logo', accent: 'white' },
    { name: 'Actix', imgSrc: ActixLogo, tag: 'backend', imgAlt: 'Actix Logo', accent: 'chocolate' },
]

export const fullStack: Array<Object> = [
    { name: 'Ruby On Rails', imgSrc: RORLogo, tag: 'fullstack', imgAlt: 'Ruby On Rails Logo', accent: 'red' },
    { name: 'Laravel', imgSrc: LaravelLogo, tag: 'fullstack', imgAlt: 'Laravel Logo', accent: 'red' },
    { name: 'Django', imgSrc: DjangoLogo, tag: 'fullstack', imgAlt: 'Django Logo', accent: 'darkgreen' },
    { name: 'Spring Boot', imgSrc: SpringBootLogo, tag: 'fullstack', imgAlt: 'SpringBoot Logo', accent: 'lime' },
]

export const uiLibs: Array<Object> = [
    { name: 'SpectreCSS', imgSrc: SpectreCSSLogo, tag: 'styleend', imgAlt: 'SpectreCSS Logo', accent: 'rebeccapurple' },
    { name: 'Bootstrap 5', imgSrc: BSLogo, tag: 'styleend', imgAlt: 'Bootstrap 5 Logo', accent: 'indigo' },
]


export const db: Array<Object> = [
    { name: 'MySQL', imgSrc: MyLogo, tag: 'database', imgAlt: 'MySQL Logo', accent: 'darkblue' },
    { name: 'PostgreSQL', imgSrc: PGLogo, tag: 'database', imgAlt: 'PostgreSQL Logo', accent: 'blue' },
    { name: 'MariaDB', imgSrc: MariaDBLogo, tag: 'database', imgAlt: 'MariaDB Logo', accent: 'cadetblue' },
    { name: 'MongoDB', imgSrc: MongoLogo, tag: 'database', imgAlt: 'MongoDB Logo', accent: 'green' },
    { name: 'Redis', imgSrc: RedisLogo, tag: 'database', imgAlt: 'Redis Logo', accent: 'darkred' },
]

export const language: Array<Object> = [
    { name: 'Python', imgSrc: PythonLogo, tag: 'language', imgAlt: 'Python Logo', accent: '#ffde57, #4584b6 75%' },
    { name: 'Perl', imgSrc: PerlLogo, tag: 'language', imgAlt: 'Perl Logo', accent: 'purple' },
    { name: 'Ruby', imgSrc: RubyLogo, tag: 'language', imgAlt: 'Ruby Logo', accent: 'red' },
    { name: 'PHP', imgSrc: PHPLogo, tag: 'language', imgAlt: 'PHP Logo', accent: '#8993be' },
    { name: 'Java', imgSrc: JavaLogo, tag: 'language', imgAlt: 'Java Logo', accent: ' #6f0b33 0%, #5382a1 100%' },
    { name: 'C', imgSrc: CLogo, tag: 'language', imgAlt: 'C Logo', accent: 'blue' },
    { name: 'C++', imgSrc: CPPLogo, tag: 'language', imgAlt: 'C++ Logo', accent: 'blue' },
    { name: 'C#', imgSrc: CSLogo, tag: 'language', imgAlt: 'C# Logo', accent: 'rebeccapurple' },
    { name: 'Rust', imgSrc: RustLogo, tag: 'language', imgAlt: 'Rust Logo', accent: 'chocolate' },
    { name: 'Go', imgSrc: GoLogo, tag: 'language', imgAlt: 'Go Logo', accent: 'deepskyblue' },
    { name: 'Lua', imgSrc: LuaLogo, tag: 'language', imgAlt: 'Lua Logo', accent: 'navy' },
    { name: 'JavaScript', imgSrc: JSLogo, tag: 'language', imgAlt: 'JavaScript Logo', accent: 'goldenrod' },
    { name: 'TypeScript', imgSrc: TSLogo, tag: 'language', imgAlt: 'TypeScript Logo', accent: 'steelblue' },
]

export const vcs: Array<Object> = [
    { name: 'Git', imgSrc: GitLogo, tag: 'backend', imgAlt: 'Git Logo', accent: 'black' },
    { name: 'GitHub', imgSrc: GitHubLogo, tag: 'backend', imgAlt: 'GitHub Logo', accent: 'mediumslateblue' },
]

export const extra: Array<Object> = [
    { name: 'Data Structures', imgSrc: DSLogo, tag: 'extra', imgAlt: 'Data Structures Logo', accent: 'floralwhite' },
    { name: 'Algorithms', imgSrc: AlgorithmLogo, tag: 'extra', imgAlt: 'Algorithms Logo', accent: 'floralwhite' },
]