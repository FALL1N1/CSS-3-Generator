// Here's data model
$(document).ready(function(){
	var ViewModel = function(family1, nameee1) {
    this.thickness = ko.observable(family1);
    this.namee = ko.observable(nameee1);
 
    this.fullName = ko.computed(function() {
        return this.thickness() + " " + this.namee();
    }, this);
};
 
ko.applyBindings(new ViewModel("", ""));