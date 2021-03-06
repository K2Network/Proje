const express = require('express')
const history = require('connect-history-api-fallback');
const path = require('path')
const app = express()
const staticFileMiddleware = express.static(path.join(__dirname + '/dist'));
app.use(staticFileMiddleware);
app.use(history({
    index : "index.html",
  disableDotRule: true,
  verbose: true
}));
app.get('/', function (req, res) {
    res.render(path.join(__dirname + '/dist/index.html'));
  });
  
  var server = app.listen(process.env.PORT || 8080, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
  });
