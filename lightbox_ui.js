import {loadResource} from "./PhotoLoader.js";


export function display_lightbox(data){

    console.log(data)

    let aas = document.getElementById("lightbox_full_img");

    let urll = "https://webetu.iutnc.univ-lorraine.fr/" + data.photo.url.href;
    let titre = data.photo.titre;
    let descr = data.photo.descr
    let format = data.photo.format

    

    document.getElementById("lightbox_full_img").setAttribute("src",urll);
    document.getElementById("lightbox_title").innerText = "Titre de la photo : "+titre;

    // console.log(document.getElementById("lightbox_full_img").getAttribute("src"));
    document.getElementById("description").innerText = "Description de la photo : "+descr;
    document.getElementById("format").innerText = "Format de la photo (type MIME) : "+format;

    show()




}


export function hide(){
    document.getElementById("lightbox_container").classList.add("lightbox_container--hidden");
    document.getElementById("lightbox_container").classList.remove("lightbox_container--visible");

}


function show(){
    document.getElementById("lightbox_container").classList.remove("lightbox_container--hidden");
    document.getElementById("lightbox_container").classList.add("lightbox_container--visible");

}


// display_lightbox()

