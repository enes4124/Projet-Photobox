

export function display_lightbox(data){

    let aas = document.getElementById("lightbox_full_img");

    let urll = "https://webetu.iutnc.univ-lorraine.fr/www/canals5/phox/img/large/" + data.photo.file;
    let titre = data.photo.titre;
    let htmloklm = `
    <div id="lightbox">
        <div id="lightbox-head">
            <p id="lightbox_close">-X-</p>
            <h1 id="lightbox_title">${titre}</h1>
        </div>

        <div id="lightbox-img">
            <img id="lightbox_full_img" src="${urll}">
        </div>
    </div>
    `
    aas.innerHTML = htmloklm;

    document.getElementById("lightbox_full_img").setAttribute("src",urll);

    console.log(document.getElementById("lightbox_full_img").getAttribute("src"));

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

