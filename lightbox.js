import {loadResource} from "./PhotoLoader.js";
import {display_lightbox} from "./lightbox_ui.js";


let val=null;

export function load(node){
    val = node.parentNode;
    let a = node.getAttribute("data-uri");

    loadResource("https://webetu.iutnc.univ-lorraine.fr" + a).then(display_lightbox);
}

export function nextL() {

    val = val.nextElementSibling;
    load(val.firstElementChild);
}

export function prevL() {

    val = val.previousElementSibling;
    load(val.firstElementChild);
}