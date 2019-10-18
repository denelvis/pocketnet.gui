var navigation = (function(){

	var self = new nModule();

	var essenses = {};

	var Essense = function(p){

		var primary = deep(p, 'history');

		var el, w;

		var actions = {

		}

		var events = {
			scroll : function(){
				if (w.scrollTop() > 250){

					el.c.addClass('scrolled')
				}
				else{
					el.c.removeClass('scrolled')
				}
			},	

			toup : function(){

				console.log('asdsadsadasd')
				_scrollTop(0, null, 0)
			}
		}

		var renders = {
			menu : function(href){

				
				var k = localStorage['lentakey'] || 'index?b=true';

				if (k == 'index') k = 'index?b=true'

				if (k.indexOf('?') == -1) k = 'index?r=' + k


				var back = self.app.nav.api.backChainGet()


				self.shell({
					name :  'menu',
					inner : html,
					el : el.menu,

					data : {
						back : back,
						href : href,
						lentakey : k
					}
					

				}, function(p){

					p.el.find('.toup').on('click', events.toup)
					
				})
			},

			hide : function(){
				console.log("INIEVC1")

				if (el.c)
					el.c.closest('#navigationWrapper').addClass('hidden')
			},

			show : function(){
				console.log("INIEVC2")

				if (el.c)
					el.c.closest('#navigationWrapper').removeClass('hidden')
			}
		}

		var state = {
			save : function(){

			},
			load : function(){
				
			}
		}

		var initEvents = function(){
			
			self.app.nav.clbks.history.navigation = function(href){

				renders.menu(self.app.nav.get.pathname())

			}

			
			window.addEventListener('scroll', events.scroll)

			if(window.cordova){

				console.log("INIEVC")
				
				window.addEventListener('keyboardWillShow', renders.hide);
				window.addEventListener('keyboardWillHide', renders.show);

			}
		}

		var make = function(){

			renders.menu(self.app.nav.get.pathname())
		}

		return {
			primary : primary,

			getdata : function(clbk, p){

				var data = {};

				w = $(window)

				clbk(data);

			},

			destroy : function(){
				

				window.removeEventListener('scroll', events.scroll)

				if(window.cordova){
					window.removeEventListener('keyboardWillShow', renders.hide);
					window.removeEventListener('keyboardWillHide', renders.show);	
				}

				delete self.app.nav.clbks.history.navigation

				el = {};
			},
			
			init : function(p){

				state.load();

				el = {};
				el.c = p.el.find('#' + self.map.id);
				el.menu = el.c.find('.nmenu')

				initEvents();

				p.clbk(null, p);

				make();
			}
		}
	};



	self.run = function(p){

		var essense = self.addEssense(essenses, Essense, p);

		self.init(essense, p);

	};

	self.stop = function(){

		_.each(essenses, function(essense){

			essense.destroy();

		})

	}

	return self;
})();


if(typeof module != "undefined")
{
	module.exports = navigation;
}
else{

	app.modules.navigation = {};
	app.modules.navigation.module = navigation;

}