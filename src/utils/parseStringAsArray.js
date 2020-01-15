module.exports = function parseStringAsArray(arrayAsString){
    //Transforma a string "techs" em um array
    return arrayAsString.split(',').map(tech => tech.trim());
    /** Usamos o map para percorrer o array formado
     *  Usamos o trim para remover espaçamentos antes e depois
     */
         
}