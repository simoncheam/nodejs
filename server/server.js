let path = require('path');
let fs = require('fs'); 
let request = require('request');




let dataPath = path.join(__dirname, '../chirps.json');

let ChirpArray = [ 
    {username: "Simon", id: 001, chirp:"aha omg computers are cool", createdAt: "random time in the past"},
    {username: "Luke", id: 002, chirp:"lol omg Y2K is coming!", createdAt: "12/31/1999"},
    {username: "Andrew", id: 003, chirp:" don't forget to berate your users! lmao", createdAt: " 8/21/2021"},
    {username: "John", id: 004, chirp:"I love node", createdAt: "8/21/2021"},
    {username: "Jane", id: 005, chirp:"I love node too", createdAt: "8/21/2021"},  

]

//let chirps = fs.readFileSync('readMeChirps.js ')


// PART 1 - write to file

fs.writeFile(dataPath, JSON.stringify(ChirpArray, null, 2), (err) => {

    if (err) {
        console.log({message: "there was an error writing the file. ", error: err});
        return;
    }
    console.log('Added in Chirps, see chirps.json');

})

// PART 2 - read file and console log array

fs.readFile(dataPath, (err, data)  =>{

    if (err) {
        console.log({message: "there was an error reading the file. ", error: err});
        return;
    }
    console.log('Here is your array for Chirps!');
    const yourChirps = JSON.parse(data);
    console.log(yourChirps);

})


//PART 2 - see reddit.js



