import {load} from "./gallery.js";
import {display_galerie} from "./gallery_ui.js";

document.querySelector('#load_gallery')
  .addEventListener('click',  e => {
    load().then(display_galerie);
  })
