// entry --> build file
const path = require('path');

module.exports = {
    entry: './public/src/app.js',
    output: {
        path: path.join(__dirname, '/public/scripts'),
        filename: 'bundle.js'
    }
}