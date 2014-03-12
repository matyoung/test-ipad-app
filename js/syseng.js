$(function () {

	$("#btnSubmit").click(function () {
		var var1 = $("#firstname").val();
		var var2 = $("#lastname").val();

		var obj = { firstname: var1, lastname: var2 };
		var d = JSON.stringify(obj);

		/* var itm = "php/addUserScr.php"; */
		var itm = "http://www.emg3.com/dev/iOS-APP/php/addUserScr.php";

		$.ajax({
			url: itm,
			type: 'GET',
			data: obj,
			datatype: 'json',
			contentType: 'application/json; charset=utf-8',
			success: function () {
				alert('Name added');
			},
			error: function (request, err) {
				alert(err);
			}
		});
	});

});