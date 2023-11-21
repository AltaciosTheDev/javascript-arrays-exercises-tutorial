let people = ['juan','ana','michelle','daniella','stefany','lucy','barak', 'emilio'];

// Your code below
function deletePerson(personToDelete){
    let newPeople = people.filter(function(person){
        return person !== personToDelete
    })
    return newPeople
}
console.log(deletePerson('daniella'));
console.log(deletePerson('juan'));
console.log(deletePerson('emilio'));
