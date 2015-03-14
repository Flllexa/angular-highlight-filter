/**
* 	Angular hashtags highlighter
*
* 	Author: Sanjeya Cooray
*	Web Hosting: http://www.misadev.com
* 
* 	License: GPL v2 - The project is as is.
* 
* 	An AngularJS filter for highlighting and editing text parts on the view side with a regex. 
*/	
(function() {
    'use strict';
	    
	angular
		.module('app')
		.filter('highlight', function($sce) {
		    return function(text) {
		    	if (text==null)
		    		return null;
		   		text = text.replace(/(^|)#(\w+)/gi,highlight); //regex
		   		return $sce.trustAsHtml( text.replace(/\/@/gi,"/") );
		    };
		    
		    //how to highlight hashtags
		    function highlight(str){
		    	return '<a rel="nofollow" href="https://twitter.com/hashtag/'+str.replace(/#/,'') +'">'+str+'</a>';
		    	
		    }
		});
	 
})();