const path = require('path');

const rootPath = __dirname;

module.exports = {
  rootPath,
  uploadPath: path.join(rootPath, 'public/uploads'),
  db: {
    url: 'mongodb://localhost/gallery',
  },
  google: {
    clientId: process.env.GOOGLE_CLIENT_ID,
  },
};