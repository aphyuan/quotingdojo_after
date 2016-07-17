var mongoose = require('mongoose');

//basic models
var QuoteSchema = new mongoose.Schema({
 name: String,
 quote: String,
 like: Number
}, {timestamps: true})
mongoose.model('Quote', QuoteSchema); // We are setting this Schema in our Models as 'User'
