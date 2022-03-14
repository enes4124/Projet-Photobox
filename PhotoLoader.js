import {configuration} from "./config.js";





function loadResource(uri){
    let pr = fetch("https://webetu.iutnc.univ-lorraine.fr"+uri, {
        credentials : 'include'
    }).then(resp => {
        if(resp.ok){
            return resp.json().then(data => {
                return data;
            });
        }
        else Promise.reject(new Error("L'image n'existe pas"));
    }).catch(error => {
        console.log(error);
    });
    return pr;
}


export default {
    loadResource
}
//loadPicture(105);
//Maxence esr un bg