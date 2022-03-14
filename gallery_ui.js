export function display_galerie(galerie){

    let a = document.getElementById("gallery_container");
    a.innerHTML = "";

    galerie.forEach(e => {
        a.innerHTML += `       
        <div class="vignette" >
        <img data-uri="${e.links.self.href}"
          src="${e.photo.original.href}">
      </div>
      `
    });
}