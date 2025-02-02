import { ConfigChecker } from 'configchecker';
import spaceTrim from 'spacetrim';
import { Vector } from 'xyzt';
import packageJson from './package.json';
import type { DallePrompt } from './src/ai/text-to-image/dalle/interfaces/DallePrompt';
import { FULLHD } from './src/constants';
import type { AspectRatioRange } from './src/utils/aspect-ratio/AspectRatioRange';
import { expectAspectRatioInRange } from './src/utils/aspect-ratio/expectAspectRatioInRange';
import { DigitalOceanSpaces } from './src/utils/cdn/classes/DigitalOceanSpaces';
import { createColorfulComputeImageColorStats15 } from './src/utils/image/palette/15/createColorfulComputeImageColorStats15';
import type { IComputeImageColorStats } from './src/utils/image/utils/IImageColorStats';
import { isRunningInBrowser } from './src/utils/isRunningInWhatever';
import { string_email, string_font_family } from './src/utils/typeAliases';
import { isUrlOnPrivateNetwork } from './src/utils/validators/isUrlOnPrivateNetwork';
import { validateUuid } from './src/utils/validators/validateUuid';

export const APP_VERSION = packageJson.version;
export const APP_NAME = 'WebGPT';
export const ADMIN_EMAIL: string_email = 'pavol@webgpt.cz';

export const USE_DALLE_VERSION: 2 | 3 = 3;

export const USE_DALLE_MODEL_SETTINGS: DallePrompt['modelSettings'] = {
    style: 'vivid',
    quality: `standard`,
    // <- TODO: !! Play with theeese to achieve best results
};

const config = ConfigChecker.from({
    ...process.env,

    // Note: To expose env variables to the browser, using this seemingly strange syntax:
    //       @see https://nextjs.org/docs/pages/building-your-application/configuring/environment-variables#exposing-environment-variables-to-the-browser
    NEXT_PUBLIC_URL: process.env.NEXT_PUBLIC_URL,
    NEXT_PUBLIC_PROMPTBOOK_SERVER_URL: process.env.NEXT_PUBLIC_PROMPTBOOK_SERVER_URL,
    NEXT_PUBLIC_IMAGE_SERVER_URL: process.env.NEXT_PUBLIC_IMAGE_SERVER_URL,
    NEXT_PUBLIC_OUR_DOMAINS: process.env.NEXT_PUBLIC_OUR_DOMAINS,
    NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
    NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
});

export const NEXT_PUBLIC_URL = config.get('NEXT_PUBLIC_URL').url().required().value;
export const NEXT_PUBLIC_PROMPTBOOK_SERVER_URL = config.get('NEXT_PUBLIC_PROMPTBOOK_SERVER_URL').url().required().value;
export const NEXT_PUBLIC_IMAGE_SERVER_URL = config.get('NEXT_PUBLIC_IMAGE_SERVER_URL').url().required().value;

export const IS_DEVELOPMENT =
    isUrlOnPrivateNetwork(
        NEXT_PUBLIC_URL,
    ); /* <- TODO: Maybe pass NODE_ENV and not assume that local is automatically dev */
export const IS_PRODUCTION = !IS_DEVELOPMENT;

if (isRunningInBrowser()) {
    // TODO: Also log " client ${provideClientIdWithoutValidation()}" and avoid error unhandledRejection ReferenceError: window is not defined @see https://vercel.com/hejny/1-2i/E2LhCdVbk9hjEa8dE9ww42vnkcTg
    console.info(
        `%c⏣ ${APP_NAME}${IS_DEVELOPMENT ? ' (in development mode)' : ''} version ${APP_VERSION}`,
        spaceTrim(`
            display: block;

            background-color: rgba(0 0 0 / 0.13);
            border: 1px solid rgba(255 255 255 / 0.53);
            box-shadow: 0 0 50px rgba(0, 0, 0, 0.8);
            backdrop-filter: blur(10px);
            border-radius: 60px;
            overflow: clip;
        
            padding: 10px;
            padding-left: 15px;
            padding-right: 15px;
        
            display: flex;
            justify-content: center;
            align-items: center;
        `)
            .split('\n')
            .join(''),
    );
}

