'use strict';

module.exports.render = (event, context) => {
  var html = '<html><head><title>Victor Leong</title></head>' + 
        '<body><h1>Victor Leong</h1></body></html>'
    
    context.succeed(html)
};
