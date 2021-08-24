var mongoose = require('mongoose');
const {DateTime} = require("luxon");

var Schema = mongoose.Schema;

var BookInstanceSchema = new Schema(
  {
    book: { type: Schema.Types.ObjectId, ref: 'Book', required: true }, //reference to the associated book
    imprint: {type: String, required: true},
    status: {type: String, required: true, enum: ['Available', 'Maintenance', 'Loaned', 'Reserved'], default: 'Maintenance'},
    due_back: {type: Date, default: Date.now}
  }
);

// Virtual for bookinstance's URL
BookInstanceSchema
.virtual('url')
.get(function () {
  return '/bookinstance/' + this._id;
});

BookInstanceSchema
.virtual('due_back_updated')
.get(function () {
  let date_string = '';

  if(this.due_back) date_string = DateTime.fromJSDate(this.due_back).toLocaleString(DateTime.DATE_SHORT,{locale: 'pt-br'});

  return date_string;
})


BookInstanceSchema
.virtual('due_back_formatted')
.get(function () {
  return DateTime.fromJSDate(this.due_back).toLocaleString(DateTime.DATE_MED,{locale: 'pt-br'});
});

//Export model
module.exports = mongoose.model('BookInstance', BookInstanceSchema);