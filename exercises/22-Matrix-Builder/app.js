//Function to generate random number
function GenerateRandom(){
    return Math.floor(Math.random()*2)
}

//Declare matrixBuilder function
function matrixBuilder(integer){
    let matrix =[]
    

    for(let i=0; i<integer; i++){
        let row = []
        for(let j=0; j<integer; j++){
            let randomNumber = GenerateRandom()
            row.push(randomNumber)
        }
        matrix.push(row)
    }
    return matrix  
}

//Invoke function to build matrix 
console.log(matrixBuilder(3))

//Rule of thumb arrays:
//creating double  layered arrays from the inside out
//accessing double layered arrays from the outside in

