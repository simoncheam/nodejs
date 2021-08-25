// Part2
/*
1. Install request-promise from npm and save it to your package.json file.
2. Create a JavaScript file in the root of your project called reddit.js.
3. Use request-promise to retreive articles from https://reddit.com/r/popular.json.
Extract from each article title, url, and author


Article title: data.children.data.title

URL: data.children.data.url

Author: data.children.data.author

- Push each extracted article to an array.
- Write the array to a file in the root of your project called popular-articles.json.


*/

const path = require('path');
const fs = require('fs'); 
const request = require('request');

let dataPath = path.join(__dirname, './popular-articles.json');

let arrayItems = [];

request('https://reddit.com/r/popular.json', (err, res, body) => {

    if(err) console.log(err);

    // !need body to be json object (so we need to parse body object)
    JSON.parse(body).data.children.forEach(item =>{

        // extracted: article title, url and author

        //need to push each item into array
        arrayItems.push({title: item.data.title, url: item.data.url, author: item.data.author } )
        console.log(arrayItems)

        
    })
    
    
    fs.appendFileSync(dataPath, JSON.stringify(arrayItems, null, 2), err => {

        if (err) {
            console.log({message: "there was an error writing the file. ", error: err});
            return;
        }
        console.log('pushed article objects in Array, see popular-articles.json');

    })


})

