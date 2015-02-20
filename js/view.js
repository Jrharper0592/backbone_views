;(function(exports) {

    var Bodyview = Backbone.View.extend({
        //BB-Views-Keyword Methods/Properties
        el: "body",

        events: {
        	 'click .sideview':'callMarco',
        	 'click .mainview':'callPolo'
        },

        callMarco: function(event){
        	event.preventDefault();
        	Mainview.listenTo(Bodyview, "Marco", function(){
            Sideview.el.innerHTML += "POLO!";
            this.trigger("callMarco");
            console.log("Sideview marco?");
        });

        },

        callPolo: function(event){
        	Bodyview.listenTo(Sideview, "POLO!", function(){
            this.el.innerHTML += "marco";
            this.trigger('Marco');
        });

        },

        initialize: function() {
            console.log('Bodyview');
            
         	var sview = new Sideview();
            sview.render();

			var mview = new Mainview();
			mview.render();
        	
        	this.listenTo(sview,"Marco", function(){
        		backbone.trigger("Marco");
        		console.log("body:marco");
        	});
        },

        //BB common naming convention
            render: function() {
            	console.log("Brender function");
        }


    });

    var Sideview = Backbone.View.extend({
        //BB-Views-Keyword Methods/Properties
        el: ".sideview",
        //complete the event to be defined above.
        events: {
        	'click' : 'marco'
        },
		
        initialize: function() {
            console.log('Sideview');
        },

        //BB common naming convention
            render: function() {
            	console.log("Srender function");
        }

     });

     var Mainview = Backbone.View.extend({
        //BB-Views-Keyword Methods/Properties
        el: ".mainview",

        //write in the event

        initialize: function() {
            console.log('Mainview');
        },



        //BB common naming convention
            render: function() {
            	console.log("Mrender function");
        }


    });
var bview = new Bodyview();
	bview.render();
	
	// mview.listenTo(bview, "he said marco", function(){
 //    	mview.el.innerHTML = "POLO!";
	// 	}),

	// bview.listenTo(sview, "marco", function(){
 //    	this.trigger("he said marco");
	// 	}),
// var sview = new Sideview();
//     sview.render();

// var mview = new Mainview();
// 	mview.render();



})(typeof module === "object" ? module.exports : $);









/*** Namespacing example ***/

// var A = _.extend({}, Backbone.Events);

// A.on("test", function(){ console.log("test"); });
// A.on("test:hello", function(){ console.log("test:hello"); });

// A.trigger("test:hello"); //--> "test:hello"
// A.trigger("test"); 

/*** eavesdropper example: ***/

// Backbone.on('sayHi', function () {
// console.log('Hi');
// });

// //create an eavesdropper object and extend the object with Backbone.Events
// var eavesdropper = _.extend({}, Backbone.Events);

// //Set eavesdropper to listen for custom sayHi event attached to Backbone object
// eavesdropper.listenTo(Backbone, 'sayHi', function () {
//     console.log('I heard that');
// });

// //Trigger/Invoke the sayHi custom event
// Backbone.trigger('sayHi'); //logs 'Hi' and 'I heard that'
