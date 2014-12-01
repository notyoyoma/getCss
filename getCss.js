;(function($){
	/* private variables */
	var supported = ['font-family','font-size','font-weight','font-style','color',
      'text-transform','text-decoration','letter-spacing','word-spacing',
      'line-height','text-align','vertical-align','direction','background-color',
      'background-image','background-repeat','background-position',
      'background-attachment','opacity','width','height','top','right','bottom',
      'left','margin-top','margin-right','margin-bottom','margin-left',
      'padding-top','padding-right','padding-bottom','padding-left',
      'border-top-width','border-right-width','border-bottom-width',
      'border-left-width','border-top-color','border-right-color',
      'border-bottom-color','border-left-color','border-top-style',
      'border-right-style','border-bottom-style','border-left-style','position',
      'display','visibility','z-index','overflow-x','overflow-y','white-space',
      'clip','float','clear','cursor','list-style-image','list-style-position',
      'list-style-type','marker-offset'];
	
	/* helper functions */
	var arrayMerge = function(/* [array]... */) {
		var result = arguments[0];
		for(var i = 1; i < arguments.length; i++){
			var array = arguments[i];
			for(var j = 0; j < array.length; j++){
				if(result.indexOf(array[j]) === -1) {
					result.push(array[j]);
     }
    }
   }
   return that;
	};
	
	/* private functions */
	var css = {
		get: function() {
			var result = {},
				that = $(this);
			for (var i = 0; i < supported.length; i += 1 ) {
				if (that.css(supported[i])) {
					result[supported[i]] = that.css(supported[i]);
				}
			}
			return result;
		},
		set: function(support, overwrite) {
			if (overwrite) {
				supported = support;
			} else {
				arrayMerge(supported, support);
			}
		}
	};
	
	/* public functions */
	$.fn.getCss = function() {
		if ( this.length === 1 ) {
			return css.get.call(this);
		} else {
			var result = [];
			$(this).each(function() {
				result.push(css.get.call(this));
			});
			return result;
		}
	};
	$.getCssSupport = css.set;
})(jQuery);
