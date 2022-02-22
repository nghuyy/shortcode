const clipboardy = require('clipboardy');
const {Ults} = require('@ng.huyy/jslibs')
/*
require('crypto').randomBytes(128, function(err, buffer) {
    const token = buffer.toString('hex');
    clipboardy.write(token);
    console.log(token);
});
*/
clipboardy.write(Ults.randomSafeName(64));