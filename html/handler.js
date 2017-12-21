'use strict';

module.exports.render = (event, context, callback) => {
  const html = '<!DOCTYPE html><html><head>' + 
    '<meta name="google-site-verification" content="' + process.env.GOOGLE_SITE_VERIFICATION + '" />' + 
    '<meta name="viewport" content="width=device-width, initial-scale=1">' +
    '<meta http-equiv="Content-Type" content="text/html;charset=utf-8">' +
    '<title>One piece rox!</title>' +
    '<meta name="description" content="One piece rox!">' +
    '</head>' + 
    '<body>' +
    '<div id="app"></div>' +
    '<script type="text/javascript" src="some js url" async></script>' +
    '</body></html>'

  const response = {
    statusCode: 200,
    headers: {
      'Content-Type': 'text/html',
    },
    body: html,
  };

  callback(null, response);
};
