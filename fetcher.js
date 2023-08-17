const axios = require('axios');
const fs = require('fs');
const readline = require('readline');

const url = process.argv[2];
const path = process.argv[3];

axios.get(url)
  .then(response => {
    fs.writeFile(path, response.data, (err) => {
      if (err) {
        console.error('Error writing file: ', err);
      } else {
        const stats = fs.statSync(path);
        console.log(`Downloaded and saved ${stats.size} bytes to ${path}`);
      }
    });
  })
  .catch(error => {
    console.error('Error fetching data: ', error);
  });

//revised
