import {loadResource} from "./PhotoLoader.js";
import {display_lightbox} from "./lightbox_ui.js";
import {first, last, next, previous} from "./gallery.js";
import { display_galerie } from "./gallery_ui.js";

export function load(node){

    let a = node.getAttribute("data-uri");
    console.log(a);

    loadResource("https://webetu.iutnc.univ-lorraine.fr" + a).then(display_lightbox);
     
}

export function nexxt(){
    next().then(response => {
        display_galerie(response);
    })
}


export function preevious(){
    previous().then(response => {
        display_galerie(response);
    })
}


export function firsst(){
    first().then(response => {
        display_galerie(response);
    })
}

export function lasst(){
    last().then(response => {
        display_galerie(response);
    })
}