export function display_galerie(galerie){

    let a = document.getElementById("gallery_container");
    a.innerHTML = "";

   //let sheesh = JSON.parse(galerie);

    galerie.photos.forEach(e => {
        // console.log(e.photo.original.href);
        //console.log(e.links.self.href);
        a.innerHTML += `
        <div class="vignette" >
        <img data-uri="${e.links.self.href}"
          src="https://webetu.iutnc.univ-lorraine.fr/${e.photo.original.href}">
      </div>
      `
    });
}