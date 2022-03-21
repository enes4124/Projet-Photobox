

export function display_lightbox(data){
    
    let aas = document.getElementById("lightbox_full_img");

    let urll = data.photo.original.href
    let titre = data.photo.titre
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
    ass.innerHTML = htmloklm;
    console.log(aas);
}

// display_lightbox()

