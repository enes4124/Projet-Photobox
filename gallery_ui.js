import {load} from "./lightbox.js";

export function display_galerie(galerie){

    let b = document.getElementById("gallery_container");
    b.innerHTML = "";

   //let sheesh = JSON.parse(galerie);

    galerie.photos.forEach(e => {
        // console.log(e.photo.original.href);
        //console.log(e.links.self.href);
        b.innerHTML += `
        <div class="vignette" >
        <img data-uri="${e.links.self.href}"
          src="https://webetu.iutnc.univ-lorraine.fr/${e.photo.original.href}">
      </div>
      `
    });

    let a = document.getElementsByClassName("vignette");

    for(let i=0;i<a.length;i++) {
        a[i].onclick = () => {
            load(a[i].children[0]);
        };
    }
}