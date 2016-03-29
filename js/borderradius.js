
function ViewModel() {
  var self = this,
  result;
  
  self.tl = ko.observable(0);
  self.tr = ko.observable(0);
  self.bl = ko.observable(0);
  self.br = ko.observable(0);
  
  self.showWK = ko.observable(true);
  self.showGK = ko.observable(true);
  self.showCSS = ko.observable(true);
  
  self.result = ko.computed(function(){
    if (self.tl() === self.tr() && self.tl() === self.bl() && self.tl() === self.br() && self.tl() !== 0) {
      return getValue('', self.tl()).replace(/--/, '-');  
    }
    else {
      return getValue('top-left', self.tl()) +
        getValue('top-right', self.tr()) +
        getValue('bottom-left', self.bl()) +
        getValue('bottom-right', self.br());
    }
  });
  
  function getValue(key, value){
    if (!value) return '';
    
    result = '\n';
    if (self.showCSS()){
      result += 'border-' + key + '-radius: ' + value + 'px;\n';
    }
    if (self.showWK()){
      result += '-webkit-border-' + key + '-radius: ' + value + 'px;\n';
    }
    
    return result;
  }
  
}

ko.applyBindings(new ViewModel());