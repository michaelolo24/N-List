var bcrypt = require("bcrypt-nodejs");
var Promise = require("bluebird");

module.exports = {};

module.exports.hashPassword = function(password){
  return new Promise(
    function(resolve, reject){
      bcrypt.genSalt(10, function(error, salt){
        if(error){
          reject(error)
        }
        bcrypt.hash(password, salt, null, function(err, hash){
          if(err){
            reject(err)
          }
          resolve(hash);
        })
      })
    }
  )
};
