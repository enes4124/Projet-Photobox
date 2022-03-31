import {loadResource} from "./PhotoLoader.js";
import {display_lightbox} from "./lightbox_ui.js";
import {next,previous} from "./gallery.js";
import {display_galerie} from "./gallery_ui.js";


let val=null;

export function load(node){
    val = node.parentNode;
    let a = node.getAttribute("data-uri");

    loadResource("https://webetu.iutnc.univ-lorraine.fr" + a).then(display_lightbox);
}

export function nextL() {

    if(val.nextElementSibling){
        val = val.nextElementSibling;
        load(val.firstElementChild);
    }else{
        next().then(value => {
            display_galerie(value);

            let a = document.getElementsByClassName("vignette");

            val = a[0];
            load(val.firstElementChild);
        });
    }
}

export function prevL() {

    if(val.previousElementSibling){
        val = val.previousElementSibling;
        load(val.firstElementChild);
    }else{
        previous().then(value => {
            display_galerie(value);

            let a = document.getElementsByClassName("vignette");

            val = a[a.length-1];

            //val = val.parentNode.lastElementChild;
            console.log(val);

            load(val.firstElementChild);
        });
    }

}