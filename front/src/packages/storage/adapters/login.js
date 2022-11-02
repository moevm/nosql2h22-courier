import storage from "../storage";

async function setLogin(login){
    storage.setItem('email',login);
}

async function getLogin(){
    return storage.getItem("login");
}

async function removeLogin(){
    return storage.removeItem("login");
}


export {
    setLogin,
    getLogin,
    removeLogin
}
