import {loadResource} from "./PhotoLoader.js";
import {display_lightbox} from "./lightbox_ui.js";

export function load(node){

    let a = node.getAttribute("data-uri");
    
    loadResource("https://webetu.iutnc.univ-lorraine.fr/www/canals5/phox/api/photos/6").then(display_lightbox);
}