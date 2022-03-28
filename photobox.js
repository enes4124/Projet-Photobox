import {first, last, loadR, previous} from "./gallery.js";
import {display_galerie} from "./gallery_ui.js";
import {hide} from "./lightbox_ui.js";
import {next} from "./gallery.js"


let cacher = document.getElementById("lightbox_close")
cacher.onclick = function(){
    hide();
}


document.querySelector('#load_gallery')
  .addEventListener('click',  e => {
    loadR().then(display_galerie);


  });

document.querySelector("#next").addEventListener('click', e =>{
  next().then(display_galerie);
});

document.querySelector("#previous").addEventListener('click', e =>{
  previous().then(display_galerie);
});


document.querySelector("#first").addEventListener('click', e =>{
  first().then(display_galerie);
});

document.querySelector("#last").addEventListener('click', e =>{
  last().then(display_galerie);
});