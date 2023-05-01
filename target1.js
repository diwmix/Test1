function removeLetterZ(string){
    return string.join('').replace(/[Zz]/g, "");
}
module.exports = removeLetterZ