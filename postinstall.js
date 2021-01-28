var fs = require('fs');
fs.createReadStream('./Scripts/config.js').pipe(fs.createWriteStream('../../config.js'));
fs.createReadStream('./Scripts/settings.js').pipe(fs.createWriteStream('../../settings.js'));
fs.createReadStream('index.js').pipe(fs.createWriteStream('../../gulpfile.js'));
if (fs.existsSync('../../.gitignore')) {
    fs.appendFileSync('../../.gitignore', '\r\ncache/');
  }else{
    fs.writeFileSync('../../.gitignore', 'cache/');
}

console.log('\u001b[1;33m Do not forget to create creds.js file in parent folder. cf. https://github.com/mhazebroucq/gulp-sharepoint-local-sync')
console.log('\u001b[1;37m Installation done');