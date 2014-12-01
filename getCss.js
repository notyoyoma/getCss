;(function(){
	/* private variables */
	var defaults = [ 'font-size' ];
	var supported = defaults.slice(0);
	
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
});