let storage;

function setItem(name,value){
    if(typeof storage.setItem !== "function") throw "Storage should implement setItem method";
    storage.setItem(name,value);
}

function getItem(name){
    if(typeof storage.setItem !== "function") throw "Storage should implement getItem method";
    return storage.getItem(name);
}

function removeItem(name){
    if(typeof storage.setItem !== "function") throw "Storage should implement remove method";
    storage.removeItem(name);
}

export default {
    setItem,
    getItem,
    removeItem
}

export const setStorage = (instance) =>{
    storage = instance;
}