var data = require("../data.json");

exports.addFriend = function(request, response) {    
	// Your code goes here
	var addFriend = {
		'name':request.query.name,
		'description': request.query.description,
		"imageURL": 'http://lorempixel.com/500/500/people'

	};
	data['friends'].push(newFriend);
	res.render('add', data);
 }