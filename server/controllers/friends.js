var mongoose = require('mongoose');
var Friend = mongoose.model('Friend');
module.exports = {
	index: function(req, res) {
		Friend.find({}, function(err, friends) {
			res.json(friends);
		});
	},
	create: function(req, res) {
		var friend = new Friend(req.body)
		friend.save(function(err, _friend) {
			console.log(_friend)
			res.json(_friend);
		});
	},
	update: function(req, res) {
		Friend.update({_id: req.params.id}, {$set: {
			first_name: req.body.first_name,
			last_name: req.body.last_name,
			birthday: req.body.birthday
		}}, function(err, _friend) {
				res.json(_friend);
		});
	},
	delete: function(req, res) {
		Friend.remove({_id: req.params.id}, function(err, status) {
			res.json(status);
		});
	},
	show: function(req, res) {
		Friend.findOne({_id: req.params.id}, function(err, friend) {
			res.json(friend);
		});
	}
}