
ApplicationController = RouteController.extend({
	 layoutTemplate : 'istroKPILayout',
	 
	 onBeforeAction : function(){
		console.log("app before hook!");
		
		this.next();
	 },
	 
	 action : function(){
		 console.log('this should be overridden!');
	 } 
});


Router.configure({
  // this will be the default controller
  controller: 'ApplicationController'
});


Router.route('/', {
	 controller	: 'appController'
	,action 		: 'home'
});

Router.route('/kpiItem', {
	controller	: 'appController'
   ,action		: 'kpiItem'
});



appController = ApplicationController.extend({
	home : function(){
		this.render('Home');
	},
	
	kpiItem : function(){

		aa = this;
		this.render('KpiItem');
	}
});
	



