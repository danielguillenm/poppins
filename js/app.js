// Dom7
var $$ = Dom7;

// Init App
var app = new Framework7({
  	id: 'com.app',
  	root: '#app',
	theme: 'md',
	view: {
        pushState: true
    },
	cache:false,
	cacheDuration: 0,
	modalTitle: 'AppBase',
  	routes: [
		{
		path: '/home/',
    	url: 'index.html',
    	name: 'home',
  		},
		{
		path: '/maria/',
    	url: 'mariareyes.html',
    	name: 'maria',
  		},
		{
		path: '/gabby/',
    	url: 'gabbymora.html',
    	name: 'gabby',
  		},
		{
		path: '/confirmacion/',
    	url: 'confirmacion.html',
    	name: 'confirmacion',
		},
		{
		path: '/profile/',
    	url: 'profile.html',
    	name: 'profile',
  		},
		{
		path: '/nosotros/',
    	url: 'nosotros.html',
    	name: 'nosotros',
  		},
		{
		path: '/info-maria/',
    	url: 'info-maria.html',
    	name: 'info-maria',
  		},
		{
		path: '/citas/',
    	url: 'citas.html',
    	name: 'citas',
  		},
	],
	dialog: {
		title: 'AppBase',
		buttonOk: 'Aceptar',
  	},
	popup: {
		closeOnEscape: true,
		backdrop : false
	},
	sheet: {
		closeOnEscape: true,
	},
	popover: {
		closeOnEscape: true,
	},
	actions: {
		closeOnEscape: true,
	}
});



$$('#btnLogin').on('click', function (e) {
	e.preventDefault();
	
	var $valid = $$('#form-login')[0].checkValidity();
	if ($valid){
        $$('#form-login').trigger('reset');	
        app.loginScreen.close('#login');
		
		app.dialog.alert('!Welcome to AppBase !');
    }
	
});



$$(document).on('click', '#btnCheckout', function (e) {
	e.preventDefault();

	
	var notification = app.notification.create({
      icon: '<i class="material-icons">check</i>',
      title: 'Solicitud respondida',
      titleRightText: '',
      subtitle: '',
      text: "Su cita ha sido confirmada por María.",
      closeTimeout: 3000,
    });
    notification.open();
	
});





