//require mongoose
var mongoose = require('mongoose');

//require mongoose schema
var Schema = mongoose.Schema;

//schema
	//title
	//author
	//image (use string)
	//releaseDate
var BookSchema = new Schema({
     title: String,
     author: String,
     image: String,
     releaseDate: String,
 });

//create Book Schema
var Book = mongoose.model('Book', BookSchema);

//export
module.exports = Book;