import { HTTPS, HTTP, API__ROOT, COMICS } from "../Components/constants";

const getId = (url, category) => {
    const id = url
        .replace(HTTP + API__ROOT + category, '')
        .replace(/\//g, '')
    return id;
}

export const getComicsId = url => getId(url, COMICS);

export const changeHTTP = url => {
    const result = typeof url === 'string' ? url.replace(HTTP, HTTPS) : url;
    return result;
}

export const makeConcurentRequest = async (url) => {
    const res = await Promise.all(url.map(res => {
        return fetch(res).then(res => res.json())
    }));
    return res;
}






