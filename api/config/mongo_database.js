var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');
var SALT_WORK_FACTOR = 10;
var mongodbURL = process.env.MONGODB_URI;
var mongodbOptions = { };

mongoose.connect(mongodbURL, mongodbOptions, function (err, res) {
	debugger;
    if (err) { 
        console.log('Connection refused to ' + mongodbURL);
        console.log(err);
    } else {
        console.log('Connection successful to: ' + mongodbURL);
    }
});

mongoose.connection.on('open', () => {
  console.log('Connected to mongodb server.');
  mongoose.connection.db.listCollections().toArray(function (err, names) {
    console.log(names);
   });
})

var Schema = mongoose.Schema;

//user schema 
var User = new Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    is_admin: { type: Boolean, default: false },
    created: { type: Date, default: Date.now }
});

// Bcrypt middleware on UserSchema
User.pre('save', function(next) {
  var user = this;

  if (!user.isModified('password')) return next();

  bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
    if (err) return next(err);

    bcrypt.hash(user.password, salt, function(err, hash) {
        if (err) return next(err);
        user.password = hash;
        next();
    });
  });
});

//Password verification
User.methods.comparePassword = function(password, cb) {
    bcrypt.compare(password, this.password, function(err, isMatch) {
        if (err) return cb(err);
        cb(isMatch);
    });
};

// blog post schema
var Post = new Schema({
    title: { type: String, required: true },
    tags: [ {type: String} ],
    is_published: { type: Boolean, default: false },
    content: { type: String, required: true },
    created: { type: Date, default: Date.now },
    updated: { type: Date, default: Date.now },
    read: { type: Number, default: 0 },
    likes: { type: Number, default: 0 },
    comments: [ {type: String}]
});


var postModel = mongoose.model('Post', Post);
var userModel = mongoose.model('User', User);

exports.userModel = userModel;
exports.postModel = postModel;