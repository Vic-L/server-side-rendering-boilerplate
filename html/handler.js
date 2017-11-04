'use strict';

module.exports.render = (event, context) => {
  var html = '<html><head><title>One piece rox!</title></head>' + 
        '<body><h1>One piece rox!</h1></body></html>'
    
    context.succeed(html)
};
