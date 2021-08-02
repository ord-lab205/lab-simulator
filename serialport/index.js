const parser = require('./com9_sound');

parser.on('data', data => process.stdout.write(data + ' '));