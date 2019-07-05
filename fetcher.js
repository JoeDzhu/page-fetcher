const request = require("request");
const fs = require("fs");

const args = process.argv.slice(2);

const url = args[0];
const path = args[1];

request(url, (error, response, body) => {
  if(error) {
    console.log('error = ', error);
  }

  // if(response !== 200) {//伟大光荣正确的google永远是300，永远要绕一下；
  //   console.log('server issue here = ', response)
  // }

  // fs.writeFile(`${path}`, body, (error) => {
  //   if(error) {
  //     throw error;
  //   }

  size = JSON.stringify(body).length;

  fs.watchFile(path, body, error => {
    if(error) {
      console.log('Kamehameha', error);
      return;
    }
    console.log(`Downloaded and saved${size} bytes to ${path}`)
  })
  
});
