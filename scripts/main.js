var app;

require.config({
	paths: {
	    jQuery: "../kendo/js/jquery.min",
		kendo: "../kendo/js/kendo.mobile.min",
        kendoIndexedListView: "../kendo/js/kendo.indexedlistview"
	},
    shim: {
        jQuery: {
            exports: "jQuery"
        },
        kendo: {
            exports: "kendo"
        }
    }
});
            
           
require(["jQuery", "app"], function($, application) {
    $(function() {
        app = application
        application.init();
    });
});

$(document).ready(function(){
            $(document).bind('deviceready', function(){
                    var output = $('#output');

                    $.ajax({
                            url: 'http://samcroft.co.uk/demos/updated-load-data-into-phonegap/landmarks.php',
                            dataType: 'jsonp',
                            jsonp: 'jsoncallback',
                            timeout: 5000,
                            success: function(data, status){
                                    $.each(data, function(i,item){ 
                                            var landmark = '<li><h1>'+item.name+'</h1>'
                                            + '<p>'+item.latitude+'<br>'
                                            + item.longitude+'</p></li>';

                                            output.append(landmark);
                                    });
                            },
                            error: function(){
                               output.text('There was an error loading the data.');
                            }
                    });
            });
    });