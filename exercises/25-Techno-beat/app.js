// Your code here
function lyricsGenerator(array){
    let songLyrics = ''
    let oneCounter = 0
    
    for (let number of array){
        if(number === 0){
            songLyrics += "Boom "
            oneCounter = 0
        }
        else if(number ===1){
            songLyrics += "Drop the bass "
            oneCounter +=1 

        //remember we can always nest if conditionals 
        
            if(oneCounter === 3){
                songLyrics += "!!!Break the bass!!! "
            }
        }


    }
    return songLyrics
}

// Don't change anything below this line
console.log(lyricsGenerator([0,0,1,1,0,0,0]))
console.log(lyricsGenerator([0,0,1,1,1,0,0,0]))
console.log(lyricsGenerator([0,0,0]))
console.log(lyricsGenerator([1,0,1]))
console.log(lyricsGenerator([1,1,1]))
