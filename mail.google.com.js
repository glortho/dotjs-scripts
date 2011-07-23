var SMS = {
	tmpl: "<span id='smscount' style='padding: 3px 4px; position:relative; left: 6px; bottom: 3px; border: 1pt solid black; font-weight: bold; color: green'>{count}</span>",
	
	update_count: function(field, ctx) {
		var reply = field.split('\n\nOn')[0],
			count = 160 - reply.length,
			target = jQuery('#smscount', ctx)[0] || jQuery('.fw', ctx)[0];			
			
		if ( target.id == 'smscount' ) {
			target.innerHTML = count;
			if ( count < 0 ) {
				$(target).css('color','red');
			} else {
				$(target).css('color', 'green');
			}
		} else {
			$(target).append(this.tmpl.replace('{count}', count));
		}
	}
}

jQuery(function() {
	var $frame = jQuery('#canvas_frame');
	
	$frame.load( function() {
		var ctx = this.contentDocument;
		jQuery('.At textarea', ctx).live('keyup', function(event) {
			if ( jQuery('.eC textarea', ctx)[0].value.indexOf('(SMS)') > -1 ) {
				SMS.update_count(this.value, ctx);
			}
		});
	});
});