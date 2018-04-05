var router = require('koa-router')();
var User = require('../model/userdata')
router.get('/', function *(next) {
  yield this.render('index', {
    title: 'Hello World Koa!'
  });
});

router.get('/foo', function *(next) {
  yield this.render('index', {
    title: 'Hello World foo!'
  });
});

router.get('/foo2', function *(next) {
  yield this.render('index', {
    title: 'Hello World foo!'
  });
});
router.get('/testadd', function *(ctx, next) {
  var nick = new User({
    name: 'tony',
    password: 'tony123',
    admin: true
  });

  // save the sample user
  nick.save(function(err) {
    if (err) throw err;
    ctx.body = { foo: 'bar'}
    console.log('User saved successfully');
    
  });

});

module.exports = router;
