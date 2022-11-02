import storage from "../storage";

async function setToken(token){
    storage.setItem('token',token);
}

async function getToken(){
    return storage.getItem("token");
}

async function removeToken(){
    return storage.removeItem("token");
}

export {
    setToken,
    getToken,
    removeToken
}
