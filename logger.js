//Module wrapper function : fucntion(exports, require, module,filename,dirname)
//Reusable module for logging messages
var url = 'http://mylogger.io/log';

//To make it public, use module object exports object property
function log(message) {
    //Send an http request to the endpoint.
    console.log(message);
}

module.exports.log = log;
//We can also export function instead of object using
// module,exports = log, so we call directly the function
//module.exports.endPoint = url; -> No need for that , we
// only expose method as interface to UserActivation,without the detail
// of implementation.