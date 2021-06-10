//Using the old method
function sum(a,b){
    value=0;
    for(var i=0; i < arguments.length; i++){
        value+=arguments[i];
    }
    return value
}


console.log(sum(1,2,3,4,5,6,7));

//Using the new method ES6

function sum_rest(...args){
   return args.reduce((accumulator, currentValue) => accumulator + currentValue); //using reduce...
} //Rest Operator


console.log(sum_rest(1,2,3,4,5,6,7))