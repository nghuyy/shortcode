const clipboardy = require('clipboardy');
require('crypto').randomBytes(128, function(err, buffer) {
    const token = buffer.toString('hex');
    clipboardy.write(token);
    console.log(token);
});