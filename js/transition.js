// Here's data model
$(document).ready(function(){
	var ViewModel = function(family1, nameee1, second) {
    this.thickness = ko.observable(family1);
    this.namee = ko.observable(nameee1);
	this.secondz = ko.observable(second);
	
	
    this.fullName = ko.computed(function() {
        return this.thickness() + " " + this.namee() + " " + this.secondz();
    }, this);
};
 
ko.applyBindings(new ViewModel("", ""));

$(".basic").spectrum({
    color: "#f00",
    change: function(color) {
        $("#basic-log").html("<br>" + color.toHexString() + ";").css({
	        'font-size' : '20px',
	        'font-family' : "roboto-thin",
	        'color' : 'grey'
	        
        });
    } 
});
});

$("#dropPurpose").change(function(){
	var option = $(this).find('option:selected').val();
	$(".printVal").text($(this).val());
	});
	
	
	