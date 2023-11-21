let par = "Lorem ipsum dolor sit amet consectetur adipiscing elit Curabitur eget bibendum turpis Curabitur scelerisque eros ultricies venenatis mi at tempor nisl Integer tincidunt accumsan cursus"
let counts = {};

// Your code here
//remember strings can be iterated over and accessed with the index
for(let i of par){
//to lower case to have an accurate count regardless of letter casing
    const letter = i.toLowerCase()
//if letter is blank space, do nothing and go to nex iteration
    if(letter == " "){
        continue;
    }
//if letter property for object is non existant, create it by assigning its value to 1
    else if(counts[letter] == undefined){
        counts[letter] = 1
    }
// if letter property for object already exists, increment value by 1
    else{
        counts[letter] += 1
    }
}
//log out the final object 
console.log(counts)