var fs = require('fs');
fs.createReadStream('config.js').pipe(fs.createWriteStream('../../config.js'));
fs.createReadStream('settings.js').pipe(fs.createWriteStream('../../settings.js'));
console.log('\u001b[1;33m Do not forget to create creds.js file in parent folder. cf. https://github.com/mhazebroucq/gulp-sharepoint-local-sync')
console.log('\u001b[1;37m Installation done');