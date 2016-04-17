$(document).ready(function(){
	
	// Assigning change event handler for the select box.
	// Triggers when selectbox options are changed 
	$("#dropPurpose").change(function(){
		// Setting currently changed option to option variable.
		var option = $(this).find('option:selected').val();
		// Setting input box value to selected option value.
		$(".printVal").text($(this).val());
	});
});