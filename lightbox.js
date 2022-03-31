import {loadResource} from "./PhotoLoader.js";
import {display_lightbox} from "./lightbox_ui.js";


let val=null;

export function load(node){
    val = node.parentNode;
    let a = node.getAttribute("data-uri");

    loadResource("https://webetu.iutnc.univ-lorraine.fr" + a).then(display_lightbox);
}

export function nextL() {

    if(val.nextElementSibling){
        val = val.nextElementSibling;
    }else{
        val = val.parentNode.firstElementChild;
        console.log(val);
    }

    load(val.firstElementChild);
}

export function prevL() {

    if(val.previousElementSibling){
        val = val.previousElementSibling;
    }else{
        val = val.parentNode.lastElementChild;
        console.log(val);
    }

    load(val.firstElementChild);
}