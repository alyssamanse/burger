$(function() {
	$(".delete").on("click", function(event) {
		var id = $(this).data("id");

		$.ajax("/api/burgers/" + id, {
			type: "PUT", 
			data: {devoured: true}
		}).then(
			function() {
				console.log("changed to devoured");

				location.reload();
			})
	});

	$("#add-burger").on("submit", function(event) {
		event.preventDefault();

		var newBurger = {
			burger: $("#burger").val().trim()
		};

		$.ajax("/api/burgers", {
			type: "POST",
			data: newBurger
		}).then(
			function() {
				console.log("new burger created");

				location.reload();
			})
	});

});