export const NEXT_PUBLIC_DEBUG = config.get('NEXT_PUBLIC_DEBUG').boolean().value;

export const NEXT_PUBLIC_OUR_DOMAINS = config.get('NEXT_PUBLIC_OUR_DOMAINS').list().required().value;

/**
 * The speed of the animations
 * It is useful for recording videos
 *
 * 1 is normal, 2 is twice as fast, 0.5 is twice as slow
 *
 * Note: You can record video and change speef for example here:
 *       - https://online-video-cutter.com/change-video-speed
 */
export const SPEED = 1; // 1 / 5;

/**
 * The number of pregenerated photobank images to offer to the user to choose from
 */
export const PHOTOBANK_SEARCH_IMAGES_COUNT = 4;

/**
 * Number of keywords reduction attempts until photobank give up and just pick random images
 */
export const OPTIMIZE_PHOTOBANK_MAX_SEARCH_DEPTH = 5;

export const IS_VERIFIED_EMAIL_REQUIRED = {
    CREATE: false,
    EDIT: false,
    LIKE: false,
    PUBLISH: true,
} as const;

export const NEXT_PUBLIC_SUPABASE_URL = config.get('NEXT_PUBLIC_SUPABASE_URL').url().required().value;
export const NEXT_PUBLIC_SUPABASE_ANON_KEY = config.get('NEXT_PUBLIC_SUPABASE_ANON_KEY').required().value;
export const SUPABASE_SERVICE_ROLE_KEY = config.get('SUPABASE_SERVICE_ROLE_KEY').value;

export const VERCEL_GIT_COMMIT_MESSAGE = config.get('VERCEL_GIT_COMMIT_MESSAGE').value;
export const VERCEL_GIT_COMMIT_SHA = config.get('VERCEL_GIT_COMMIT_SHA').value;

export const LIMIT_WALLPAPERS_COUNT = config.get('LIMIT_WALLPAPERS_COUNT').number().default(Infinity).value;
export const LIMIT_WALLPAPERS_EXCLUDE = config.get('LIMIT_WALLPAPERS_EXCLUDE').list().default([]).value;

// TODO: [✍] Replace mocked-api/wallpapers-min-loved.json by WELCOME_WALLPAPERS
// export const WELCOME_WALLPAPERS = config.get('WELCOME_WALLPAPERS').list().default([]).value;

export const OPENAI_API_KEY = config.get('OPENAI_API_KEY').value;

export const AZURE_COMPUTER_VISION_ENDPOINT = config.get('AZURE_COMPUTER_VISION_ENDPOINT').url().value;
export const AZURE_COMPUTER_VISION_KEY = config.get('AZURE_COMPUTER_VISION_KEY').value;

// Note: Not using token because it is invalidated so often
export const INSTAGRAM_USERNAME = config.get('INSTAGRAM_USERNAME').value;
export const INSTAGRAM_PASSWORD = config.get('INSTAGRAM_PASSWORD').value;

export const EXPORT_OPTIONS = {
    isExported: false,
    publicUrl: NEXT_PUBLIC_URL,
};

// TODO: [🧠] !! Put fonts into separate file
// TODO: [🧠] !! Breakup the config into multiple files
// TODO: [🧠] !! Better split between FONTS_LIST_STANDARD and FONTS_LIST_EXTENDED

export const FONTS_LIST_STANDARD = [
    // TODO: !! [🧠] Better system for fonts
    // TODO: Put in separate file
    //----------[ Manually picked ]---
    'Montserrat',
    'Poppins',
    'Open Sans',
    'Playfair Display',
    'Lato',
    'Roboto',
    'Inter',
    'IBM Plex Sans',
    'Exo 2',
    'Alegreya',
    'Raleway',
    'Futura',
    'Barlow Condensed' /* <- I 💖 this font! */,
    'Cabin',
    'Cinzel',
    'Cinzel Decorative',
    'Cormorant Garamond',
];

