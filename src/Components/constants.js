// apiKey
export const API__KEY = 'a8e816724effba86d757865a22d8e8a9';
export const PRIVAT__KEY = 'e5978f30c3ad6c842f3d429a35889d8fa3556a43';
export const HASH = '59fe693fbe7c27c4a3fa3b2210ad9ab4';

// urlKey
export const HTTPS = 'https://';
export const HTTP = 'http://';
export const API__ROOT = 'gateway.marvel.com/v1/public/';
export const CHARACTERS = 'characters';
export const COMICS = 'comics';
export const KEY = '?apikey=';
export const API__PARAM__SEARCH = '?nameStartsWith=';

// API URL
export const API__URL__ROOT = API__ROOT + CHARACTERS;
export const API__URL = HTTPS + API__URL__ROOT + KEY;
export const API__CHARACTERS = API__URL + API__KEY;
export const API__PERSON = API__URL + API__KEY;
export const API__SEARCH = HTTPS + API__ROOT + CHARACTERS + API__PARAM__SEARCH;
export const MARVEL = 'https://developer.marvel.com/' 
// imgKey

export const IMG__URL = 'standard_xlarge';
export const IMG__NOT__AVALIABLE = 'image_not_available';

// root
export const ROOT = document.getElementById('root');



