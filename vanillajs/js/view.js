/* ==========================
	View
   ========================== */
var view = {
	renderList: function() {
		var html = '';
		
		app.getCatNames().forEach(function(cat) {
			html += '<li data-id="'+cat.id+'">'+cat.name+'</li>';
		});

		this.$list.innerHTML = html;
	},

	updateList: function() {
		var cat  = model.getCurrent(),
			prev = document.querySelector('.selected'),
			elem = document.querySelectorAll('.cat-list li')[cat];

		if ( prev ) {
			prev.classList.remove('selected');
		}

		elem.classList.add('selected');
	},

	renderCat: function() {
		var cat  = model.getCat();

		var html = this.$cat
				   .replace('%id%', model.getCurrent())
				   .replace('%name%', cat.name)
				   .replace('%count%', cat.count)
				   .replace('%src%', cat.src);

		this.$view.innerHTML = html;
	},

	updateCat: function() {
		var cat = model.getCat();

		this.$view.querySelector('.cat-count').innerHTML = cat.count;
	},

	init: function() {
		this.$list = document.querySelector('.cat-list ul');
		this.$view = document.querySelector('.cat-view');
		this.$cat  = document.querySelector('.cat-template').innerHTML;

		this.renderList();

		this.$list.addEventListener('click', app.clickList, false);
		this.$view.addEventListener('click', app.clickView, false);

		this.updateList();
		this.renderCat();
	}
};