export const FONTS_LIST_EXTENDED = [
    //----------[ List all ]---
    // @see https://github.com/honeysilvas/google-fonts
    // TODO: This list is not complete (or not up to date) because for example 'Barlow Condensed' is missing
    'Great Vibes',
    'Dancing Script',
    'Lobster',
    'Orbitron',
    'ABeeZee',
    'Abel',
    'Abril Fatface',
    'Aclonica',
    'Acme',
    'Actor',
    'Adamina',
    'Advent Pro',
    'Aguafina Script',
    'Akronim',
    'Aladin',
    'Aldrich',
    'Alef',
    'Alegreya',
    'Alegreya SC',
    'Alegreya Sans',
    'Alegreya Sans SC',
    'Alex Brush',
    'Alfa Slab One',
    'Alice',
    'Alike',
    'Alike Angular',
    'Allan',
    'Allerta',
    'Allerta Stencil',
    'Allura',
    'Almendra',
    'Almendra Display',
    'Almendra SC',
    'Amarante',
    'Amaranth',
    'Amatic SC',
    'Amethysta',
    'Amiri',
    'Anaheim',
    'Andada',
    'Andika',
    'Angkor',
    'Annie Use Your Telescope',
    'Anonymous Pro',
    'Antic',
    'Antic Didone',
    'Antic Slab',
    'Anton',
    'Arapey',
    'Arbutus',
    'Arbutus Slab',
    'Architects Daughter',
    'Archivo Black',
    'Archivo Narrow',
    'Arimo',
    'Arizonia',
    'Armata',
    'Artifika',
    'Arvo',
    'Asap',
    'Asset',
    'Astloch',
    'Asul',
    'Atomic Age',
    'Aubrey',
    'Audiowide',
    'Autour One',
    'Average',
    'Average Sans',
    'Averia Gruesa Libre',
    'Averia Libre',
    'Averia Sans Libre',
    'Averia Serif Libre',
    'Bad Script',
    'Balthazar',
    'Bangers',
    'Basic',
    'Battambang',
    'Baumans',
    'Bayon',
    'Belgrano',
    'Belleza',
    'BenchNine',
    'Bentham',
    'Berkshire Swash',
    'Bevan',
    'Bigelow Rules',
    'Bigshot One',
    'Bilbo',
    'Bilbo Swash Caps',
    'Biryani',
    'Bitter',
    'Black Ops One',
    'Bokor',
    'Bonbon',
    'Boogaloo',
    'Bowlby One',
    'Bowlby One SC',
    'Brawler',
    'Bree Serif',
    'Bubblegum Sans',
    'Bubbler One',
    'Buda',
    'Buenard',
    'Butcherman',
    'Butterfly Kids',
    'Cabin',
    'Cabin Condensed',
    'Cabin Sketch',
    'Caesar Dressing',
    'Cagliostro',
    'Calligraffitti',
    'Cambay',
    'Cambo',
    'Candal',
    'Cantarell',
    'Cantata One',
    'Cantora One',
    'Capriola',
    'Cardo',
    'Carme',
    'Carrois Gothic',
    'Carrois Gothic SC',
    'Carter One',
    'Caudex',
    'Cedarville Cursive',
    'Ceviche One',
    'Changa One',
    'Chango',
    'Chau Philomene One',
    'Chela One',
    'Chelsea Market',
    'Chenla',
    'Cherry Cream Soda',
    'Cherry Swash',
    'Chewy',
    'Chicle',
    'Chivo',
    'Cinzel',
    'Cinzel Decorative',
    'Clicker Script',
    'Coda',
    'Coda Caption',
    'Codystar',
    'Combo',
    'Comfortaa',
    'Coming Soon',
    'Concert One',
    'Condiment',
    'Content',
    'Contrail One',
    'Convergence',
    'Cookie',
    'Copse',
    'Corben',
    'Courgette',
    'Cousine',
    'Coustard',
    'Covered By Your Grace',
    'Crafty Girls',
    'Creepster',
    'Crete Round',
    'Crimson Text',
    'Croissant One',
    'Crushed',
    'Cuprum',
    'Cutive',
    'Cutive Mono',
    'Damion',
    'Dancing Script',
    'Dangrek',
    'Dawning of a New Day',
    'Days One',
    'Dekko',
    'Delius',
    'Delius Swash Caps',
    'Delius Unicase',
    'Della Respira',
    'Denk One',
    'Devonshire',
    'Dhurjati',
    'Didact Gothic',
    'Diplomata',
    'Diplomata SC',
    'Domine',
    'Donegal One',
    'Doppio One',
    'Dorsa',
    'Dosis',
    'Dr Sugiyama',
    'Droid Sans',
    'Droid Sans Mono',
    'Droid Serif',
    'Duru Sans',
    'Dynalight',
    'EB Garamond',
    'Eagle Lake',
    'Eater',
    'Economica',
    'Ek Mukta',
    'Electrolize',
    'Elsie',
    'Elsie Swash Caps',
    'Emblema One',
    'Emilys Candy',
    'Engagement',
    'Englebert',
    'Enriqueta',
    'Erica One',
    'Esteban',
    'Euphoria Script',
    'Ewert',
    'Exo',
    'Exo 2',
    'Expletus Sans',
    'Fanwood Text',
    'Fascinate',
    'Fascinate Inline',
    'Faster One',
    'Fasthand',
    'Fauna One',
    'Federant',
    'Federo',
    'Felipa',
    'Fenix',
    'Finger Paint',
    'Fira Mono',
    'Fira Sans',
    'Fjalla One',
    'Fjord One',
    'Flamenco',
    'Flavors',
    'Fondamento',
    'Fontdiner Swanky',
    'Forum',
    'Francois One',
    'Freckle Face',
    'Fredericka the Great',
    'Fredoka One',
    'Freehand',
    'Fresca',
    'Frijole',
    'Fruktur',
    'Fugaz One',
    'GFS Didot',
    'GFS Neohellenic',
    'Gabriela',
    'Gafata',
    'Galdeano',
    'Galindo',
    'Gentium Basic',
    'Gentium Book Basic',
    'Geo',
    'Geostar',
    'Geostar Fill',
    'Germania One',
    'Gidugu',
    'Gilda Display',
    'Give You Glory',
    'Glass Antiqua',
    'Glegoo',
    'Gloria Hallelujah',
    'Goblin One',
    'Gochi Hand',
    'Gorditas',
    'Goudy Bookletter 1911',
    'Graduate',
    'Grand Hotel',
    'Gravitas One',
    'Great Vibes',
    'Griffy',
    'Gruppo',
    'Gudea',
    'Gurajada',
    'Habibi',
    'Halant',
    'Hammersmith One',
    'Hanalei',
    'Hanalei Fill',
    'Handlee',
    'Hanuman',
    'Happy Monkey',
    'Headland One',
    'Henny Penny',
    'Herr Von Muellerhoff',
    'Hind',
    'Holtwood One SC',
    'Homemade Apple',
    'Homenaje',
    'IM Fell DW Pica',
    'IM Fell DW Pica SC',
    'IM Fell Double Pica',
    'IM Fell Double Pica SC',
    'IM Fell English',
    'IM Fell English SC',
    'IM Fell French Canon',
    'IM Fell French Canon SC',
    'IM Fell Great Primer',
    'IM Fell Great Primer SC',
    'Iceberg',
    'Iceland',
    'Imprima',
    'Inconsolata',
    'Inder',
    'Indie Flower',
    'Inika',
    'Irish Grover',
    'Istok Web',
    'Italiana',
    'Italianno',
    'Jacques Francois',
    'Jacques Francois Shadow',
    'Jaldi',
    'Jim Nightshade',
    'Jockey One',
    'Jolly Lodger',
    'Josefin Sans',
    'Josefin Slab',
    'Joti One',
    'Judson',
    'Julee',
    'Julius Sans One',
    'Junge',
    'Jura',
    'Just Another Hand',
    'Just Me Again Down Here',
    'Kalam',
    'Kameron',
    'Kantumruy',
    'Karla',
    'Karma',
    'Kaushan Script',
    'Kavoon',
    'Kdam Thmor',
    'Keania One',
    'Kelly Slab',
    'Kenia',
    'Khand',
    'Khmer',
    'Khula',
    'Kite One',
    'Knewave',
    'Kotta One',
    'Koulen',
    'Kranky',
    'Kreon',
    'Kristi',
    'Krona One',
    'La Belle Aurore',
    'Laila',
    'Lakki Reddy',
    'Lancelot',
    'Lateef',
    'Lato',
    'League Script',
    'Leckerli One',
    'Ledger',
    'Lekton',
    'Lemon',
    'Libre Baskerville',
    'Life Savers',
    'Lilita One',
    'Lily Script One',
    'Limelight',
    'Linden Hill',
    'Lobster',
    'Lobster Two',
    'Londrina Outline',
    'Londrina Shadow',
    'Londrina Sketch',
    'Londrina Solid',
    'Lora',
    'Love Ya Like A Sister',
    'Loved by the King',
    'Lovers Quarrel',
    'Luckiest Guy',
    'Lusitana',
    'Lustria',
    'Macondo',
    'Macondo Swash Caps',
    'Magra',
    'Maiden Orange',
    'Mako',
    'Mallanna',
    'Mandali',
    'Marcellus',
    'Marcellus SC',
    'Marck Script',
    'Margarine',
    'Marko One',
    'Marmelad',
    'Martel',
    'Martel Sans',
    'Marvel',
    'Mate',
    'Mate SC',
    'Maven Pro',
    'McLaren',
    'Meddon',
    'MedievalSharp',
    'Medula One',
    'Megrim',
    'Meie Script',
    'Merienda',
    'Merienda One',
    'Merriweather',
    'Merriweather Sans',
    'Metal',
    'Metal Mania',
    'Metamorphous',
    'Metrophobic',
    'Michroma',
    'Milonga',
    'Miltonian',
    'Miltonian Tattoo',
    'Miniver',
    'Miss Fajardose',
    'Modak',
    'Modern Antiqua',
    'Molengo',
    'Molle',
    'Monda',
    'Monofett',
    'Monoton',
    'Monsieur La Doulaise',
    'Montaga',
    'Montez',
    'Montserrat',
    'Montserrat Alternates',
    'Montserrat Subrayada',
    'Moul',
    'Moulpali',
    'Mountains of Christmas',
    'Mouse Memoirs',
    'Mr Bedfort',
    'Mr Dafoe',
    'Mr De Haviland',
    'Mrs Saint Delafield',
    'Mrs Sheppards',
    'Muli',
    'Mystery Quest',
    'NTR',
    'Neucha',
    'Neuton',
    'New Rocker',
    'News Cycle',
    'Niconne',
    'Nixie One',
    'Nobile',
    'Nokora',
    'Norican',
    'Nosifer',
    'Nothing You Could Do',
    'Noticia Text',
    'Noto Sans',
    'Noto Serif',
    'Nova Cut',
    'Nova Flat',
    'Nova Mono',
    'Nova Oval',
    'Nova Round',
    'Nova Script',
    'Nova Slim',
    'Nova Square',
    'Numans',
    'Nunito',
    'Odor Mean Chey',
    'Offside',
    'Old Standard TT',
    'Oldenburg',
    'Oleo Script',
    'Oleo Script Swash Caps',
    'Open Sans',
    'Open Sans Condensed',
    'Oranienbaum',
    'Orbitron',
    'Oregano',
    'Orienta',
    'Original Surfer',
    'Oswald',
    'Over the Rainbow',
    'Overlock',
    'Overlock SC',
    'Ovo',
    'Oxygen',
    'Oxygen Mono',
    'PT Mono',
    'PT Sans',
    'PT Sans Caption',
    'PT Sans Narrow',
    'PT Serif',
    'PT Serif Caption',
    'Pacifico',
    'Palanquin',
    'Palanquin Dark',
    'Paprika',
    'Parisienne',
    'Passero One',
    'Passion One',
    'Pathway Gothic One',
    'Patrick Hand',
    'Patrick Hand SC',
    'Patua One',
    'Paytone One',
    'Peddana',
    'Peralta',
    'Permanent Marker',
    'Petit Formal Script',
    'Petrona',
    'Philosopher',
    'Piedra',
    'Pinyon Script',
    'Pirata One',
    'Plaster',
    'Play',
    'Playball',
    'Playfair Display',
    'Playfair Display SC',
    'Podkova',
    'Poiret One',
    'Poller One',
    'Poly',
    'Pompiere',
    'Pontano Sans',
    'Port Lligat Sans',
    'Port Lligat Slab',
    'Pragati Narrow',
    'Prata',
    'Preahvihear',
    'Press Start 2P',
    'Princess Sofia',
    'Prociono',
    'Prosto One',
    'Puritan',
    'Purple Purse',
    'Quando',
    'Quantico',
    'Quattrocento',
    'Quattrocento Sans',
    'Questrial',
    'Quicksand',
    'Quintessential',
    'Qwigley',
    'Racing Sans One',
    'Radley',
    'Rajdhani',
    'Raleway',
    'Raleway Dots',
    'Ramabhadra',
    'Ramaraja',
    'Rambla',
    'Rammetto One',
    'Ranchers',
    'Rancho',
    'Ranga',
    'Rationale',
    'Ravi Prakash',
    'Redressed',
    'Reenie Beanie',
    'Revalia',
    'Ribeye',
    'Ribeye Marrow',
    'Righteous',
    'Risque',
    'Roboto',
    'Roboto Condensed',
    'Roboto Slab',
    'Rochester',
    'Rock Salt',
    'Rokkitt',
    'Romanesco',
    'Ropa Sans',
    'Rosario',
    'Rosarivo',
    'Rouge Script',
    'Rozha One',
    'Rubik Mono One',
    'Rubik One',
    'Ruda',
    'Rufina',
    'Ruge Boogie',
    'Ruluko',
    'Rum Raisin',
    'Ruslan Display',
    'Russo One',
    'Ruthie',
    'Rye',
    'Sacramento',
    'Sail',
    'Salsa',
    'Sanchez',
    'Sancreek',
    'Sansita One',
    'Sarina',
    'Sarpanch',
    'Satisfy',
    'Scada',
    'Scheherazade',
    'Schoolbell',
    'Seaweed Script',
    'Sevillana',
    'Seymour One',
    'Shadows Into Light',
    'Shadows Into Light Two',
    'Shanti',
    'Share',
    'Share Tech',
    'Share Tech Mono',
    'Shojumaru',
    'Short Stack',
    'Siemreap',
    'Sigmar One',
    'Signika',
    'Signika Negative',
    'Simonetta',
    'Sintony',
    'Sirin Stencil',
    'Six Caps',
    'Skranji',
    'Slabo 13px',
    'Slabo 27px',
    'Slackey',
    'Smokum',
    'Smythe',
    'Sniglet',
    'Snippet',
    'Snowburst One',
    'Sofadi One',
    'Sofia',
    'Sonsie One',
    'Sorts Mill Goudy',
    'Source Code Pro',
    'Source Sans Pro',
    'Source Serif Pro',
    'Special Elite',
    'Spicy Rice',
    'Spinnaker',
    'Spirax',
    'Squada One',
    'Sree Krushnadevaraya',
    'Stalemate',
    'Stalinist One',
    'Stardos Stencil',
    'Stint Ultra Condensed',
    'Stint Ultra Expanded',
    'Stoke',
    'Strait',
    'Sue Ellen Francisco',
    'Sunshiney',
    'Supermercado One',
    'Suranna',
    'Suravaram',
    'Suwannaphum',
    'Swanky and Moo Moo',
    'Syncopate',
    'Tangerine',
    'Taprom',
    'Tauri',
    'Teko',
    'Telex',
    'Tenali Ramakrishna',
    'Tenor Sans',
    'Text Me One',
    'The Girl Next Door',
    'Tienne',
    'Timmana',
    'Tinos',
    'Titan One',
    'Titillium Web',
    'Trade Winds',
    'Trocchi',
    'Trochut',
    'Trykker',
    'Tulpen One',
    'Ubuntu',
    'Ubuntu Condensed',
    'Ubuntu Mono',
    'Ultra',
    'Uncial Antiqua',
    'Underdog',
    'Unica One',
    'UnifrakturCook',
    'UnifrakturMaguntia',
    'Unkempt',
    'Unlock',
    'Unna',
    'VT323',
    'Vampiro One',
    'Varela',
    'Varela Round',
    'Vast Shadow',
    'Vesper Libre',
    'Vibur',
    'Vidaloka',
    'Viga',
    'Voces',
    'Volkhov',
    'Vollkorn',
    'Voltaire',
    'Waiting for the Sunrise',
    'Wallpoet',
    'Walter Turncoat',
    'Warnes',
    'Wellfleet',
    'Wendy One',
    'Wire One',
    'Yanone Kaffeesatz',
    'Yellowtail',
    'Yeseva One',
    'Yesteryear',
    'Zeyada',
] as const;

