import {load} from "./gallery.js";
import {display_galerie} from "./gallery_ui.js";

document.querySelector('#load_gallery')
  .addEventListener('click',  e => {
    load().then(display_galerie);
  })

let a = document.getElementsByClassName("vignette");

for(let i=0;i<a.length;i++){
    a[i].onclick = () => {
        console.log("it works");
    };
}