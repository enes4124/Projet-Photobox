import {loadResource} from "./PhotoLoader";

export function load(node){

    let a = node.getAttribute("data-uri");
    photos.links.self.href=a;
    console.log(a);
    loadResource("https://webetu.iutnc.univ-lorraine.fr/www/canals5/phox/api/photos/6").then(display_lightbox);
}