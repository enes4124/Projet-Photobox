import {loadResource} from "./PhotoLoader.js";
import {display_lightbox} from "./lightbox_ui.js";
import {next, previous} from "./gallery.js"
import { display_galerie } from "./gallery_ui.js";



export function load(node){
    let a = node.getAttribute("data-uri");
    loadResource("https://webetu.iutnc.univ-lorraine.fr" + a).then(display_lightbox);
}



