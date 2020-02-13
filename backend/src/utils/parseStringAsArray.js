module.exports = function parseStringAsArray(cont){
    return cont.split(',').map(tech => tech.trim());
}