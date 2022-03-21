import {loadR} from "./gallery.js";
import {display_galerie} from "./gallery_ui.js";
import {hide} from "./lightbox_ui.js";


let cacher = document.getElementById("lightbox_close")
cacher.onclick = function(){
    hide();
}


document.querySelector('#load_gallery')
  .addEventListener('click',  e => {
    loadR().then(display_galerie);


  });

