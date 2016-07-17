var mongoose = require('mongoose');
var Quote = mongoose.model('Quote');

module.exports = {
  create: function(req, res){
      var quote = new Quote({name: req.body.name, quote: req.body.quote, like: 0});
      quote.save(function(err){
        if(err){
          console.log('there is an error in /quotes, post method: ', err);
        }else{
          res.redirect('/quotes')
        }
      });
  },
  sort: function(req, res){
    Quote.find({}).sort({createdAt:-1}).exec(
      function(err, quotes){
      if(err){
        console.log('there is an error in /quotes, get method: ', err);
      }else{
        res.render('quotes', {quotes:quotes});
      }
    });
  },
  getlike: function(req,res){
    console.log("have a try");
      Quote.findOne({_id: req.params.id}, function(err, quote){
        quote.like = Number(req.body.like) + 1;
        console.log(quote.like);
        quote.save(function(err){
          if(!err){
            console.log("update successfully");
            if(req.body.sort == "time"){
            res.redirect('/quotes');
          }
            else if(req.body.sort == "popularity"){
              res.redirect('/sortbylike')
            }
          }
        })
      })
  },
  sortlike: function(req, res){
    Quote.find({}).sort({like:-1}).exec(
      function(err, quotes){
      if(err){
        console.log('there is an error in /quotes, get method: ', err);
      }else{

        res.render('quotesbypop', {quotes:quotes});
      }
    })
  }
}
