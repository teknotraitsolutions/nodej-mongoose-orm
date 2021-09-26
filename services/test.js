const db = require("../models/index");
//********************************** */
// app.get("/products", function(req, res) {
//     db.Product.find({})
//         .then(function(dbProducts) {
//             res.json(dbProducts);
//         })
//         .catch(function(err) {
//             res.json(err);
//         })
// });


// // Route to get all reviews
// app.get("/reviews", function(req, res) {
//     db.Review.find({})
//         .then(function(dbReviews) {
//             res.json(dbReviews);
//         })
//         .catch(function(err) {
//             res.json(err);
//         })
// });


// Route for creating a new Product
const product = async(req, res) => {
    db.Product.create(req.body)
        .then(function(dbProduct) {
            // If we were able to successfully create a Product, send it back to the client
            res.json(dbProduct);
        })
        .catch(function(err) {
            // If an error occurred, send it to the client
            res.json(err);
        });
};

// Route for creating a new Review and updating Product "review" field with it
const review = async(req, res) => {
    // Create a new note and pass the req.body to the entry
    db.Review.create(req.body)
        .then(function(dbReview) {
            // If a Review was created successfully, find one Product with an `_id` equal to `req.params.id`. Update the Product to be associated with the new Review
            // { new: true } tells the query that we want it to return the updated Product -- it returns the original by default
            // Since our mongoose query returns a promise, we can chain another `.then` which receives the result of the query
            return db.Product.findOneAndUpdate({ _id: req.params.id }, { $push: { review: dbReview._id } }, { new: true });
        })
        .then(function(dbProduct) {
            // If we were able to successfully update a Product, send it back to the client
            res.json(dbProduct);
        })
        .catch(function(err) {
            // If an error occurred, send it to the client
            res.json(err);
        });
};


// Route for retrieving a Product by id and populating it's Review.
const getProductDetails = async(req, res) => {
    // Using the id passed in the id parameter, prepare a query that finds the matching one in our db...
    db.Product.findOne({ _id: req.params.id }).select('name')
        // ..and populate all of the notes associated with it
        .populate("review", "stars")
        .then(function(dbProduct) {
            // If we were able to successfully find an Product with the given id, send it back to the client
            res.json(dbProduct);
        })
        .catch(function(err) {
            // If an error occurred, send it to the client
            res.json(err);
        });
};


// Route to add color
const color = async(req, res) => {
    db.Color.create(req.body)
        .then(function(color) {
            // If we were able to successfully create a Product, send it back to the client
            res.json(color);
        })
        .catch(function(err) {
            // If an error occurred, send it to the client
            res.json(err);
        });
};

module.exports = {
    product,
    review,
    getProductDetails,
    color
}