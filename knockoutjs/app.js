var App = function() {
	var self = this;

	self.catList = ko.observableArray([]);

	initialCats.forEach(function(catItem) {
		self.catList.push( new Cat(catItem) );
	});

	self.currentCat = ko.observable( self.catList()[0] );

	self.increment = function() {
		var cat = self.currentCat();
		cat.count( cat.count() + 1 );
	};

	self.changeCurrent = function(index) {
		self.currentCat(self.catList()[index]);
	}
};

ko.applyBindings( new App() );