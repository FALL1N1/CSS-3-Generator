$(document).ready(function(){
	
$(".basic").spectrum({
    color: "#f00",
    change: function(color) {
        $("#basic-log").html("<br>The color RGB value is: " + color.toRgbString()).css({
	        'font-size' : '30px',
	        'font-family' : "roboto-thin",
	        'color' : 'grey'
	        
        });
    }
});

});
