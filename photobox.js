import {loadR} from "./gallery.js";
import {display_galerie} from "./gallery_ui.js";
import {load} from "./lightbox.js";

document.querySelector('#load_gallery')
  .addEventListener('click',  e => {
    loadR().then(display_galerie);
  })

let a = document.getElementsByClassName("vignette");

for(let i=0;i<a.length;i++){
    a[i].onclick = () => {
        console.log(a[i].children[0]);
        load(a[i].children[0]);
        console.log("it works");
    };
}