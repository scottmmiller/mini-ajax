$(document).ready(function() {
	var insertData = function(arr) {
		for (var i = 0; i < arr.length; i++) {
			$('#userInfo' + (i + 1)).html(
				'<div>' + 'User Info:' +
				'<li>' + 'First name:' + arr[i].first_name + '</li>' +
				'<li>' + 'Last name:' + arr[i].last_name + '</li>' +
				'<hr>' + '</div>');
		};
	};


	$('#getUsers').on('click', function () {
		return $.ajax ({
			method: 'GET',
			url: 'http://reqr.es/api/users?page=1',
			success: function(res) {
				console.log(res);
				insertData(res.data);
			}
		});
	});



});