// TODO: !! Put in separate file
export interface Font {
    // TODO: !! Annotate
    // TODO: !! [🧠] System - Google, Adobe...
    fontFamily: string_font_family;

    // TODO: !! [🧠] More granular split - handwriting, serif, sans-serif, monospace, cursive, fantasy,...
    isSpecial: boolean;
}

export const FONTS: Array<Font> = [
    ...FONTS_LIST_STANDARD.map((fontFamily) => ({
        fontFamily,
        isSpecial: false,
    })),
    ...FONTS_LIST_EXTENDED.map((fontFamily) => ({
        fontFamily,
        isSpecial: true,
    })),
];

export const COPILOT_PLACEHOLDERS: Array<string> = [
    // Note: ⏣ Describe the change>
    'Translate to Chinese',
    'Translate to English',
    'Translate to French',
    'Translate to German',
    'Translate to Italian',
    'Translate to Japanese',
    'Translate to Korean',
    'Translate to Portuguese',
    'Translate to Ukrainian',
    'Add email contact pavol@hejny.org',
    'Add phone contact +420 123 456 789',
    'Add a link to website www.pavolhejny.com',
    'Change opening hours on friday to 10:00-12:00',
    `We are temporarily closed due to vacation till tomorrow`,
    `Make better claim`,
    `Make better title`,
    `Shorten text about the company`,
    `Add new product - 3D printer`,
    `Delete the product - 3D printer`,
    'Change phone number to +007 123 456 789',
    'Make the text more friendly',
    'Make the text more formal',
    'Make the text more funny',
    'Make the text more serious',
    'Make the text more professional',
    'Make the text more personal',
    'Make the text more technical',
    'Make the text more simple',
    'Add a new paragraph - "We are the best"',
    'Add a new paragraph - "We are the cheapest"',
    'Add a new paragraph - "We are the fastest"',
    'Add a new paragraph - "We are the most reliable"',
    'Add bullet points why we are the best',
    'Add pricing table',
];

