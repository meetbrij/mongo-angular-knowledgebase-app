var mongoose = require('mongoose');

var categorySchema = mongoose.Schema({
	name : {
		type : String,
		index : true,
		required : true
	},
	descrition : {
		type : String,
		required : true
	}
});

var Category = module.exports = mongoose.model('Category', categorySchema);

// GET / READ all categories
module.exports.getCategories = function (callback) {
	Category.find(callback);
}

// Get / READ category by ID
module.exports.getCategoryById = function (id, callback) {
	Category.findById(id, callback);
}

// CREATE category
module.exports.createCategory = function (newCategory, callback) {
	newCategory.save(callback);
}

