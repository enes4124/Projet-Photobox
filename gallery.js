import {loadResource} from "./PhotoLoader.js"

export function load(){
    let tab;

    let lr = loadResource("https://webetu.iutnc.univ-lorraine.fr/www/canals5/phox/api/photos");
    console.log(lr.then());
}
