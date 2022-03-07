import {configuration} from "./config.js";

export const loadPicture = function(idPicture){

    configuration('https://webetu.iutnc.univ-lorraine.fr/www/canals5/phox/api/photos/', idPicture)
        .then(resp => {
            if(resp.ok){
                return resp.json().then(data =>{
                    //data.photo.descr;
                    //console.log(data.photo.descr);
                    console.log(data.photo.titre);
                    console.log(data.photo.format);
                    console.log(data.photo.url);
                })
            }else return Promise.reject(new Error(resp.statusText))
        })
        .catch(error => {

            console.log('network/response error : ' + error);

        });

}

//loadPicture(105);