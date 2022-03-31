import { loadResource } from "./PhotoLoader.js";

export function display_lightbox(data){

    // console.log(data)

    let aas = document.getElementById("lightbox_full_img");

    let urll = "https://webetu.iutnc.univ-lorraine.fr/" + data.photo.url.href;
    let titre = data.photo.titre;

    

    document.getElementById("lightbox_full_img").setAttribute("src",urll);
    document.getElementById("lightbox_title").innerText = titre;

    // console.log(document.getElementById("lightbox_full_img").getAttribute("src"));



    show()




    document.querySelector('#aGauche').addEventListener('click', evt => {
    })

    document.querySelector('#aDroite').addEventListener('click',evt => {
    })
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

