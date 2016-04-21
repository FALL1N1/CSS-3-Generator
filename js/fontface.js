// Here's data model
var ViewModel = function(family1, nameee1) {
    this.family = ko.observable(family1);
    this.namee = ko.observable(nameee1);
 
    this.fullName = ko.computed(function() {
        return this.family() + " " + this.namee();
    }, this);
};
 
ko.applyBindings(new ViewModel("", ""));