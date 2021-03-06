jQuery(document).ready(function() {

    var altText;
    var navDivId;
    var navDivClass;

    function resetNav() {
        jQuery('#imageMapArea area').each(function() {
            var thisAltText = jQuery(this).attr('alt');
            var thisNavDivId = 'chart_nav' + thisAltText;
            jQuery('#' + thisNavDivId)
                .removeClass().addClass('nav' + thisAltText);
        });
    }

    function resetText() {
        jQuery('#charttext div').each(function() {
            if (jQuery(this).hasClass('textactive')) {
                jQuery(this).removeClass('textactive');
            }
        });
    }

    function identifySet(x) {
        altText = jQuery(x).attr('alt');
        navDivId = 'chart_nav' + altText;
        navDivClass = 'nav' + altText;
    }

    jQuery('#imageMapArea area').hover(function() {
        identifySet(this);
        if (!(jQuery('#' + navDivId).hasClass(navDivClass + '-active'))) {
            jQuery('#' + navDivId)
                .removeClass().addClass(navDivClass + '-hover');
        }
    },
    function() {
        identifySet(this);
        if (jQuery('#' + navDivId).hasClass(navDivClass + '-hover')) {
            jQuery('#' + navDivId).removeClass().addClass(navDivClass);
        }
    }).click(function() {
        resetNav();
        resetText();
        identifySet(this);
        var textDivClass = 'text' + altText;
        jQuery('#' + navDivId).addClass(navDivClass + '-active');
        jQuery('.' + textDivClass).addClass('textactive');
    });
});
