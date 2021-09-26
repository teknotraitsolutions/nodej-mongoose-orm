var mongoose = require("mongoose");

// Get the Schema constructor
var Schema = mongoose.Schema;

// Using Schema constructor, create a ProductSchema
var ColorSchema = new Schema({
    color: {
        type: String,
        required: true
    }
});

// Create model from the schema
var Color = mongoose.model("Color", ColorSchema);

// Export model
module.exports = Color;