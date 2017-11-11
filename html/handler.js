'use strict';

module.exports.render = (event, context, callback) => {
  console.log("event.stage", event.stage)
  console.log("context", context)
  const html = '<html><head><title>One piece rox!</title></head>' + 
        '<body><h1>One piece rox!</h1></body></html>'

  const response = {
    statusCode: 200,
    headers: {
      'Content-Type': 'text/html',
    },
    body: html,
  };

  callback(null, response);
};