export const INSTAGRAM_PLACEHOLDERS: Array<string> = ['_1_2i_', 'pavolhejny', 'michelangelato.zmrzlinarna'].flatMap(
    (username) => [username, `@${username}`, `https://www.instagram.com/${username}/`],
);

export const MAX_CHARS_IN_TITLE = 'Futuristic Cityscape Wallpaper'.length - 7;
//                                'Tvořím něco z ničeho nic'
//                                'Futuristic Cityscape Wallpaper'

/**
 * Maximum size of custom wallpaper image
 * This will be checked on both client and server
 * If user uploads bigger image, it will be resized
 */
export const WALLPAPER_IMAGE_MAX_ALLOWED_SIZE = FULLHD; // <- TODO: When image for Azure content analysis will be separated from image to upload, allow to have UHD4K images

/**
 * Allowed aspect ratio of custom wallpaper image
 * This will be checked on client (+ in future on server) and wont be allowed to upload image if not in this range
 */
export const WALLPAPER_IMAGE_ASPECT_RATIO_ALLOWED_RANGE: AspectRatioRange = [new Vector(3, 1), new Vector(1, 3)];

// Note: Checking validity of the WALLPAPER_IMAGE_ASPECT_RATIO config
expectAspectRatioInRange('[1]', WALLPAPER_IMAGE_ASPECT_RATIO_ALLOWED_RANGE, FULLHD);

