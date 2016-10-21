app.controller('editController', function ($scope, $location, $routeParams, friendsFactory) {
	friendsFactory.show($routeParams.id, function(friend) {
		friend.birthday = new Date(friend.birthday)
		$scope.friend = friend;
	});

	$scope.update = function() {
		friendsFactory.update($scope.friend, function() {
			$location.url(`/show/${$scope.friend._id}`);
		});
	};
})