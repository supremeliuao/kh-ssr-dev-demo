const FS = require('fs');
const { resolve: RESOLVE } = require('path');

exports.faviconController = function (req, res) {
  const PATH_URL = RESOLVE(__dirname, '../../favicon.ico');
  console.log(PATH_URL);

  try {
    FS.readFile(PATH_URL, (err, data) => {
      res.status(200).end(data);
    })
  } catch (error) {
    res.status(404).end('not found');
  }
}
