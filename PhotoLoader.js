export function loadResource(uri){
    let pr = fetch(uri, {
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
