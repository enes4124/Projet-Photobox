import {loadResource} from "./PhotoLoader.js";
import {display_lightbox} from "./lightbox_ui.js";

export function load(node){

    let a = node.getAttribute("data-uri");

    loadResource("https://webetu.iutnc.univ-lorraine.fr" + a).then(display_lightbox);
}