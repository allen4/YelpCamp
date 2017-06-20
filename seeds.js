var mongoose = require("mongoose"),
    Campground = require("./models/campground"),
    Comment = require("./models/comment"),
    data = [
        {
            name: "Cloud's Rest",
            image: "https://farm8.staticflickr.com/7252/7626464792_3e68c2a6a5.jpg",
            description: "blah blah"
        },        
        {
            name: "Desert mesa",
            image: "https://farm6.staticflickr.com/5181/5641024448_04fefbb64d.jpg",
            description: "blah blah blah"
        },        
        {
            name: "Canyon Floor",
            image: "https://farm5.staticflickr.com/4137/4812576807_8ba9255f38.jpg",
            description: "blah blah blah"
        }
    ];
function seedDB(){
    // Remove all campgrounds
    // Campground.remove({}, function(err){
    //     if (err) { 
    //         console. log(err); 
    //     }
    //     console.log("removed campgrounds!");
        // add a few campgrounds
        // data.forEach(function(seed){
        //     Campground.create(seed, function(err, campground){
        //         if (err) { console.log(err); }
        //         else {
        //             console.log("added a campground");
        //             //create a comment
        //             Comment.create(
        //                 {
        //                     text: "This place is greate, but I wish there was internet",
        //                     author: "allen"
        //                 }, function(err, comment){
        //                     if (err) {
        //                         console.log(err);
        //                     } else {
        //                         campground.comments.push(comment);
        //                         campground.save();
        //                         console.log("Created new comment");
        //                     }
        //                 }
        //             );
        //         }
        //     });
        // });
    // });
}

module.exports = seedDB;