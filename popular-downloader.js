const path = require('path');
const fs = require('fs'); 
const request = require('request');
const https = require("https")

let dataPath = path.join(__dirname, './downloads/');
console.log('datapath '+ dataPath);

let validMediaTypes = [

    '.jpg',
    '.gif',
    '.png',
    '.jpeg',
    '.gifv',
    '.bmp',
    '.mp4',
    '.avi',
    '.flv',
    '.svg'
];


request('https://www.reddit.com/r/ProgrammerHumor.json', (err, res, body) => {

    if(err) console.log(err);

    JSON.parse(body).data.children.forEach(item =>{
        
        let url = item.data.url;
        let ext = path.extname(url)
        
       if( validMediaTypes.includes(ext)){

        let fileName=item.data.id+ ext;
        const file = path.join(dataPath, fileName);  //review this
        console.log(file);

        https.get(url, function(res) { //res = stream of raw data

            const fileStream = fs.createWriteStream(file);
            res.pipe(fileStream);

                fileStream.on("finish", function(res) {
                    fileStream.close();    //severs connnect to datastream of file, conserves memory
                    console.log('Done!');
                });
            

            });
        }
    })
});

                



    
       
           

  





