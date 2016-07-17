var quotesController = require('./../../server/controllers/quotes.js');

module.exports = function(app){
  //****************** routes ******************
  app.get('/', function(req, res) {
      // This is where we will retrieve the users from the database and include them in the view page we will be rendering.
      res.render('index');
  })
  app.post('/quotes', quotesController.create);
  app.get('/quotes', quotesController.sort);
  app.post('/likes/:id', quotesController.getlike);
  app.get('/sortbylike', quotesController.sortlike);
  //****************** END routes **************
}
