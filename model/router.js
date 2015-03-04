
if (Meteor.isClient) {
	ApplicationController = RouteController.extend({
		  layoutTemplate: 'ApplicationLayout',

		  onBeforeAction: function () {
		    // do some login checks or other custom logic
		    this.next();
		  }
		});

		Router.configure({
		  // this will be the default controller
		  controller: 'ApplicationController'
		});
}