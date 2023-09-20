

const success = (msg, result = null) => {
    // return {
    //     msg: msg , 
    //     datas: datas ,
    // }
    return { msg, result } // syntaxe objet ES6 (destructuring)
}
const error = (msg) => {
    return { msg };
}

export {success, error}