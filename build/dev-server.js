require('./check-versions')()

var config = require('../config')
if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV)
}

var opn = require('opn')
var path = require('path')
var express = require('express')
var url = require('url')
var webpack = require('webpack')
var proxyMiddleware = require('http-proxy-middleware')
var webpackConfig = require('./webpack.dev.conf')
var _u = require('underscore')

// default port where dev server listens for incoming traffic
var port = process.env.PORT || config.dev.port
// automatically open browser, if not set will be false
var autoOpenBrowser = !!config.dev.autoOpenBrowser
// Define HTTP proxies to your custom API backend
// https://github.com/chimurai/http-proxy-middleware
var proxyTable = config.dev.proxyTable

var app = express()

// 权限申请数据
var appData = require('../src/mock/selectAuth.json');
var authSelectorData = appData.authSelectorData;

// 权限菜单选项数据
var menuData = appData.parentOpt;

// 我的权限数据
var myAuthData = require('../src/mock/myauth.json').authData;

var apiRoutes = express.Router();

apiRoutes.get('/serviceData', function (req, res) {
  var params = url.parse(req.url, true).query;
  var _index = params.index;
  res.json({
    errno: 0,
    data: authSelectorData[_index]
  });
});

apiRoutes.get('/menuData', function (req, res) {
  var params = url.parse(req.url, true).query;
  var _index = params.index;
  res.json({
    errno: 0,
    data: menuData
  });
});

apiRoutes.get('/myAuthData', function (req, res) {
  var params = url.parse(req.url, true).query;
  var _authType = params.authType;
  console.log(_authType)
  res.json({
    errno: 0,
    data: myAuthData[_authType]
  });
});

apiRoutes.get('/withdraw', function (req, res) {
  var params = url.parse(req.url, true).query;
  var _authType = params.authType;
  var uuid = params.uuid;
  console.log('authType:' + _authType + 'uuid:' + uuid);
  res.json({
    errno: 0,
    // 看这里要不要把更新后的数据在获取一遍，传给前端。
    // data: myAuthData[_authType]
  });
});

apiRoutes.get('/dataNum', function (req, res) {
  res.json({
    errno: 0,
    data: {
      pendingNum: !_u.isEmpty(myAuthData.pendingAuth) ? myAuthData.pendingAuth.viewAuth.length + myAuthData.pendingAuth.operateAuth.length : 0,
      rejectNum: !_u.isEmpty(myAuthData.rejectAuth) ? myAuthData.rejectAuth.viewAuth.length + myAuthData.rejectAuth.operateAuth.length : 0
    }
  });
});

app.use('/api', apiRoutes);  //在路径前面添加父路径‘api’，则实际访问路径应该为‘api/seller’


var compiler = webpack(webpackConfig)

var devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,
  quiet: true
})

var hotMiddleware = require('webpack-hot-middleware')(compiler, {
  log: () => {
  }
})
// force page reload when html-webpack-plugin template changes
compiler.plugin('compilation', function (compilation) {
  compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
    hotMiddleware.publish({action: 'reload'})
    cb()
  })
})

// proxy api requests
Object.keys(proxyTable).forEach(function (context) {
  var options = proxyTable[context]
  if (typeof options === 'string') {
    options = {target: options}
  }
  app.use(proxyMiddleware(options.filter || context, options))
})

// handle fallback for HTML5 history API
app.use(require('connect-history-api-fallback')())

// serve webpack bundle output
app.use(devMiddleware)

// enable hot-reload and state-preserving
// compilation error display
app.use(hotMiddleware)

// serve pure static assets
var staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory)
app.use(staticPath, express.static('./static'))

var uri = 'http://localhost:' + port

devMiddleware.waitUntilValid(function () {
  console.log('> Listening at ' + uri + '\n')
})

module.exports = app.listen(port, function (err) {
  if (err) {
    console.log(err)
    return
  }

  // when env is testing, don't need open it
  if (autoOpenBrowser && process.env.NODE_ENV !== 'testing') {
    opn(uri)
  }
})