/**
 * @@@
 */
export const COLORSTATS_COMPUTE_METHODS: Array<IComputeImageColorStats<string>> = [
    /*/
    // Full:
    createColorfulComputeImageColorStats15({
        colorBits: 256,
        size: FULLHD,
    }),
    /**/
    createColorfulComputeImageColorStats15({
        colorBits: 16,
        size: FULLHD.scale(0.1),
    }),

    /*
    TODO: There is an infinite loop with "Error: Size must have positive integer values, got 19.2x10.8" when using this:
          Fix it:
        > createColorfulComputeImageColorStats15({
        >     colorBits: 16,
        >     size: FULLHD.scale(0.01),
        > }),
    */
    createColorfulComputeImageColorStats15({
        colorBits: 16,
        size: FULLHD.scale(0.2),
    }),
    /*
    TODO: !! Add more versions (Also full)
    */
    createColorfulComputeImageColorStats15({
        colorBits: 16,
        size: FULLHD,
    }),

    /*
    createColorfulComputeImageColorStats13({
        colorBits: 16,
        size: FULLHD.scale(0.1),
    }),
    createColorfulComputeImageColorStats13({
        colorBits: 16,
        size: FULLHD,
    }),

    */

    // TODO: More with createColorfulComputeImageColorStats
    // TODO: More with different strategy than createColorfulComputeImageColorStats
];

