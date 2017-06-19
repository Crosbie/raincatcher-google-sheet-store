var sheetAPI = require('./google-sheets');
var config = require('./config');

var getSheetPromise;

/**
 *
 * Connecting and authenticating to the google sheet store.
 *
 * @param {object} _config
 * @returns {Promise}
 */
function connect(_config) {
  if (getSheetPromise) {
    return getSheetPromise;
  }

  config.set(_config);

  return sheetAPI.authenticate();
}

module.exports = {
  connect: connect,
  GoogleSheetStore: require('./sheet-store')
};