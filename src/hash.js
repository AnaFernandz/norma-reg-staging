const crypto = require('crypto');

function fingerprint(value) {
  return crypto.createHash('sha256').update(value).digest('hex');
}

module.exports = { fingerprint };
// free plan check