export const COLORSTATS_DEFAULT_COMPUTE_IN_SCRIPT: IComputeImageColorStats<string> = COLORSTATS_COMPUTE_METHODS[0]!;
export const COLORSTATS_DEFAULT_COMPUTE_IN_FRONTEND: IComputeImageColorStats<string> = COLORSTATS_COMPUTE_METHODS[0]!;

// TODO: [🧠] Pass theese as a parameter to the function createComputeImageColorStats

export const COLORS_LIMIT = 10;
export const MOST_SATULIGHTED_COLORS_SATULIGHTION_THEASHOLD_RATIO = 0.5;

/**
 * How much the color should be different (in hue) to be considered different
 * As degrees of hue
 */
export const DIFFERENT_COLOR_HUE_THEASHOLD_DEGREES = 30;

/**
 * How much the color should be different to be considered different
 * As ratio of distance between white and black
 */
export const DIFFERENT_COLOR_DISTANCE_THEASHOLD_RATIO = 0.1; /* <- As a ratio of distance between white and black */

/**
 * How much the color should be different to be considered OK as text color on background
 * As ratio of distance between white and black
 */
export const TEXT_BACKGROUND_COLOR_DISTANCE_THEASHOLD_RATIO = 0.5; /* <- As a ratio of distance between white and black */

