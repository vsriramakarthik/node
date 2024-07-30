function add(a,b){
    return a+b
}
function sub(a,b){
    return a-b
}
function mul(a,b){
    return a*b
}
function div(a,b){
    return a/b
}
//if we want to import these in other files first we have
//to expoet in this file
module.exports={add,sub,mul,div}