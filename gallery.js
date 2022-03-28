import {loadResource} from "./PhotoLoader.js"
var gallerie

export function loadR(){
    return gallerie = loadResource("https://webetu.iutnc.univ-lorraine.fr/www/canals5/phox/api/photos");
}

export function next(){
    return gallerie.then(response =>{
        return gallerie = loadResource("https://webetu.iutnc.univ-lorraine.fr"+response.links.next.href)
    }) 
}

export function previous(){
    return gallerie.then(response =>{
        return gallerie = loadResource("https://webetu.iutnc.univ-lorraine.fr"+response.links.prev.href)
    }) 
}

export function first(){
    return gallerie.then(response =>{
        return gallerie = loadResource("https://webetu.iutnc.univ-lorraine.fr"+response.links.first.href)
    }) 
}

export function last(){
    return gallerie.then(response =>{
        return gallerie = loadResource("https://webetu.iutnc.univ-lorraine.fr"+response.links.last.href)
    }) 
}