/**
 * How much can be primary (background) color different from average color to be considered OK
 * As ratio of distance between white and black
 */
export const PRIMARY_TO_AVERAGE_MAX_COLOR_DISTANCE_THEASHOLD_RATIO = 0.1; /* <- As a ratio of distance between white and black */

export const SYSTEM_AUTHOR_ID = validateUuid('000d2940-4a35-4859-83a8-3c754ea5df51');

// TODO: [🧠] How to do required only on server
export const CDN_BUCKET = config.get('CDN_BUCKET') /*.required([📐])*/.value;
export const CDN_PATH_PREFIX = config.get('CDN_PATH_PREFIX') /*.required([📐])*/.value;
export const CDN_ENDPOINT = config.get('CDN_ENDPOINT') /*.required([📐])*/.value;
export const CDN_ACCESS_KEY_ID = config.get('CDN_ACCESS_KEY_ID') /*.required([📐])*/.value;
export const CDN_SECRET_ACCESS_KEY = config.get('CDN_SECRET_ACCESS_KEY') /*.required([📐])*/.value;
export const CDN_PUBLIC_URL = config.get('CDN_PUBLIC_URL').url() /*.required([📐])*/.value;

export const CDN = (CDN_BUCKET &&
    // [📐]
    new DigitalOceanSpaces({
        bucket: CDN_BUCKET!,
        pathPrefix: CDN_PATH_PREFIX!,
        endpoint: CDN_ENDPOINT!,
        accessKeyId: CDN_ACCESS_KEY_ID!,
        secretAccessKey: CDN_SECRET_ACCESS_KEY!,
        cdnPublicUrl: CDN_PUBLIC_URL!,
        gzip: false /* <- TODO: Maybe just remove this functionality from WebGPT repository */,
    })) as DigitalOceanSpaces;

export const MIDJOURNEY_WHOLE_GALLERY_PATH = 'X:/Mythings/MidJourney';

export const PUBLISH_TO_GITHUB_ORGANIZATION = config.get(
    'PUBLISH_TO_GITHUB_ORGANIZATION',
    `@see https://github.com/settings/tokens`,
).value;
export const GITHUB_TOKEN = config.get('GITHUB_TOKEN', `@see https://github.com/settings/tokens`).value;

/**
 * TODO: !! Annotate all
 * TODO: [📙] Every dictionary should look like LikedStatus
 */
