let mix = [42, true, "towel", [2,1], 'hello', 34.4, {"name": "juan"}];
let typeOfMix = []
// Your code here
for(let i=0; i<mix.length; i++){
    typeOfMix.push(typeof mix[i])
}
console.log(typeOfMix)