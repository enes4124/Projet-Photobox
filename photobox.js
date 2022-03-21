import {loadR} from "./gallery.js";
import {display_galerie} from "./gallery_ui.js";
import {load} from "./lightbox.js";


let cacher = document.getElementById("lightbox_close")
cacher.onclick = function(){
    console.log("ok c'est ici le cachement");
    document.getElementById("lightbox_container").classList.remove("lightbox_container--visible");
    document.getElementById("lightbox_container").classList.add("lightbox_container--hidden");
}


document.querySelector('#load_gallery')
  .addEventListener('click',  e => {
    loadR().then(display_galerie);


  });

